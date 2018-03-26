angular.module('PaciApp')
    .controller('newAccount.Controller',  function ($scope, $sessionStorage) {

        $scope.vm;
        $scope.error = false;

        $scope.saveData = function(){
            if($scope.vm.name != undefined && $scope.vm.user != undefined && $scope.vm.email != undefined && $scope.vm.password != undefined && $scope.vm.password2 != undefined)
            if($scope.vm.password == $scope.vm.password2)
            saveStorage();
            if($scope.vm.password != undefined && $scope.vm.password2 != undefined)
            $scope.error = true;
        }

        function saveStorage(){
            $sessionStorage.user = {};
            $sessionStorage.user.name = $scope.vm.name;
            $sessionStorage.user.user = $scope.vm.user;
            $sessionStorage.user.email = $scope.vm.email;
            $sessionStorage.user.password = $scope.vm.password;  
            window.location.href = "#/signup";
        }
       
    });