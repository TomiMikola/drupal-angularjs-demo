'use strict';

/* Services */


var DCModule = angular.module('DC.services', ['ngResource', 'ngCookies']);

DCModule.factory('$node', function($resource, $location, $route) {
    var serviceInstance = {
      getAll: function() {
        return $resource('/rest_endpoint/node').query();
      },
      get: function(nid) {
        return $resource('/rest_endpoint/node/:nid').get({nid:nid});
      },
      update: function(nid, node_data) {
        $resource('/rest_endpoint/node/:nid',
                                    {nid:nid},
                                    {save: {method:'PUT'}}).
                            save(node_data);
      }
    };
  
    return serviceInstance;
  });
  
  
DCModule.factory('$user', function($resource, $location, $route, $cookies) {
    var serviceInstance = {
      login: function(name, pwd) {
        return $resource('/rest_endpoint/user/login').
                  save({
                    username:name,
                    password:pwd
                  },
                  function(response) {
                    //$location.path('/user');
                  },
                  function(response) {
                    //Error occurred
                    alert('Login failed!');
                  });
      },
      logout: function() {
        return $resource('/rest_endpoint/user/logout').
                  save({},function(response) {
                    $route.reload();
                  });
      },
      sessionUser: function() {
        return $resource('/rest_endpoint/session/current').get();
      },
      update: function(uid, account_data) {
        $resource('/rest_endpoint/session/:uid',
                                    {uid:uid},
                                    {save: {method:'PUT'}}).
                            save(account_data);
      }
    };
  
    return serviceInstance;
  });