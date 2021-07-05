<?php 
    include_once '../core/bookings.class.php';
    $sb = new bookings();
    $sta = $sb->payments_total_amount();
    $bn = $sb->bookings_num();
?>

<div class="mdk-drawer  js-mdk-drawer" id="default-drawer" data-align="start">
    <div class="mdk-drawer__content">
        <div class="sidebar sidebar-dark sidebar-left simplebar" data-simplebar>
            <div class="d-flex align-items-center sidebar-p-a border-bottom sidebar-account flex-shrink-0">
                <a href="./" class="flex d-flex align-items-center text-underline-0 text-body">
                    <span class="mr-3">
                        <img src="assets/images/logo.svg" width="43" height="43" alt="avatar">
                    </span>
                    <span class="flex d-flex flex-column">
                        <strong style="font-size: 1.125rem;">BikeWa</strong>
                        <!-- <small class="text-muted text-uppercase" style="color: rgba(255,255,255,.54)">Bootstrap 4</small> -->
                    </span>
                </a>
                <div class="dropdown ml-auto">
                    <a href="#" data-toggle="dropdown" data-caret="false" class="text-muted"><i class="material-icons">keyboard_arrow_down</i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <div class="dropdown-item-text dropdown-item-text--lh">
                            <div><strong>Administrator</strong></div>
                            <div>@Bikewa</div>
                        </div>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item active" href="./">Dashboard</a>
                        <a class="dropdown-item" href="logout">Logout</a>
                    </div>
                </div>
            </div>
            <div class="sidebar-stats row no-gutters align-items-center text-center border-bottom flex-shrink-0">
                <div class="sidebar-stats__col col">
                    <div class="sidebar-stats__title">Bookings</div>
                    <div class="sidebar-stats__value"><?php echo $bn ?></div>
                </div>
                <div class="sidebar-stats__col col border-left">
                    <div class="sidebar-stats__title">Earnings</div>
                    <div class="sidebar-stats__value">&#8358;<?php echo $sta['amount'] ?></div>
                </div>
            </div>

            <div class="py-4 text-center flex-shrink-0">
                <a style="min-width: 157px;" href="/add_bike" class="btn btn-primary">Create <i class="material-icons ml-1">add</i></a>
            </div>


            <div class="tab-content">
                <div id="sm-menu" class="tab-pane show active" role="tabpanel" aria-labelledby="sm-menu-tab">
                    <ul class="sidebar-menu flex">
                        <li class="sidebar-menu-item active">
                            <a class="sidebar-menu-button" href="./">
                                <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">dvr</i>
                                <span class="sidebar-menu-text">Dashboard</span>
                            </a>
                        </li>


                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#bikes_menu">
                                <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">donut_small</i>
                                <span class="sidebar-menu-text">Bikes</span>
                                <span class="badge badge-warning rounded-circle badge-notifications ml-auto" style="margin: .1875rem .375rem;"></span>
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            
                            <ul class="sidebar-submenu collapse" id="bikes_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="add_bike">
                                        <span class="sidebar-menu-text">Add Bike</span>
                                    </a>
                                </li>
                                    <a class="sidebar-menu-button" href="view_bikes">
                                        <span class="sidebar-menu-text">View Bikes</span>
                                    </a>
                                </li>
                            </ul>
                        </li>



                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#bookings_menu">
                                <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">description</i>
                                <span class="sidebar-menu-text">Bookings</span>
                                <span class="badge badge-warning rounded-circle badge-notifications ml-auto" style="margin: .1875rem .375rem;"></span>
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            
                            <ul class="sidebar-submenu collapse" id="bookings_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="confirm_booking">
                                        <span class="sidebar-menu-text">Confirm Booking</span>
                                    </a>
                                </li>
                                    <a class="sidebar-menu-button" href="view_bookings">
                                        <span class="sidebar-menu-text">View Bookings</span>
                                    </a>
                                </li>
                            </ul>
                        </li>



                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#payments_menu">
                                <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">monetization_on</i>
                                <span class="sidebar-menu-text">Payments</span>
                                <span class="badge badge-warning rounded-circle badge-notifications ml-auto" style="margin: .1875rem .375rem;"></span>
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            
                            <ul class="sidebar-submenu collapse" id="payments_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="confirm_payment">
                                        <span class="sidebar-menu-text">Confirm Payment</span>
                                    </a>
                                </li>
                                    <a class="sidebar-menu-button" href="view_payments">
                                        <span class="sidebar-menu-text">View Payments</span>
                                    </a>
                                </li>
                            </ul>
                        </li>


                        <li class="sidebar-menu-item">
                            <a class="sidebar-menu-button" data-toggle="collapse" href="#payments_menu">
                                <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">developer_board</i>
                                <span class="sidebar-menu-text">Payments</span>
                                <span class="badge badge-warning rounded-circle badge-notifications ml-auto" style="margin: .1875rem .375rem;"></span>
                                <span class="ml-auto sidebar-menu-toggle-icon"></span>
                            </a>
                            
                            <ul class="sidebar-submenu collapse" id="payments_menu">
                                <li class="sidebar-menu-item">
                                    <a class="sidebar-menu-button" href="confirm_payment">
                                        <span class="sidebar-menu-text">Confirm Payment</span>
                                    </a>
                                </li>
                                    <a class="sidebar-menu-button" href="view_payments">
                                        <span class="sidebar-menu-text">View Payments</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="mt-auto sidebar-p-a sidebar-b-t d-flex flex-column flex-shrink-0">
                <a class="sidebar-link" href="logout">
                    Logout
                    <i class="sidebar-menu-icon ml-2 material-icons icon-16pt">exit_to_app</i>
                </a>
            </div>

        </div>
    </div>
</div>