angular.module('hackednews')
.controller('TopTenController', () => {
  // write any controller logic here.
})
.directive('topTenList', () => {
  return {
    scope: {
      articles: '<'
    },
    restrict: 'E',
    transclude: true,
    controller: 'topTenList',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/topTenList.html'
  };
})
