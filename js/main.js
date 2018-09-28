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
            return rateDataApp.currencyList
        },
        getRate: function (key) {
            return rateDataApp.rates[key]
        },
        moveItemToEnd: function (item) {
            const index = rateDataApp.currencyList.indexOf(item)
            oldItem = rateDataApp.currencyList[index]
            rateDataApp.currencyList.splice(index, 1)
            rateDataApp.currencyList.push(oldItem)
        },
        updateRateFromApi: function (data) {
            this.lastUpdate = data.date
            rateDataApp.rates = data.rates
        },
        getCalculatedAmount: function (key) {
            var amount = this.inputAmount / this.getRate(this.fromCurrency) // EUR base amount
            convertedAmount = amount * this.getRate(key)
            return convertedAmount.toFixed(4)
        }
    },
    mounted() {
        this.$http.get('http2://data.fixer.io/api/latest?access_key=b56e8eafefe3cf628e9296122260a739&format=1').then(function (response) {
            if (response.status == "200") {
                this.updateRateFromApi(response.body)
            }else {
                storageApp.loadRateFromCache(this)
            }
        }).catch(e => {
            storageApp.loadRateFromCache(this)
        })

        storageApp.loadMainDataFromCache(this)
    },
    watch: {
        fromCurrency(newFromCurrency) {
            localStorage.setItem("fromCurrency", newFromCurrency)
        },
        toCurrency(newToCurrency) {
            localStorage.setItem("toCurrency", newToCurrency)
        },
        lastUpdate(newLastUpdate) {
            localStorage.setItem("lastUpdate", newLastUpdate)
        }
    }
})