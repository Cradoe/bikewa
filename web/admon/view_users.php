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

                            <div class="col-xl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <a href="#" class="btn btn-primary btn-sm float-right">
                                            <i class='uil uil-export ml-1'></i> Users
                                        </a>
                                        <h5 class="card-title mt-0 mb-0">Users</h5>

                                        <div class="table-responsive mt-4">
                                            <table id="datatable-buttons" class="table table-hover table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Fullname</th>
                                                        <th scope="col">Phone</th>
                                                        <th scope="col">Matric Number</th>
                                                        <th scope="col">Total Bookings</th>
                                                        <th scope="col">Joined Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php $sn = 1; foreach ($users as $user): ?>
                                                    <tr>
                                                        <td>#<?php echo $sn ?></td>
                                                        <td><?php echo $user['fullname'] ?></td>
                                                        <td><?php echo $user['phone'] ?></td>
                                                        <td><?php echo $user['matric_number'] ?></td>
                                                        <td><?php echo $user_obj->user_bookings_num($user['id']) ?> </td>
                                                        <td><?php echo format_date($user['created_at']) ?></td>
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