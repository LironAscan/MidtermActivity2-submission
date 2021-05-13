// JavaScript source code
(function () {
	'use strict';

	angular.module("StuApp",[])
	.controller('StuController', StuController);

	StuController.$inject = ['$scope'];
	function StuController($scope){
		$scope.studentOne = {
			firstName: "Liron",
			middleName: "Blaise",
			lastName: "Ascan",
			fullName: "Liron Blaise Ascan",
			schoolStrand: "STEM",
			schoolGrade: "12",
			schoolLocale: "Informatics College",
			classGrades: [
			{name: "English", score: 97},
			{name: "Math", score: 86},
			{name: "Science", score: 78},
			{name: "Foreign Language", score: 71},
			{name: "Information Technology", score: 95},
			],
			scoreGrade: "Passed",
			scoreCollate: "97, 86, 78, 71, 95"

			/*fullName: function() {
				var stuOneObject;
				stuOneObject = $scope.studentOne;
				return stuOneObject.firstName + " " + stuOneObject.middleName + " " + stuOneObject.lastName;
			}*/

		}

		/*$scope.studentTwo = {
			firstName: "Thea",
			middleName: "Mari",
			lastName: "Nemeno",
			fullName: "Thea Mari Nemeno",
			schoolStrand: "STEM",
			schoolGrade: "11",
			schoolLocale: "Leveno College",
			classGrades: [
			{name: "English", score: 87},
			{name: "Math", score: 81},
			{name: "Science", score: 67},
			{name: "Foreign Language", score: 66},
			{name: "Information Technology", score: 76},
			],
			scoreGrade: "Passed"

		}

		$scope.studentThree = {
			firstName: "Mara",
			middleName: "Vija",
			lastName: "Nerro",
			fullName: "Mara Vija Nerro",
			schoolStrand: "STEM",
			schoolGrade: "12",
			schoolLocale: "San Marino College",
			classGrades: [
			{name: "English", score: 86},
			{name: "Math", score: 80,
			{name: "Science", score: 65},
			{name: "Foreign Language", score: 77},
			{name: "Information Technology", score: 88},
			],
			scoreGrade: "Passed"

		}*/
	}

})();