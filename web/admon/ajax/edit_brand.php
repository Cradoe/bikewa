<?php 
	session_start();
	include_once '../../core/core.function.php';
	include_once '../../core/brands.class.php';

	echo add_brand();
	function add_brand(){
		$brand_obj = new Brands();

		if (!isset($_POST['brand_name']) || $_POST['brand_name']=="") {
			return  displayWarning('Brand name is required and cannot be empty');
		}

		$brand_image = $_POST['old_brand_image'];
		$brand_name = $_POST['brand_name'];
		$id = $_POST['brand_id'];

		if ($brand_obj->check_edit_brand_existence($brand_name,$id)) {
			return  displayWarning('You have already added this brand');
		}

		if (isset($_FILES['brand_image']) && !empty($_FILES['brand_image']['name'])) {
			$brand_image = upload_file($_FILES['brand_image'],'../../uploads/brands/');
		}

		if ($brand_obj->update_brand($brand_name,$brand_image,$id)) {
			return displaySuccess($brand_name.' updated successfully');
		}
		else{
			return displayError('Unable to update');
		}
	}
?>