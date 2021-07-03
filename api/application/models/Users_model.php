<?php
class users_model extends CI_Model
{
    public function __construct()
    {
        $this->load->database();
        $this->load->model('fn_model');
        $this->load->model('bikes_model');
        $this->status_code  = get_response_status_code();
    }

    public function get_login_info($credentials)
    {
        $this->db->where(["matric_number" => $credentials['matric_number']]);
        $user = $this->db->get('users')->row_array();

        if (!$user) {
            return array(
                'status' => "error",
                'message' => "Unknown matric number",
                'status_code' => $this->status_code['unauthorized']
            );
        }

        if ($user['password'] !== $credentials['password']) {
            $user['bookings_count'] = $this->get_user_bookings_count($user['id']);
            return array(
                'status' => "error",
                'message' => "Login failed! Incorrect account password.",
                'status_code' => $this->status_code['unauthorized']
            );
        }

        return array(
            'status' => "success",
            'message' => "Login successful.",
            'status_code' => $this->status_code['ok'],
            'data' => $user
        );
    }


    public function check_user_matric_number($matric_number)
    {

        $this->db->where("matric_number", $matric_number);
        $matric_numberCheck = $this->db->get('users');
        if ($matric_numberCheck->num_rows() > 0) {
            return true;
        }
        return false;
    }

    public function create_account($details)
    {
        try {
            if ($this->db->insert('users', $details)) {
                $this->db->where(["matric_number" => $details['matric_number']]);
                $user = $this->db->get('users')->row_array();
                if ($user) {
                    $user['bookings_count'] = $this->get_user_bookings_count($user['id']);
                    return array(
                        'status' => "success",
                        'message' => "Registration Completed.",
                        'status_code' => $this->status_code['created'],
                        'data' => $user
                    );
                } else {
                    return array(
                        'status' => "error",
                        'message' => "Opps! The server has encountered a temporary error. Please try again later",
                        'status_code' => $this->status_code['internalServerError']
                    );
                }
            } else {
                return array(
                    'status' => "error",
                    'message' => "Opps! The server has encountered a temporary error. Please try again later",
                    'status_code' => $this->status_code['internalServerError']
                );
            }
        } catch (\Throwable $th) {
            return array(
                'status' => "error",
                'message' => $th,
                'status_code' => $this->status_code['internalServerError']
            );
        };
    }

    public function get_user_bookings($user_id)
    {
        $this->db->select('*');
        $this->db->where(['user_id' => $user_id]);
        $bookings = $this->db->order_by('id', "desc")->get('bookings')->result();

        if ($bookings) {
            foreach ($bookings as $booking) {

                $booking->bike = $this->fn_model->get_bike($booking->bike_id);

                if ($booking->start_time != null) {
                    $start_time = new DateTime($booking->start_time);
                    $return_time = new DateTime($booking->return_time);
                    $elapsed_time = $start_time->diff($return_time);

                    $minutes = $elapsed_time->days * 24 * 60;
                    $minutes += $elapsed_time->h * 60;
                    $minutes += $elapsed_time->i;
                    $booking->minutes = $minutes;
                    $booking->price = $minutes * $booking->bike['price_per_minute'];
                }
            }

            return $bookings;
        }
        return null;
    }


    public function get_user_bookings_count($user_id)
    {
        $this->db->select('id');
        $this->db->where(['user_id' => $user_id]);
        return $this->db->order_by('id', "desc")->get('bookings')->num_rows();
    }


    public function add_user_booking($data)
    {
        if ($this->db->insert('bookings', $data)) {
            $this->update_bike_status(['status' => 0, 'id' => $data['bike_id']]);
            return $this->get_user_last_booking($data['user_id']);
        }
        return false;
    }

    public function get_user_last_booking($user_id)
    {
        $this->db->select('*');
        $this->db->where(['user_id' => $user_id]);
        $booking = $this->db->order_by('id', "desc")->get('bookings')->row();

        if ($booking) {
            return $booking;
        }
        return null;
    }

    public function update_bike_status($data)
    {
        $update_bike_status = $this->db->update('bikes', $data, ['id' => $data['id']]);
        if ($update_bike_status) {
            return true;
        }
        return false;
    }


    public function get_user_payments($user_id)
    {
        $this->db->select('*');
        $this->db->where(['user_id' => $user_id]);
        $payments = $this->db->order_by('id', "desc")->get('payments')->result();

        if ($payments) {
            return $payments;
        }
        return null;
    }

    public function add_user_payment($data)
    {
        if ($this->db->insert('payments', $data)) {
            $user = $this->get_user($data['id']);

            $new_balance = $user['balance'] + $data['amount'];
            $this->update_user_balance(['balance' => $new_balance , 'id' => $data['bike_id']]);
        }
        return false;
    }

    public function get_user($id)
    {
        $this->db->where(["id" => $id]);
        $user = $this->db->get('users')->row_array();
        return $user;
    }
}
