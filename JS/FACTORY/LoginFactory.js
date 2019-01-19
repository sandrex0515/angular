app.factory('LoginFactory', function($http){


        var factory = {};


        factory.login = function(data){
            var LogUser = $http({
                url: './FUNCTIONS/login.php',
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
            return LogUser;
        };



        return factory;
});