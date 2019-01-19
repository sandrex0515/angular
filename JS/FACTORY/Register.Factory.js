app.factory('RegisterFactory', function($http){

    var factory = {};

    factory.save = function(data){
        var newUser = $http({ 
        url:'./FUNCTIONS/save.php',
        method: 'POST',
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        transformRequest: function(obj){
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
        },
        data: data
    });
    return newUser;
    };  


    factory.fetch = function(data){
        var newUser = $http({ 
        url:'./FUNCTIONS/view.php',
        method: 'POST',
        headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
        transformRequest: function(obj){
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
        },
        data: data
    });
    return newUser;
    };  

    return factory;


});
