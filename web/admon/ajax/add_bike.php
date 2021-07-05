<?php 
	session_start();
	include_once '../../core/core.function.php';
	include_once '../../core/bikes.class.php';

	echo add_bike();
	function add_bike(){
		$bike_obj = new bikes();

		if (!$_POST['name'] || $_POST['name']=="") {
			return  displayWarning('bike name is required and cannot be empty');
		}

		$name = $_POST['name'];
		$price_per_minute = $_POST['price_per_minute'];
		$description = $_POST['description'];

		
		if ($bike_obj->check_bike_existence($name)) {
			return  displayWarning('You have already added this bike');
		}

		$image = 'http://localhost/bike_sharing/web/uploads/bikes/'.upload_file($_FILES['image'],'../../uploads/bikes/');

		if ($bike_obj->add_bike($name,$image,$price_per_minute,$description)) {
			return displaySuccess($name.' added successfully');
		}
		else{
			return displayError('Unable to add');
		}
	}
?>