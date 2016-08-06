
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                 productResource]);

    function productResource($resource) {
        return $resource("http://localhost:8080/DaoRes/netpromoter")
        //http://localhost:8080/DaoRes/politician

       // /api/products/:productId
    }

}());
