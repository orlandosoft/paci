angular.module('PaciApp')
    .controller('purchase.Controller', function ($scope) {
       
        $scope.plan = 1 ;

        $scope.gratuito = function(){
            console.log("gratis");
            
        }        

        $scope.empresarial = function(){
            console.log("empresarial");
        }        

    });