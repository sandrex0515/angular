
app.controller('RegisterController', function($scope, RegisterFactory){
$scope.register = {};
$scope.returnMsg = {};
$scope.usertbl = [];
usertbl();
$scope.save = function(){
 var newUser = RegisterFactory.save($scope.register);
    newUser.then(function(data){

        $scope.returnMsg = {message:'Success'};
        usertbl();


    })
    .then(null, function(data){
        $scope.returnMsg = {message2:'All fields are required!'};
    });
};

    function usertbl(){
        var newUser = RegisterFactory.fetch();
        newUser.then(function(data){
    
            $scope.usertbl = data.data.result;
        })
        .then(null, function(data){

        });
    };


    $scope.try = function(){
        alert('try');
    }

});