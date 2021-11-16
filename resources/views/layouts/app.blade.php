<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        .f5-fz {
            font-size: 17px
        }

        .als {
            align-self: center;
        }

        .cp {
            cursor: pointer;
        }

        table>thead>tr>th,
        table>tbody>tr>td {
            padding: 0.5em 1em !important;
            vertical-align: middle !important;
        }

        table>tr>th {
            background: #415db5;
            color: white !important;
        }

        .bg-d-blue {
            background: #267ED6;
            color: white
        }

        .gr-bg-d-blue {
            background: #1e3c72;
            background: -webkit-linear-gradient(to right, #2a5298, #1e3c72);
            background: linear-gradient(to right, #2a5298, #1e3c72);
        }

        .gr-bg-d-blue-tl {
            background: #1e3c72;
            background: -webkit-linear-gradient(to left, #2a5298, #1e3c72);
            background: linear-gradient(to left, #2a5298, #1e3c72);
        }

        .brand-link {
            border-bottom: 1px solid #1E67AF !important;
        }

        .sidebar-light {
            border: none !important;
        }


        .user-panel {
            border-bottom: 1px solid #1E67AF !important;
        }

    </style>
</head>

<body class="hold-transition sidebar-mini layout-navbar-fixed layout-fixed">
    <div id="app">
        @auth
            @include('layouts.auth')
        @endauth
        @guest
            @include('layouts.guest')
        @endguest

    </div>

    <script>
        @auth
            window.user = @json(auth()->user());
            window.amr_data_permission_users= @json($in_permission);
        @endauth

    </script>
</body>

</html>
