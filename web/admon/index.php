<?php 
session_start();
if (isset($_SESSION['bikewa_admin'])) {
    header('location: dashboard');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Login</title>

    <!-- Prevent the demo from appearing in search engines -->
    <meta name="robots" content="noindex">

    <!-- Simplebar -->
    <link type="text/css" href="assets/vendor/simplebar.min.css" rel="stylesheet">

    <!-- App CSS -->
    <link type="text/css" href="assets/css/app.css" rel="stylesheet">
    <link type="text/css" href="assets/css/app.rtl.css" rel="stylesheet">

    <!-- Material Design Icons -->
    <link type="text/css" href="assets/css/vendor-material-icons.css" rel="stylesheet">
    <link type="text/css" href="assets/css/vendor-material-icons.rtl.css" rel="stylesheet">

    <!-- Font Awesome FREE Icons -->
    <link type="text/css" href="assets/css/vendor-fontawesome-free.css" rel="stylesheet">
    <link type="text/css" href="assets/css/vendor-fontawesome-free.rtl.css" rel="stylesheet">

    <!-- ion Range Slider -->
    <link type="text/css" href="assets/css/vendor-ion-rangeslider.css" rel="stylesheet">
    <link type="text/css" href="assets/css/vendor-ion-rangeslider.rtl.css" rel="stylesheet">
</head>

<body class="layout-login-centered-boxed">

    <div class="layout-login-centered-boxed__form">
        <div class="d-flex flex-column justify-content-center align-items-center mt-2 mb-2 navbar-light">
            <a href="./" class="navbar-brand text-center mb-2 mr-0" style="min-width: 0">
                <img class="navbar-brand-icon" src="assets/images/logo.svg" width="43" alt="Flat">
                <span>BikeWa</span>
            </a>
        </div>

        <div class="card card-body">


            <div class="alert alert-soft-success d-flex" role="alert">
                <i class="material-icons mr-3">check_circle</i>
                <div class="text-body">Please enter your email address and password to login.</div>
            </div>
            <form id="loginForm" class="authentication-form">
                <div id="result"></div>
                <div class="form-group">
                    <label class="form-control-label">Email Address</label>
                    <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <span class="far fa-envelope"></span>
                            </span>
                        </div>
                        <input name="email" required type="email" class="form-control" id="email" placeholder="email@email.com">
                    </div>
                </div>

                <div class="form-group mt-4">
                    <label class="form-control-label">Password</label>
                    <a href="#" class="float-right text-muted text-unline-dashed ml-1">Forgot your password?</a>
                    <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <span class="fa fa-key"></span>
                            </span>
                        </div>
                        <input name="password" required type="password" class="form-control" id="password"
                        placeholder="Enter your password">
                    </div>
                </div>

                <div class="form-group mb-4">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input"
                        id="checkbox-signin" checked>
                        <label class="custom-control-label" for="checkbox-signin">Remember
                        me</label>
                    </div>
                </div>

                <div class="form-group mb-0 text-center">
                    <button class="btn btn-primary btn-block">
                        <i class="icon-rocket"></i>
                        <span class="spinner" style="display: none;">
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        </span>
                        <span class="btnText">
                            Login
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>


    <!-- jQuery -->
    <script src="assets/vendor/jquery.min.js"></script>

    <!-- Bootstrap -->
    <script src="assets/vendor/popper.min.js"></script>
    <script src="assets/vendor/bootstrap.min.js"></script>

    <!-- Simplebar -->
    <script src="assets/vendor/simplebar.min.js"></script>

    <!-- DOM Factory -->
    <script src="assets/vendor/dom-factory.js"></script>

    <!-- MDK -->
    <script src="assets/vendor/material-design-kit.js"></script>

    <!-- Range Slider -->
    <script src="assets/vendor/ion.rangeSlider.min.js"></script>
    <script src="assets/js/ion-rangeslider.js"></script>

    <!-- App -->
    <script src="assets/js/toggle-check-all.js"></script>
    <script src="assets/js/check-selected-row.js"></script>
    <script src="assets/js/dropdown.js"></script>
    <script src="assets/js/sidebar-mini.js"></script>
    <script src="assets/js/app.js"></script>

    <!-- App Settings (safe to remove) -->
    <script src="assets/js/app-settings.js"></script>



    <script>
        $('#loginForm').submit(function(e) {
            e.preventDefault();
            $.ajax({
                url:'ajax/login.php',
                type: 'POST',
                data : $(this).serialize(),
                cache: false,
                beforeSend: function() {
                    $('.spinner').show();
                    $('.btnText').hide();
                },
                success: function(data){

                    $('.spinner').hide();
                    $('.btnText').show();

                    if (data == 1) {
                        location.href = 'dashboard';
                    }
                    else{
                        $('#result').html(data);
                        $('#result').fadeIn();
                        $('.spinner').hide();
                    }
                }
            })
        });
    </script>



</body>

</html>