angular.module('hackednews')
.controller('AppCtrl', function() {
})
.directive('app', () => {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/app.html'
  }
})