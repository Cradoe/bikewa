<?php

use Hamcrest\Description;

defined('BASEPATH') or exit('No direct script access allowed');
require APPPATH . 'libraries/REST_Controller.php';

class Bikes extends REST_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('bikes_model');
        $this->load->model('fn_model');
        $this->status_code  = get_response_status_code();
        $this->load->library('form_validation');
    }

    function index_get()
    {

        /* 
            @Description Bikes Endpoint. Check for API connection.
            Returns connection object
        */
        $this->response([
            'status' => 'success',
            'message' => 'Bikes API Connected successful.',
            'time_connected' => date('d-M-Y h:i:s'),
            'domain' => base_url()
        ], REST_Controller::HTTP_OK);
    }

    function view_get($id = '')
    {
        /* 
            @Description View Endpoint. Check for API connection.
            Returns bike(s) object
        */
        if ($id) {
            $bike = $this->bikes_model->get_bike($id);
            if ($bike == null) {
                return $this->response([
                    'status' => "error",
                    'message' => "Bike is not available.",
                    'status_code' => $this->status_code['ok'],
                ], $this->status_code['ok']);
            }
            return $this->response([
                'status' => "success",
                'message' => "Bike fetched successfully.",
                'status_code' => $this->status_code['ok'],
                'data' => $bike
            ], $this->status_code['ok']);
        } else {
            $bikes = $this->bikes_model->get_available_bikes();
            if ($bikes == null) {
                return $this->response([
                    'status' => "error",
                    'message' => "No bike is currently available.",
                    'status_code' => $this->status_code['ok'],
                ], $this->status_code['ok']);
            }
            return $this->response([
                'status' => "success",
                'message' => "Bikes fetched successfully.",
                'status_code' => $this->status_code['ok'],
                'data' => $bikes
            ], $this->status_code['ok']);
        }
    }
}
