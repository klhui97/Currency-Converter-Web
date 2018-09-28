var dataApp = new Vue({
    data() {
        return {
            currencyList: ["USD", "HKD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMK", "ZMW", "ZWL"],
            rates: {
                "AED": 4.304061,
                "AFN": 88.96846,
                "ALL": 126.257273,
                "AMD": 564.367579,
                "ANG": 2.162547,
                "AOA": 339.450911,
                "ARS": 45.143688,
                "AUD": 1.620489,
                "AWG": 2.109173,
                "AZN": 1.994924,
                "BAM": 1.950867,
                "BBD": 2.346045,
                "BDT": 98.503044,
                "BGN": 1.956141,
                "BHD": 0.441772,
                "BIF": 2077.47696,
                "BMD": 1.171763,
                "BND": 1.61411,
                "BOB": 8.099166,
                "BRL": 4.72478,
                "BSD": 1.171939,
                "BTC": 0.000182,
                "BTN": 85.161245,
                "BWP": 12.437673,
                "BYN": 2.462635,
                "BYR": 22966.552029,
                "BZD": 2.355823,
                "CAD": 1.530223,
                "CDF": 1905.286611,
                "CHF": 1.135819,
                "CLF": 0.026483,
                "CLP": 776.879092,
                "CNY": 8.059974,
                "COP": 3515.054223,
                "CRC": 679.118204,
                "CUC": 1.171763,
                "CUP": 31.051716,
                "CVE": 110.008022,
                "CZK": 25.709663,
                "DJF": 208.245465,
                "DKK": 7.458392,
                "DOP": 58.40649,
                "DZD": 138.031343,
                "EGP": 21.030448,
                "ERN": 17.576473,
                "ETB": 32.762215,
                "EUR": 1,
                "FJD": 2.474236,
                "FKP": 0.890611,
                "GBP": 0.893077,
                "GEL": 3.064182,
                "GGP": 0.893209,
                "GHS": 5.597868,
                "GIP": 0.890493,
                "GMD": 57.586279,
                "GNF": 10602.754841,
                "GTQ": 9.0398,
                "GYD": 245.033225,
                "HKD": 9.157315,
                "HNL": 28.173872,
                "HRK": 7.428157,
                "HTG": 81.734558,
                "HUF": 323.446977,
                "IDR": 17478.014799,
                "ILS": 4.21742,
                "IMP": 0.893209,
                "INR": 85.075824,
                "IQD": 1398.55756,
                "IRR": 49337.075038,
                "ISK": 129.126233,
                "JEP": 0.893209,
                "JMD": 160.01581,
                "JOD": 0.831367,
                "JPY": 132.096931,
                "KES": 118.348307,
                "KGS": 80.91031,
                "KHR": 4786.475176,
                "KMF": 490.822191,
                "KPW": 1054.623299,
                "KRW": 1302.88894,
                "KWD": 0.354811,
                "KYD": 0.976823,
                "KZT": 422.514142,
                "LAK": 9987.981415,
                "LBP": 1777.505415,
                "LKR": 198.216085,
                "LRD": 181.91643,
                "LSL": 16.703505,
                "LTL": 3.459911,
                "LVL": 0.708788,
                "LYD": 1.613871,
                "MAD": 10.988851,
                "MDL": 19.772911,
                "MGA": 4005.612459,
                "MKD": 61.593741,
                "MMK": 1869.4275,
                "MNT": 2960.370746,
                "MOP": 9.43146,
                "MRO": 418.319354,
                "MUR": 40.132818,
                "MVR": 18.045055,
                "MWK": 852.140491,
                "MXN": 22.163531,
                "MYR": 4.851447,
                "MZN": 71.249066,
                "NAD": 16.797199,
                "NGN": 426.650641,
                "NIO": 37.520437,
                "NOK": 9.520608,
                "NPR": 136.035829,
                "NZD": 1.764438,
                "OMR": 0.451105,
                "PAB": 1.171939,
                "PEN": 3.870447,
                "PGK": 3.896639,
                "PHP": 63.538823,
                "PKR": 144.384754,
                "PLN": 4.277884,
                "PYG": 6909.421189,
                "QAR": 4.266356,
                "RON": 4.661483,
                "RSD": 118.453499,
                "RUB": 77.146544,
                "RWF": 1033.623735,
                "SAR": 4.394052,
                "SBD": 9.348791,
                "SCR": 15.941246,
                "SDG": 21.097003,
                "SEK": 10.336531,
                "SGD": 1.599491,
                "SHP": 1.547782,
                "SLL": 9842.807719,
                "SOS": 676.690038,
                "SRD": 8.73898,
                "STD": 24500.647487,
                "SVC": 10.25603,
                "SYP": 603.458224,
                "SZL": 16.749157,
                "THB": 37.975079,
                "TJS": 11.035136,
                "TMT": 4.10117,
                "TND": 3.266049,
                "TOP": 2.659196,
                "TRY": 7.124962,
                "TTD": 7.899732,
                "TWD": 35.780983,
                "TZS": 2675.249631,
                "UAH": 32.994465,
                "UGX": 4480.2943,
                "USD": 1.171763,
                "UYU": 38.25106,
                "UZS": 9468.780515,
                "VEF": 291206.446956,
                "VND": 27357.733342,
                "VUV": 132.088658,
                "WST": 3.050803,
                "XAF": 654.359515,
                "XAG": 0.081302,
                "XAU": 0.000979,
                "XCD": 3.166747,
                "XDR": 0.835915,
                "XOF": 654.359496,
                "XPF": 118.957269,
                "YER": 293.351219,
                "ZAR": 16.587422,
                "ZMK": 10547.272636,
                "ZMW": 14.152586,
                "ZWL": 377.723629
            }
        }
    },
    watch: {
        rates(newValue) {
            const parsed = JSON.stringify(newValue);
            localStorage.setItem('rates', parsed);
        }
    }
})

var storageApp = new Vue({
    methods: {
        loadMainDataFromCache: function (target) {
            if (localStorage.fromCurrency) {
                target.fromCurrency = localStorage.fromCurrency
            }

            if (localStorage.toCurrency) {
                target.toCurrency = localStorage.toCurrency
            }
        },
        loadRateFromCache: function (target) {
            if (localStorage.lastUpdate) {
                target.lastUpdate = localStorage.lastUpdate
            }

            if (localStorage.getItem('rates')) {
                try {
                    dataApp.rates = JSON.parse(localStorage.getItem('rates'));
                } catch (e) {
                    localStorage.removeItem('rates');
                }
            }
        }
    }
})

var main = new Vue({
    el: '#mainApp',
    data() {
        return {
            headers: [
                {
                    text: 'Currency',
                    align: 'center',
                    sortable: false,
                    value: 'type',
                    width: '30%'
                },
                {
                    text: 'Amount',
                    align: 'center',
                    sortable: false,
                    value: 'value',
                    width: '60%'
                },
                {
                    text: 'Hide',
                    align: 'center',
                    sortable: false,
                    value: 'value',
                    width: '10%'
                }
            ],
            rules: {
                number: value => {
                    return !isNaN(value) || 'Input must be a number'
                }
            },
            rowControl: [5, 10, 20],
            isEditing: false,
            inputAmount: 1,
            fromCurrency: "EUR",
            toCurrency: "USD",
            lastUpdate: "Fetching...",

        }
    },
    methods: {
        getCurrencyList: function () {
            return dataApp.currencyList
        },
        getRate: function (key) {
            return dataApp.rates[key]
        },
        moveItemToEnd: function (item) {
            const index = dataApp.currencyList.indexOf(item)
            oldItem = dataApp.currencyList[index]
            dataApp.currencyList.splice(index, 1)
            dataApp.currencyList.push(oldItem)
        },
        updateRateFromApi: function (data) {
            this.lastUpdate = data.date
            dataApp.rates = data.rates
        },
        getCalculatedAmount: function (key) {
            var amount = this.inputAmount / this.getRate(this.fromCurrency) // EUR base amount
            convertedAmount = amount * this.getRate(key)
            return convertedAmount.toFixed(4)
        }
    },
    mounted() {
        axios.get('http://data.fixer.io/api/latest?access_key=b56e8eafefe3cf628e9296122260a739&format=1')
            .then(response => {
                this.updateRateFromApi(response.data)
            })
            .catch(error => {
                this.lastUpdate = "fail to fetch latest rate"
                storageApp.loadRateFromCache(this)
            })
            .finally(() => {
                console.log("done")
            })

        storageApp.loadMainDataFromCache(this)
    },
    watch: {
        fromCurrency(newFromCurrency) {
            localStorage.fromCurrency = newFromCurrency
        },
        toCurrency(newToCurrency) {
            localStorage.toCurrency = newToCurrency
        },
        lastUpdate(newLastUpdate) {
            localStorage.lastUpdate = newLastUpdate
        }
    }
})