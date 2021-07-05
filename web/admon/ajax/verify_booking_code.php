<?php 
session_start();
if (!isset($_SESSION['bike_admin'])) {
    header('location: ./');
    exit();
}

include_once '../../core/bookings.class.php';
include_once '../../core/core.function.php';
$booking_obj = new bookings();
$booking_code = $_POST['code'];
$booking = $booking_obj->fetch_booking($_POST['code']);
if ($booking) {
	echo true;
}
else {
	echo false;
}
?>