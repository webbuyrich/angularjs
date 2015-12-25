/* JavaScript Document */

(function(){

	var app = angular.module('myCalculator', []);

	app.controller('CalculatorController', ['$scope', function($scope){


		// SETUP OF LUMENS FOR CALCULATIONS
		// set array of options to choose from
		$scope.lumen_options = [375, 600, 900, 1125, 1600];
		// set default option for lumens
		$scope.current_lumens = 600;
		// set default option for cost
		$scope.current_cost = 12;
		// set default option for hours
		$scope.current_hours = 3;
		// set default option for total days
		$scope.total_days = 365;

		//set conversion rates
		$scope.inc_conversion = .0625;
		$scope.hal_conversion = .0450;
		$scope.cfl_conversion = .0146;
		$scope.led_conversion = .0125;

		$scope.calculate = function(){
			alert();
		}

		$scope.calculate();

	}]);



})();


