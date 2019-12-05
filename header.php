<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>1p21 Dashboard</title>

	<!-- styles -->
	<link href="<?=DASHBOARD_ROOT_URL.'/assets/styles/style.css'?>" rel="stylesheet" />




</head>
<body class="body-nav-sticky-offset cf body-loading">
	<!--SVG Styles  -->
	<div id="dashboard">
		<!-- Sidebar -->
		<aside id="dashboard-block-sidebar"
		:class="{'open': open }"
		class="background-global">
			<?php include_once 'includes/sidebar.php'; ?>
		</aside>

			<main id="dashboard-block-main" class="background-global-contrast">

				<!-- Navigation -->
				<?php include_once 'includes/main-nav.php'; ?>

				<!-- App Content -->
				<div id="content-wrapper">
					<div class="container">


	