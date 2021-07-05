<?php 
session_start();
if (!isset($_SESSION['bike_admin'])) {
    header('location: ./');
    exit();
}

include_once '../core/users.class.php';
include_once '../core/core.function.php';
$user_obj = new users();

$users = $user_obj->fetch_users();
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <?php include_once 'components/head.php'; ?>
</head>

<body class="layout-default">


    <div class="preloader"></div>

    <div class="mdk-drawer-layout js-mdk-drawer-layout" data-push data-responsive-width="992px" data-fullbleed>
        <div class="mdk-drawer-layout__content">

            <!-- Header Layout -->
            <div class="mdk-header-layout js-mdk-header-layout" data-has-scrolling-region>

                <!-- Header -->

                <?php include_once 'components/header.php'; ?>

                <!-- // END Header -->

                <!-- Header Layout Content -->
                <div class="mdk-header-layout__content mdk-header-layout__content--fullbleed mdk-header-layout__content--scrollable page">




                    <div class="container-fluid page__container">
                        <!-- stats + charts -->
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="header-title mt-0">Confirm Booking </h4>
                                        <p class="sub-header">
                                            Enter Booking Code
                                        </p>

                                        <form class="form-horizontal" id="bikeForm">
                                            <div id="result"></div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="col-form-label" for="bike">Code</label>
                                                    <div class="">
                                                        <input autofocus type="text" placeholder="Code" required class="form-control" name="code" id="code">
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <button class="btn btn-primary btn-block">
                                                        <span class="spinner" style="display: none;">
                                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                        </span>
                                                        <span class="btnText">
                                                            Submit
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                    </div> <!-- end card-body -->
                                </div> <!-- end card-->
                            </div><!-- end col -->
                        </div>



                    </div>
                    <!-- // END header-layout__content -->

                </div>
                <!-- // END header-layout -->

            </div>
        </div>
        <!-- // END drawer-layout__content -->

        <?php include_once 'components/sidebar.php'; ?>
    </div>
    <!-- // END drawer-layout -->

    <!-- App Settings FAB -->
    <div id="app-settings">
        <app-settings></app-settings>
    </div>



</body>

</html>

<?php include_once 'components/scripts.php'; ?>

<script>
    $('#bikeForm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            url:'ajax/verify_booking_code.php',
            type: 'POST',
            data :  {code: $('#code').val()},
            cache: false,
            beforeSend: function() {
                $('.spinner').show();
                $('.btnText').hide();
            },
            success: function(data){

                $('.spinner').hide();
                $('.btnText').show();

                if (data) {
                    location.href = "code_found?code="+$('#code').val();
                }
                else{
                    $('#result').html('<div class="alert alert-warning"> Booking code not found </div>');
                    $('#result').fadeIn();
                }

                console.log(data);
                
            }
        })
    });
</script>