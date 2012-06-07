'use strict';

/* Controllers */


function NodeCtrl($route, $scope, $node) {
  $scope.node = $node.get($route.current.params.nid);
  $scope.update = function() {
    $node.update($scope.node.nid, $scope.node);
    jQuery('.ed').hide();
    //jQuery('.rend').show();
  }
  $scope.showEdit = function() {
    jQuery('.ed').show();
    //jQuery('.rend').hide();
  }
}
NodeCtrl.$inject = ['$route', '$scope', '$node'];



function ListCtrl($route, $scope, $node) {
  $scope.nodes = $node.getAll();
}
ListCtrl.$inject = ['$route', '$scope', '$node'];



function LoginCtrl($scope, $user) {
  $scope.username = '';
  $scope.password = '';
  $scope.user = $user.sessionUser();
  $scope.login = function($event) {
    $scope.user = $user.login($scope.username, $scope.password);
    $scope.username = '';
    $scope.password = '';
  }
  $scope.logout = function($event) {
    $user.logout();
    $scope.user = {};
    $scope.username = '';
    $scope.password = '';
  }
  $scope.save = function() {
    $user.update($scope.user.uid, $scope.user);
  }
}
LoginCtrl.$inject = ['$scope', '$user'];


function UserCtrl($scope, $user) {
  $scope.foo = '';
}
UserCtrl.$inject = ['$scope', '$user'];
