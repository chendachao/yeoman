`
var app = angular.module('myApp', []);

app.controller('myController', function () {
    var vm = this;
    
    vm.onClick = function () {
        console.log(Hello, ${name}!);
    };
    
});
`