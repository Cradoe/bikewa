<?php 
session_start();
if (!isset($_SESSION['bike_admin'])) {
    header('location: ./');
    exit();
}

include_once '../core/users.class.php';
include_once '../core/bikes.class.php';
include_once '../core/bookings.class.php';
include_once '../core/core.function.php';
$user_obj = new Users();
$bike_obj = new Bikes();
$booking_obj = new Bookings();

$users_num = $user_obj->users_num();
$bikes_num = $bike_obj->bikes_num();
$bookings_num = $booking_obj->bookings_num();
$payments_num = $booking_obj->payments_num();

$bikes = $bike_obj->fetch_limited_bikes(10);
$bookings = $booking_obj->fetch_limited_bookings(10);
$users = $user_obj->fetch_limited_users(10);
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

                        <!-- content -->
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="header-title mt-0">New Bike</h4>
                                        <p class="sub-header">
                                            Enter new Bike details
                                        </p>

                                        <form class="form-horizontal" enctype="multipart/form-data" id="bikeForm">
                                            <div id="result"></div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="col-form-label" for="bike">Bike name</label>
                                                    <div class="">
                                                        <input autofocus type="text" placeholder="bike name" required class="form-control" name="name" id="bike_name">
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-form-label" for="bike">Price per minute</label>
                                                    <div class="">
                                                        <input type="text" placeholder="Price per minute" required class="form-control" name="price_per_minute" id="price_per_minute">
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-form-label" for="bike">Bike Image</label>
                                                    <div class="">
                                                        <input accept="image/*" type="file" placeholder="bike image" required class="form-control" name="image" id="bike_image">
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-form-label" for="bike">Description</label>
                                                    <div class="">
                                                        <textarea rows="5" style="resize: none;" placeholder="Description" required class="form-control" name="description" id="description"></textarea>
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



                </div>
                <!-- // END header-layout__content -->

            </div>
            <!-- // END header-layout -->

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
            url:'ajax/add_bike.php',
            type: 'POST',
            data :  new FormData(this),
            contentType: false,
            processData: false,
            cache: false,
            beforeSend: function() {
                $('.spinner').show();
                $('.btnText').hide();
            },
            success: function(data){

                $('.spinner').hide();
                $('.btnText').show();

                if (data.includes('successful')) {
                    $('input').val('');
                    $('textarea').val('');
                    $('#bike_name').attr('autofocus','true');
                }
                
                $('#result').html(data);
                $('#result').fadeIn();
                $('.spinner').hide();
                
            }
        })
    });
</script>