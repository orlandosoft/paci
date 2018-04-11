angular.module('PaciApp')
    .controller('signup.Controller',  function ($scope, $sessionStorage) {

        $scope.vm;
        
        $scope.saveData = function(){
            if($scope.vm.empresa != undefined 
                && $scope.vm.telefono != undefined 
                && $scope.vm.cif != undefined 
                && $scope.vm.direccion != undefined 
                && $scope.vm.pais != undefined 
                && $scope.vm.estado != undefined 
                && $scope.vm.ciudad != undefined)
            saveStorage();
        }

        function saveStorage(){
            $sessionStorage.user.empresa = $scope.vm.empresa;
            $sessionStorage.user.telefono = $scope.vm.telefono;
            $sessionStorage.user.cif = $scope.vm.cif;
            $sessionStorage.user.direccion = $scope.vm.direccion;  
            $sessionStorage.user.pais = $scope.vm.pais;  
            $sessionStorage.user.estado = $scope.vm.estado;  
            $sessionStorage.user.ciudad = $scope.vm.ciudad;  
            window.location.href = "#/purchase";
        }
        
       
    });