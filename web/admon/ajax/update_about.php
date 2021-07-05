<?php 
	session_start();
	include_once '../../core/core.function.php';
	include_once '../../core/settings.class.php';

	echo update_about();
	function update_about(){
		$setting_obj = new Settings();

		if (!$_POST['about_text'] || $_POST['about_text']=="") {
			return  displayWarning('About Text is required and cannot be empty');
		}

		$about_text = $_POST['about_text'];
		

		if ($setting_obj->update_about($about_text)) {
			return displaySuccess('About updated successfully');
		}
		else{
			return displayError('Unable to update about');
		}
	}
?>