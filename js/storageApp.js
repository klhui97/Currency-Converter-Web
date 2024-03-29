var storageApp = new Vue({
    methods: {
        loadMainDataFromCache: function (target) {
            if (localStorage.getItem("fromCurrency")) {
                target.fromCurrency = localStorage.getItem("fromCurrency")
            }

            if (localStorage.getItem("toCurrency")) {
                target.toCurrency = localStorage.getItem("toCurrency")
            }

            rateDataApp.loadCurrencyListFromLocal()
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