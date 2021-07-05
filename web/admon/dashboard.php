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

                        <div class="row">
                            <div class="col-md">
                                <div class="card card-stats">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="card-header__title flex">Registered Users</div>
                                        <span class="text-muted"><?php echo $users_num ?></span>
                                    </div>
                                    <div class="position-relative d-flex align-items-start z-0">
                                        <div class="progress flex" style="height: 4px;">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <i class="material-icons text-success bg-white position-absolute" style="right: -4px; top: -10px; z-index: 2;">check_box</i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card card-stats">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="card-header__title flex">Bookings</div>
                                        <span class="text-muted"><?php echo $bookings_num ?></span>
                                    </div>
                                    <div class="progress" style="height: 4px;">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 33%;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card card-stats">
                                    <div class="d-flex align-items-center mb-2">                                        
                                        <div class="card-header__title flex">Added Bikes</div>
                                        <span class="text-muted"><?php echo $bikes_num ?></span>
                                    </div>
                                    <div class="progress" style="height: 4px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 17%;" aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card card-stats">
                                    <div class="d-flex align-items-center mb-2">                                        
                                        <div class="card-header__title flex">Payments Made</div>
                                        <span class="text-muted"><?php echo $payments_num ?></span>
                                    </div>
                                    <div class="progress" style="height: 4px;">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 17%;" aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-xl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <a href="#" class="btn btn-primary btn-sm float-right">
                                            <i class='uil uil-export ml-1'></i> Bookings
                                        </a>
                                        <h5 class="card-title mt-0 mb-0">List of Recent Bookings</h5>

                                        <div class="table-responsive mt-4">
                                            <table class="table table-hover table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Bike</th>
                                                        <th scope="col">Customer</th>
                                                        <th scope="col">Phone Number</th>
                                                        <th scope="col">Price Per Minute</th>
                                                        <th scope="col">Reservation Code</th>
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
                                                            <td>&#8358;<?php echo $booking['price_per_minute'] ?></td>
                                                            <td><?php echo $booking['code'] ?> </td>
                                                            <td><?php echo format_date($booking['created_at']) ?></td>
                                                            <td><?php echo format_date($booking['start_time']) ?></td>
                                                            <td><?php echo format_date($booking['start_time']) ?></td>
                                                        </tr>
                                                    <?php $sn++; endforeach ?>
                                                </tbody>
                                            </table>
                                        </div> <!-- end table-responsive-->
                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div>
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