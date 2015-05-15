hrApp.service('MathService', function () {
        // TODO #14 add multiply and divide functions
        return {
            add: function (a,b) {
                return a+b;
            },
            substract: function (a,b) {
                return a-b;
            },
            multiply: function(a,b){
                return a*b;
            },
            divide: function(a,b){
                return a/b;
            }

        }
    }
);