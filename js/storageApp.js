var storageApp = new Vue({
    methods: {
        loadMainDataFromCache: function (target) {
            if (localStorage.getItem("fromCurrency")) {
                console.log("load from fromCurrency")
                target.fromCurrency = localStorage.getItem("fromCurrency")
            }

            if (localStorage.getItem("toCurrency")) {
                console.log("load from toCurrency")
                target.toCurrency = localStorage.getItem("toCurrency")
            }
        },
        loadRateFromCache: function (target) {
            if (localStorage.getItem("lastUpdate")) {
                target.lastUpdate = localStorage.getItem("lastUpdate")
            }

            if (localStorage.getItem('rates')) {
                try {
                    rateDataApp.rates = JSON.parse(localStorage.getItem('rates'));
                } catch (e) {
                    localStorage.removeItem('rates');
                }
            }
        }
    }
})