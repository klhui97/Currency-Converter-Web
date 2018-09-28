var main = new Vue({
    el: '#mainApp',
    data() {
        return {
            headers: [
                {
                    text: 'Currency',
                    align: 'center',
                    sortable: false,
                    width: '15%',
                    class: ['teal', 'white--text', 'subheading']
                },
                {
                    text: 'Amount',
                    align: 'left',
                    sortable: false,
                    width: '80%',
                    class: ['teal', 'white--text', 'subheading']
                },
                {
                    text: 'Hide',
                    align: 'center',
                    sortable: false,
                    width: '5%',
                    class: ['teal', 'white--text', 'subheading']
                }
            ],
            pagination: {},
            rules: {
                number: value => {
                    return !isNaN(value) || 'Input must be a number'
                }
            },
            rowControl: [5, 10, 20],
            inputAmount: 1,
            fromCurrency: "HKD",
            toCurrency: "USD",
            lastUpdate: "Fetching...",
            noCurrencyWarning: "Currency not found",
            defaultCurrencyImagePath: "./img/flags/usd.png"
        }
    },
    methods: {
        getCurrencyList: function () {
            return rateDataApp.currencyList
        },
        getRate: function (key) {
            return rateDataApp.rates[key]
        },
        highItem: function (item) {
            rateDataApp.moveItemToEnd(item)
        },
        updateRateFromApi: function (data) {
            var date = new Date(data.timestamp * 1000)
            var hours = date.getHours()
            var minutes = "0" + date.getMinutes()
            var seconds = "0" + date.getSeconds()

            this.lastUpdate = data.date + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
            rateDataApp.rates = data.rates
        },
        getCalculatedAmount: function (key) {
            var amount = this.inputAmount / this.getRate(this.fromCurrency) // EUR base amount
            convertedAmount = amount * this.getRate(key)
            return convertedAmount.toFixed(4)
        },
        getFlagImage: function (flagName) {
            var path = './img/flags/' + flagName.toLowerCase() + '.png'
            return path
        },
        swapCurrency: function() {
            var temp = this.fromCurrency
            this.fromCurrency = this.toCurrency
            this.toCurrency = temp
        }
    },
    mounted() {
        this.$http.get('http://data.fixer.io/api/latest?access_key=b56e8eafefe3cf628e9296122260a739&format=1').then(function (response) {
            if (response.status == "200") {
                this.updateRateFromApi(response.body)
            } else {
                storageApp.loadRateFromCache(this)
            }
        }).catch(e => {
            storageApp.loadRateFromCache(this)
        })

        storageApp.loadMainDataFromCache(this)
    },
    watch: {
        fromCurrency(newFromCurrency, old) {
            if (old != newFromCurrency) {
                localStorage.setItem("fromCurrency", newFromCurrency)
            }
        },
        toCurrency(newToCurrency, old) {
            if (old != newToCurrency) {
                localStorage.setItem("toCurrency", newToCurrency)
                this.pagination.page = 1
                rateDataApp.moveItemToFront(newToCurrency)
            }
        },
        lastUpdate(newLastUpdate) {
            localStorage.setItem("lastUpdate", newLastUpdate)
        }
    },
    computed: {
        imageWidth() {
            if (this.$vuetify.breakpoint.name == 'xs') {
                return '40px'
            }
            return '48px';
        }
    }
})