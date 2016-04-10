// (function(angular){
//   'use strict';
//
//   var myApp = angular.module('app');
//
//   myApp.controller('loginCtrl',function($scope){
//     $scope.test = function() {
//       console.log("yay");
//     };
//   });
// })(window.angular);

'use strict';
module.exports = function ($scope) {
  $scope.test = function () {
    console.log("yay login");
  }
};

