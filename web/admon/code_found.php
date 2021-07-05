<?php 
session_start();
if (!isset($_SESSION['bike_admin'])) {
    header('location: ./');
    exit();
}

include_once '../core/bookings.class.php';
include_once '../core/core.function.php';
$booking_obj = new bookings();
$booking_code = $_GET['code'];
$booking = $booking_obj->fetch_booking($booking_code);
if (!$booking) {
    $notFound = true;
}
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
                                        <h4 class="header-title mt-0">Booking Code  Found</h4>
                                        <p class="sub-header">
                                            Booking Code
                                        </p>

                                        <table class="table table-striped">
                                            <tr>
                                                <th>Bike</th>
                                                <td><?php echo $booking['name'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>User</th>
                                                <td><?php echo $booking['fullname'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>User's Phone</th>
                                                <td><?php echo $booking['phone'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>User's Matric Number</th>
                                                <td><?php echo $booking['matric_number'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Price Per Minute</th>
                                                <td>&#8358;<?php echo $booking['price_per_minute'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Booking Date</th>
                                                <td><?php echo format_date($booking['created_at']) ?></td>
                                            </tr>
                                            <tr>
                                                <th>Start Time</th>
                                                <td>

                                                    <?php if (format_date($booking['start_time']) != "") : ?>
                                                        <?php echo format_date($booking['start_time']) ?>
                                                        <?php else: ?>
                                                            <a href="start_trip?bc=<?php echo $booking['id'] ?>">Start Trip</a>
                                                        <?php endif ?>                                                    
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Returned Time</th>
                                                    <td>

                                                        <?php if (format_date($booking['return_time']) != "" && format_date($booking['start_time']) != "") : ?>
                                                        <?php echo format_date($booking['return_time']) ?>
                                                        <?php else: ?>
                                                            <?php if (format_date($booking['start_time']) != "") : ?>
                                                                <a href="stop_trip?bc=<?php echo $booking['id'] ?>">Returned Trip</a>
                                                            <?php endif ?> 
                                                        <?php endif ?>                                                    
                                                    </td>
                                                </tr>
                                            </table>

                                        </div> <!-- end card-body -->
                                    </div> <!-- end card-->
                                </div><!-- end col -->
                            </div>
                            <!-- row -->


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