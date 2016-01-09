var myApp = angular
					.module("myModule", [])
					.controller("myController", function ($scope) {
					    var persons = [
							{ name: "Shashesh", dateOfBirth: new Date("December 29, 1990"), gender: "Male", salary: "27000" },
							{ name: "Sagun", dateOfBirth: new Date("March 23, 1991"), gender: "Male", salary: "35000" },
							{ name: "Ruraj", dateOfBirth: new Date("June 29, 1987"), gender: "Female", salary: "45000" },
							{ name: "Santo", dateOfBirth: new Date("August 12, 1989"), gender: "Male", salary: "22000" },
							{ name: "Batista", dateOfBirth: new Date("September 29, 1992"), gender: "Female", salary: "15000" }
					    ];

					    $scope.persons = persons;

					    $scope.sortColumn = "name";
					    $scope.reverseSort = false;

					    $scope.sortData = function (column) {
					        $scope.reverseSort = $scope.sortColumn == column ? !$scope.reverseSort : false;
					        $scope.sortColumn = column;
					    };

					    $scope.sortClass = function (column) {
					        if ($scope.sortColumn == column)
					            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
					    };

					    $scope.search = function (item) {
					        if ($scope.searchText == undefined) {
					            return true;
					        }
					        else {
					            if (item.name.toLowerCase()
                                             .indexOf($scope.searchText.toLowerCase()) != -1 ||
                                    item.salary.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1) {
					                return true;
					            }
					        }

					        return false;
					    };
					});