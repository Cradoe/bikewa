<?php
class bikes_model extends CI_Model
{
    public function __construct()
    {
        $this->load->database();
        $this->load->model('fn_model');
        $this->status_code  = get_response_status_code();
    }

    public function check_bike_name($name)
    {

        $this->db->where("name", $name);
        $nameCheck = $this->db->get('bikes');
        if ($nameCheck->num_rows() > 0) {
            return true;
        }
        return false;
    }

    public function add_bike($details)
    {

        try {
            if ($this->db->insert('bikes', $details)) {
                $this->db->where(["name" => $details['name']]);
                $bike = $this->db->get('bikes')->row_array();
                if ($bike) {
                    return array(
                        'status' => "success",
                        'message' => "Bike Added.",
                        'status_code' => $this->status_code['created'],
                        'data' => $bike
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


    public function get_available_bikes()
    {

        $this->db->select('*');
        $bikes = $this->db->get_where('bikes', ['status' => 1])->result();
        return $bikes;
    }

    public function get_bike($id)
    {
        $this->db->select('*');
        $bike = $this->db->get_where('bikes', ['id' => $id, 'status' => 1])->row_array();

        if ($bike) {
            $bike['bookings'] = $this->_get_bike_bookings($id);
            return $bike;
        }
        return null;
    }

    public function _get_bike_bookings($bike_id)
    {
        $this->db->select('*');
        $bookings = $this->db->get_where('bookings', ['bike_id' => $bike_id])->result();

        if ($bookings) {
            return $bookings;
        }
        return null;
    }
}
