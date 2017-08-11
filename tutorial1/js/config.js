// This is the config.js
requirejs.config({
  baseUrl: 'js',
  paths:{
    angular: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min',
      'lib/angular.min'
    ],
    jquery: 'lib/jquery.min',
    methods: 'customScripts/methods'
  }
});
