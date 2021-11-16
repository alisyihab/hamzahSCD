@php
$in_sidebar = [
    [
        'nama_sidebar' => 'Sidebar',
        'icon_sidebar' => 'fa-align-left',
        'get_sub_sidebar' => [
            [
                'fk_nama_permission' => 'sidebar.index',
                'nama_sub_sidebar' => 'Daftar Sidebar',
            ],
            // [
            //     'fk_nama_permission' => '/sidebar/create',
            //     'nama_sub_sidebar' => 'Tambah Sidebar',
            // ],
        ],
    ],
    [
        'nama_sidebar' => 'Kelola User',
        'icon_sidebar' => 'fa-users',
        'get_sub_sidebar' => [
            [
                'fk_nama_permission' => 'kelola-user.index',
                'nama_sub_sidebar' => 'Daftar User',
            ],
            [
                'fk_nama_permission' => 'kelola-user.create',
                'nama_sub_sidebar' => 'Tambah User',
            ],
        ],
    ],
    [
        'nama_sidebar' => 'Akses User',
        'icon_sidebar' => 'fa-cogs',
        'get_sub_sidebar' => [
            [
                'fk_nama_permission' => 'role.index',
                'nama_sub_sidebar' => 'Daftar Role',
            ],
            [
                'fk_nama_permission' => '/permission',
                'nama_sub_sidebar' => 'Daftar Permission',
            ],
        ],
    ],
];

@endphp


<aside class="main-sidebar sidebar-light-lime ">
    {{-- {{ $in_sidebars }} --}}

    <a href="#" class="brand-link gr-bg-d-blue text-white">
        <img src="/file/default/data.png" alt="Data Center" class="brand-image">
        <span class="brand-text font-weight-bolder">Data Center</span>
    </a>
    <div class="sidebar  gr-bg-d-blue">
        @auth
            <div class="user-panel  mt-3 pb-3 mb-3 d-flex">
                <div class="image " style="align-self: center;">
                    <i class="fa fa-user-circle img-circle text-white align-middle fa-2x" aria-hidden="true"></i>
                </div>
                <div class="info">
                    <a href="#" class="d-block font-weight-bolder text-white"> {{ substr(auth()->user()->nama, 0, 15) }}
                    </a>
                    <small class="d-block  badge badge-light font-weight-bold">
                        {{ auth()->user()->email }}
                    </small>
                </div>
            </div>
        @endauth
        <!-- Sidebar Menu -->
        <nav class="mt-2 ">
            <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu"
                data-accordion="false">
                <li class="nav-item">
                    <router-link to="/dashboard " class="nav-link text-white">
                        <i class="nav-icon fa fa-home  "></i>
                        <p>
                            Halaman Utama
                        </p>
                    </router-link>
                </li>

                @foreach ($in_sidebars as $data_sidebar)

                    @if (count($data_sidebar['get_sub_sidebar']) > 0)
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link text-white ">
                                <i class="nav-icon fa {{ $data_sidebar['icon_sidebar'] }} "></i>
                                <p>
                                    {{ $data_sidebar['nama_sidebar'] }}
                                    <i class="right fa fa-angle-left"></i>

                                </p>
                            </a>
                            <ul class="nav nav-treeview">

                                @foreach ($data_sidebar['get_sub_sidebar'] as $route)
                                    <li class="nav-item ">
                                        <router-link :to="{name:'{{ $route['fk_nama_permission'] }}'}"
                                            class="nav-link text-white">

                                            <p>{{ $route['nama_sub_sidebar'] }}</p>
                                        </router-link>
                                    </li>
                                @endforeach
                            </ul>
                        </li>
                    @endif
                @endforeach

                @auth
                    <li class="nav-item">
                        <a href=" {{ route('logout') }} " class="nav-link text-white"
                            onclick="event.preventDefault(); document.getElementById('logoutForm').submit()">
                            <i class="nav-icon fa fa-power-off text-danger"></i>
                            <p>
                                Logout
                            </p>
                            <form action=" {{ route('logout') }} " id="logoutForm" method="POST">
                                @csrf
                            </form>
                        </a>
                    </li>
                @endauth
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
