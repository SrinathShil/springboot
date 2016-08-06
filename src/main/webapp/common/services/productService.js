
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productService",
                 productService);

    function productService(){
        function calculateMarginPercent(current, previous) {
            var margin = 0;
            if (current && previous) {
                margin = (100 * (current - previous)) / current;
            }
            margin = Math.round(margin);
            return margin;
        }
        function calculateMarginAmount(current, previous) {
            var margin = 0;
            if (current && previous) {
                margin = current - previous;
            }
            return margin;
        }
        function calculatePriceFromPercent(previous, percent) {
            var current = previous;
            if (previous && percent) {
                current = previous + (previous * percent / 100);
                current = (Math.round(current * 100)) / 100;
            }
            return price;
        }
        function calculatePriceFromAmount(previous, amount) {
            var current = previous;
            if (previous && amount) {
                current = previous + amount;
                current = (Math.round(current * 100)) / 100;
            }
            return current;
        }

        return {
            calculateMarginPercent: calculateMarginPercent,
            calculateMarginAmount: calculateMarginAmount,
            calculatePriceFromMarkupPercent: calculatePriceFromPercent,
            calculatePriceFromMarkupAmount: calculatePriceFromAmount
        }

    }


}());
