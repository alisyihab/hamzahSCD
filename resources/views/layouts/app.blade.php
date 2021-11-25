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
            background: #4758dd;
            color: white !important;
        }

        .bg-d-blue {
            background: #267ED6;
            color: white
        }

        .gr-bg-d-blue {
            background: linear-gradient(120deg, #4758dd, #4558d5, #4357cd, #4257c5, #4256bc, #4155b4, #4155ac, #4154a3, #42539b, #425193, #43508a, #434f82);
        }

        .gr-bg-d-red {
            background: #ED213A;
            /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #93291E, #ED213A);
            /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #93291E, #ED213A);
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



        }

        .gr-bg-d-red-tl {
            background: #ED213A;
            /* fallback for old browsers */
            background: -webkit-linear-gradient(to left, #93291E, #ED213A);
            /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to left, #93291E, #ED213A);
            /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }

        .gr-bg-d-blue-tl {
            background: #1e3c72;
            background: -webkit-linear-gradient(to left, #2a5298, #1e3c72);
            background: linear-gradient(to left, #2a5298, #1e3c72);
        }

        .brand-link {
            border-bottom: 1px solid #415db5 !important;
        }

        .sidebar-light {
            border: none !important;
        }


        .user-panel {
            border-bottom: 1px solid #415db5 !important;
        }

        .box-shadow-1 {
            -webkit-box-shadow: -9px 3px 13px -5px rgba(136, 167, 179, 0.53);
            box-shadow: -9px 3px 13px -5px rgba(136, 167, 179, 0.53);
        }

        .border-radius-10 {
            border-radius: 10px !important;
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
