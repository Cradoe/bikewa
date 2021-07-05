<?php 
include_once '../../core/session.class.php';
include_once '../../core/admin.class.php';
include_once '../../core/core.function.php';

$session = new Session();
$admin_obj = new Admin();

if (isset($_POST['email'])) {
	$email = $_POST['email'];
	$password = md5($_POST['password']);

	if ($admin_obj->check_email($email)) {
		if ($admin_obj->admin_login($email,$password)) {
			$admin = $admin_obj->fetch_admin($email);
			$session->create_session('bike_admin',$admin);
			echo 1;
		}
		else{
			echo displayWarning('Invalid Password');
		}
	}
	else{
		echo displayWarning('Email address not recognised');
	}
}

else{
	echo "No input made";
}
?>