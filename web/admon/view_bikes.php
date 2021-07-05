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

                            <div class="col-xl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <a href="#" class="btn btn-primary btn-sm float-right">
                                            <i class='uil uil-export ml-1'></i> Bikes
                                        </a>
                                        <h5 class="card-title mt-0 mb-0">Bikes</h5>

                                        <div class="table-responsive mt-4">
                                            <table id="datatable-buttons" class="table table-hover table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Bike Name</th>
                                                        <th>Image</th>
                                                        <th>Price per Minute</th>
                                                        <th>Description</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php foreach ($bikes as $bike): ?>
                                                        <tr>
                                                            <td><?php echo $bike['name'] ?></td>
                                                            <td><img height="80" src="<?php echo $bike['image'] ?>"></td>
                                                            <td><?php echo $bike['price_per_minute'] ?></td>
                                                            <td><?php echo substr($bike['description'], 0,80) ?></td>
                                                            <td>
                                                                <?php if ($bike['status']): ?>
                                                                    <span class="text-success">Available</span>
                                                                <?php else: ?>
                                                                    <span class="text-warning">Not available</span>
                                                                <?php endif ?>
                                                            </td>
                                                        </tr>
                                                    <?php endforeach ?>
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