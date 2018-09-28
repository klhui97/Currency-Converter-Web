var main = new Vue({
    el: '#mainApp',
    data() {
        return {
            headers: [
                {
                    text: '',
                    align: 'center',
                    sortable: false,
                    width: '5%'
                },
                {
                    text: 'Currency',
                    align: 'center',
                    sortable: false,
                    value: 'type',
                    width: '25%',
                    class: ['teal', 'white--text', 'subheading']
                },
                {
                    text: 'Amount',
                    align: 'center',
                    sortable: false,
                    value: 'value',
                    width: '60%',
                    class: ['teal', 'white--text', 'subheading']
                },
                {
                    text: 'Hide',
                    align: 'center',
                    sortable: false,
                    value: 'value',
                    width: '10%',
                    class: ['teal', 'white--text', 'subheading']
                }
            ],
            pagination: {},
            selected: [],
            rules: {
                number: value => {
                    return !isNaN(value) || 'Input must be a number'
                }
            },
            rowControl: [5, 10, 20],
            isEditing: true,
            inputAmount: 1,
            fromCurrency: "HKD",
            toCurrency: "USD",
            lastUpdate: "Fetching...",
            noCurrencyWarning: "Currency not found"

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
        isTarget: function (name) {
            if (name == this.toCurrency) {
                return true
            }else {
                return false
            }
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
    }
})