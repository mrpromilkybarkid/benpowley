angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('index', {
				url: '/',
				templateUrl: 'pages/home.html',
			})
			.state('about', {
				url: '/about',
				templateUrl: 'pages/about.html',
			})
			.state('portfolio', {
				url: '/portfolio',
				templateUrl: 'pages/portfolio.html',
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'pages/contact.html',
			})
	}])
