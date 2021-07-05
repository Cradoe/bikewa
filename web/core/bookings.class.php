<?php
    include_once 'db.class.php';

    class Bookings extends DB{

        function add_booking($booking_no,$user_id,$bike_id){
            return DB::execute("INSERT INTO bookings(booking_no,user_id,bike_id) VALUES(?,?,?)", [$booking_no,$user_id,$bike_id]);
        }

        function fetch_bookings(){
            return DB::fetchAll("SELECT *,bookings.created_at,bookings.id FROM bookings
            LEFT OUTER JOIN bikes on bikes.id = bookings.bike_id
            LEFT OUTER JOIN users on users.id = bookings.user_id
            ORDER BY bookings.id ASC ",[]);
        }

        function fetch_limited_bookings($limit){
            return DB::fetchAll("SELECT *,bookings.created_at,bookings.id FROM bookings
            LEFT OUTER JOIN bikes on bikes.id = bookings.bike_id
            LEFT OUTER JOIN users on users.id = bookings.user_id
            ORDER BY bookings.id ASC LIMIT $limit ",[]);
        }

        function fetch_booking($id){
            return DB::fetch("SELECT *,bookings.id FROM bookings
            LEFT OUTER JOIN bikes on bikes.id = bookings.bike_id
            LEFT OUTER JOIN users on users.id = bookings.user_id
            WHERE  bookings.id = ? OR code = ? ",[$id,$id] );
        }

        function change_booking_start_time($id){
            return DB::execute("UPDATE bookings set start_time = now() WHERE id = ? ",[$id] );
        }

        function change_booking_return_time($id){
            return DB::execute("UPDATE bookings set return_time = now() WHERE id = ? ",[$id] );
        }
       
        function bookings_num(){
            return DB::num_row("SELECT id FROM bookings ", []);
        }






        function fetch_payments(){
            return DB::fetchAll("SELECT *,payments.created_at,payments.id FROM payments
            LEFT OUTER JOIN users on users.id = payments.user_id
            ORDER BY payments.id ASC ",[]);
        }

        function fetch_limited_payments($limit){
            return DB::fetchAll("SELECT *,payments.created_at,payments.id FROM payments
            LEFT OUTER JOIN users on users.id = payments.user_id
            ORDER BY payments.id ASC LIMIT $limit ",[]);
        }

        function fetch_payment($id){
            return DB::fetch("SELECT *,payments.id FROM payments
            LEFT OUTER JOIN users on users.id = payments.user_id
            WHERE  payments.id = ? OR code = ? ",[$id,$id] );
        }
       
        function payments_num(){
            return DB::num_row("SELECT id FROM payments ", []);
        }
       
        function payments_total_amount(){
            return DB::fetch("SELECT sum(amount) as amount FROM payments ", []);
        }
    }
?>