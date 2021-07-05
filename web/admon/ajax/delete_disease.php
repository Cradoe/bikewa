<?php 
	include_once '../../core/diseases.class.php';
	include_once '../../core/core.function.php';

	echo delete_disease();
	function delete_disease(){
		$disease = new Diseases();
		$disease_id = $_POST['disease_id'];

		if ($disease->delete_disease($disease_id)) {
			return 1;
		}
		else{
			return displayError('Unable to delete');
		}
	}
?>