<?php 
	session_start();
	include_once '../../core/core.function.php';
	include_once '../../core/categories.class.php';

	echo add_category();
	function add_category(){
		$category_obj = new Categories();

		if (!$_POST['category'] || $_POST['category']=="") {
			return  displayWarning('Category is required and cannot be empty');
		}

		$category = $_POST['category'];
		$id = $_POST['category_id'];

		
		if ($category_obj->check_edit_category_existence($category,$id)) {
			return  displayWarning('You have already added this category');
		}

		if ($category_obj->update_category($category,$id)) {
			return displaySuccess('Category updated successfully');
		}
		else{
			return displayError('Unable to update');
		}
	}
?>