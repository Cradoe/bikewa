<?php 
session_start();
if (!isset($_SESSION['bike_admin'])) {
    header('location: ./');
    exit();
}

include_once '../core/bookings.class.php';
include_once '../core/core.function.php';
$booking_obj = new bookings();
$id = $_GET['bc'];
$booking = $booking_obj->fetch_booking($id);
if ($booking) {
    $booking_obj->change_booking_start_time($id);
}

echo "<script>history.back()</script>";
?>