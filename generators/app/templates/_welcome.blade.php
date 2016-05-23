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
		<script src="client/app/controllers/HomeCtrl.js" type="text/javascript" charset="utf-8"></script>
		<script src="client/vendor/jquery/dist/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="client/vendor/bootstrap/dist/js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>