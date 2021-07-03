<?php
defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';

class Users extends REST_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('users_model');
        $this->load->model('fn_model');
        $this->status_code  = get_response_status_code();
        $this->load->library('form_validation');
    }

    function index_get()
    {

        $this->response([
            'status' => 'success',
            'message' => 'users API Connected successful.',
            'time_connected' => date('d-M-Y h:i:s'),
            'domain' => base_url()
        ], REST_Controller::HTTP_OK);
    }
    function login_post()
    {
        $this->form_validation->set_rules('matric_number', 'Matric Number', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');


        if ($this->form_validation->run() === FALSE) {
            $this->response([
                'status' => "failed",
                'message' => "Provide Matric Number and password.",
                'status_code' => $this->status_code['badRequest'],
                'data' => []
            ], $this->status_code['badRequest']);
        } else {
            $credentials = array(
                'matric_number' => $this->input->post('matric_number'),
                'password' => encrypt($this->input->post('password'))
            );
            $result = $this->users_model->get_login_info($credentials);
            $this->response($result, $result['status_code']);
        }
    }

    function register_post()
    {

        $this->load->library('form_validation');

        try {

            $this->form_validation->set_rules('matric_number', 'Matric Number', 'required');
            $this->form_validation->set_rules('fullname', 'Full name', 'required');
            $this->form_validation->set_rules('phone', 'Phone', 'required');
            $this->form_validation->set_rules('password', 'Password', 'required');
            if ($this->form_validation->run() === FALSE) {
                $this->response([
                    'status' => "failed",
                    'message' => "One or more required data is missing.",
                    'status_code' => $this->status_code['badRequest'],
                    'data' => []
                ], $this->status_code['badRequest']);
            } 
            else {
                $details = array(
                    "fullname" => $this->input->post('fullname'),
                    "phone" => $this->input->post('phone'),
                    "matric_number" => $this->input->post('matric_number'),
                    "password" => encrypt($this->input->post('password'))
                );

                if ($this->users_model->check_user_matric_number($details['matric_number'])) {
                    $this->response([
                        'status' => 'error',
                        'message' => 'Hey! The matric number is already associated with another account.',
                        'status_code' => $this->status_code['forbidden']
                    ], $this->status_code['forbidden']);
                } 
                else {
                    $response = $this->users_model->create_account($details);
                    $this->response($response, $response['status_code']);
                }
            }
        }
        catch (\Throwable $th) {
            $this->response([
                'status' => 'error',
                'message' => "Opps! The server has encountered a temporary error. Please try again later.",
                'status_code' => $this->status_code['internalServerError']
            ], $this->status_code['internalServerError']);
        }
    }

    function bookings_get($user_id)
    {
        if ($user_id) {
            $user_bookings = $this->users_model->get_user_bookings($user_id);
            if ($user_bookings == null) {
                return $this->response([
                    'status' => "error",
                    'message' => "You have no bookings.",
                    'status_code' => $this->status_code['ok'],
                ], $this->status_code['ok']);
            }
            return $this->response([
                'status' => "success",
                'message' => "Your bookings fetched successfully.",
                'status_code' => $this->status_code['ok'],
                'data' => $user_bookings
            ], $this->status_code['ok']);
        }
    }

    function bookings_post()
    {
        $this->form_validation->set_rules('user_id', 'user ID', 'required');
        $this->form_validation->set_rules('bike_id', 'bike_id', 'required');
        if ($this->form_validation->run() === FALSE) {
            return $this->response([
                'status' => "failed",
                'message' => "All inputs are required.",
                'status_code' => $this->status_code['badRequest'],
                'data' => []
            ], $this->status_code['badRequest']);
        }

        $data = [
            'user_id' => $this->input->post('user_id'),
            'bike_id' => $this->input->post('bike_id'),
            'code' => rand(11111111,99999999)
        ];

        $bike = $this->fn_model->get_bike($data['bike_id']);
        if ($bike['status'] == 0) {
            return $this->response([
                'status' => "error",
                'message' => "This bike is not available.",
                'status_code' => $this->status_code['ok'],
            ], $this->status_code['ok']);
        }

        $booking = $this->users_model->add_user_booking($data);
        if (!$booking) {
            return $this->response([
                'status' => "error",
                'message' => "Booking not complete.",
                'status_code' => $this->status_code['internalServerError'],
            ], $this->status_code['internalServerError']);
        }

        return $this->response([
            'status' => "success",
            'message' => "You just booked a bike successfully.",
            'status_code' => $this->status_code['created'],
            'data' => $booking
        ], $this->status_code['created']);
    }



    function payments_post()
    {
        $this->form_validation->set_rules('user_id', 'user ID', 'required');
        $this->form_validation->set_rules('amount', 'amount', 'required');
        $this->form_validation->set_rules('txref', 'Tx Ref', 'required');
        if ($this->form_validation->run() === FALSE) {
            return $this->response([
                'status' => "failed",
                'message' => "All inputs are required.",
                'status_code' => $this->status_code['badRequest'],
                'data' => []
            ], $this->status_code['badRequest']);
        }

        $data = [
            'user_id' => $this->input->post('user_id'),
            'amount' => $this->input->post('amount'),
            'txref' => $this->input->post('txref'),
        ];

        $payment = $this->users_model->add_user_payment($data);
        if (!$payment) {
            return $this->response([
                'status' => "error",
                'message' => "Payment not complete.",
                'status_code' => $this->status_code['internalServerError'],
            ], $this->status_code['internalServerError']);
        }

        return $this->response([
            'status' => "success",
            'message' => "You wallet was top uped  successfully.",
            'status_code' => $this->status_code['created'],
            'data' => $payment
        ], $this->status_code['created']);
    }


    function payments_get($user_id)
    {
        if ($user_id) {
            $user_payments = $this->users_model->get_user_payments($user_id);
            if ($user_payments == null) {
                return $this->response([
                    'status' => "error",
                    'message' => "You have no payments.",
                    'status_code' => $this->status_code['ok'],
                ], $this->status_code['ok']);
            }
            return $this->response([
                'status' => "success",
                'message' => "Your payments fetched successfully.",
                'status_code' => $this->status_code['ok'],
                'data' => $user_payments
            ], $this->status_code['ok']);
        }
    }
}
