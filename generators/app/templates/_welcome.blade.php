<!DOCTYPE html>
<html ng-app="<%= name %>">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><%= name %></title>
	<link rel="stylesheet" type="text/css" href="client/assets/css/app.css">
	<link rel="stylesheet" type="text/css" href="client/vendor/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>

	<div class="container">
		<div ui-view> </div>
	</div>

	<script src="client/vendor/angular/angular.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="client/vendor/angular-route/angular-route.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="client/vendor/angular-ui-router/release/angular-ui-router.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="client/app/app.js" type="text/javascript" charset="utf-8"></script>
	<script src="client/app/routes.js" type="text/javascript" charset="utf-8"></script>
	<script src="client/app/controllers.js" type="text/javascript" charset="utf-8"></script>
	<script src="client/app/factories.js" type="text/javascript" charset="utf-8"></script>
	<script src="client/app/services.js" type="text/javascript" charset="utf-8"></script>
	<script src="client/app/directives.js" type="text/javascript" charset="utf-8"></script>

	<!-- yeoman controllers go here  -->
	<generated-controllers>
		<script src="client/app/controllers/homeCtrl.js" type="text/javascript" charset="utf-8"></script>
	</generated-controllers>
	<!-- yeoman controllers end here  -->

	<!-- yeoman factories go here  -->
	<generated-factories>
	</generated-factories>
	<!-- yeoman factories end here  -->

	<!-- yeoman services go here  -->
	<generated-services>
	</generated-services>
	<!-- yeoman services end here  -->

	<!-- yeoman directives go here  -->
	<generated-directives>
	</generated-directives>
	<!-- yeoman directives end here  -->

	<!-- yeoman filters go here  -->
	<generated-filters>
	</generated-filters>
	<!-- yeoman filters end here  -->

	<script src="client/vendor/jquery/dist/jquery.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="client/vendor/bootstrap/dist/js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>