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
                        <!-- stats + charts -->
                        <div class="row">

                            <div class="col-xl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <a href="#" class="btn btn-primary btn-sm float-right">
                                            <i class='uil uil-export ml-1'></i> Bookings
                                        </a>
                                        <h5 class="card-title mt-0 mb-0">Bookings</h5>

                                        <div class="table-responsive mt-4">
                                            <table id="datatable-buttons" class="table table-hover table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Bike</th>
                                                        <th scope="col">User</th>
                                                        <th scope="col">Users' Phone</th>
                                                        <th scope="col">Price Per Minute</th>
                                                        <th scope="col">Code</th>
                                                        <th scope="col">Booking Date</th>
                                                        <th scope="col">Start Time</th>
                                                        <th scope="col">Return Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php $sn = 1; foreach ($bookings as $booking): ?>
                                                    <tr>
                                                        <td>#<?php echo $sn ?></td>
                                                        <td><?php echo $booking['name'] ?></td>
                                                        <td><?php echo $booking['fullname'] ?></td>
                                                        <td><?php echo $booking['phone'] ?></td>
                                                        <td><?php echo $booking['price_per_minute'] ?></td>
                                                        <td><?php echo $booking['code'] ?> </td>
                                                        <td><?php echo format_date($booking['created_at']) ?></td>
                                                        <td>
                                                            <?php if (format_date($booking['start_time']) != "") : ?>
                                                                <?php echo format_date($booking['start_time']) ?>
                                                                <?php else: ?>
                                                                    <a href="start_trip?bc=<?php echo $booking['id'] ?>">Start Trip</a>
                                                                <?php endif ?>  
                                                            </td>
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
                                                        <?php $sn++; endforeach ?>
                                                    </tbody>
                                                </table>
                                            </div> <!-- end table-responsive-->
                                        </div> <!-- end card-body-->
                                    </div> <!-- end card-->
                                </div>
                            </div>
                            <!-- row -->
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