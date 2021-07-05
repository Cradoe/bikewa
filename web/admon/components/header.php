<div id="header" class="mdk-header js-mdk-header m-0" data-fixed data-effects="waterfall" data-retarget-mouse-scroll="false">
    <div class="mdk-header__content">

        <div class="navbar navbar-expand-sm navbar-main navbar-light bg-white  pr-0" id="navbar" data-primary>
            <div class="container-fluid p-0">

                <!-- Navbar toggler -->
                <button class="navbar-toggler navbar-toggler-custom d-lg-none d-flex mr-navbar" type="button" data-toggle="sidebar">
                    <span class="material-icons">short_text</span>
                </button>

                <!-- Navbar Brand -->
                <a href="./" class="navbar-brand flex ">
                    <span>Dashboard</span>
                </a>


                <form class="ml-auto search-form search-form--light d-none d-sm-flex flex" action="./">
                    <input type="text" class="form-control" placeholder="Search">
                    <button class="btn" type="submit" role="button"><i class="material-icons">search</i></button>
                </form>


                <ul class="nav navbar-nav d-none d-md-flex">
                    <li class="nav-item dropdown">
                        <a href="#notifications_menu" class="nav-link dropdown-toggle" data-toggle="dropdown" data-caret="false">
                            <i class="material-icons nav-icon navbar-notifications-indicator">notifications</i>
                        </a>
                        <div id="notifications_menu" class="dropdown-menu dropdown-menu-right navbar-notifications-menu">
                            <div class="dropdown-item d-flex align-items-center py-2">
                                <span class="flex navbar-notifications-menu__title m-0">Notifications</span>
                                <a href="javascript:void(0)" class="text-muted"><small>Clear all</small></a>
                            </div>
                            <div class="navbar-notifications-menu__content" data-simplebar>
                                <div class="py-2">
                                </div>

                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#events-drawer" data-toggle="sidebar" class="nav-link d-flex align-items-center">
                        <i class="material-icons nav-icon">event_note</i>
                        <span class="badge badge-warning text-primary-dark rounded-circle badge-notifications">3</span>
                    </a>
                </li>
            </ul>
            <div class="dropdown">
                <a href="#" data-toggle="dropdown" data-caret="false" class="dropdown-toggle navbar-toggler navbar-toggler-company border-left d-flex align-items-center ml-navbar">
                    <span class="rounded-circle">
                        <span class="material-icons">business</span>
                    </span>
                </a>
                <div id="company_menu" class="dropdown-menu dropdown-menu-right navbar-company-menu">
                    <div class="dropdown-item d-flex align-items-center py-2 navbar-company-info py-3">

                        <span class="mr-3">
                            <img src="assets/images/frontted-logo-blue.svg" width="43" height="43" alt="avatar">
                        </span>
                        <span class="flex d-flex flex-column">
                            <strong style="font-size: 1.125rem;">Frontted</strong>
                            <small class="text-muted text-uppercase">8 Users</small>
                        </span>

                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item d-flex align-items-center py-2" href="#">
                        <span class="material-icons mr-2">settings</span> Settings
                    </a>
                    <a class="dropdown-item d-flex align-items-center py-2" href="#">
                        <span class="material-icons mr-2">exit_to_app</span> Switch Company
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item d-flex align-items-center py-2" href="#">
                        <span class="material-icons mr-2">add</span> New Company
                    </a>
                </div>
            </div>

        </div>
    </div>

</div>