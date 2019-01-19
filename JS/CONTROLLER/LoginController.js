app.controller('LoginController', function($scope, LoginFactory){


    $scope.log = {};


    $scope.login = function(){        
            var userLogin = LoginFactory.login($scope.log);

                userLogin.then(function(data){
                        alert('data sent');
                })
                .then(null, function(data){
                    alert('empty');
                });

                
            };


    

  

});