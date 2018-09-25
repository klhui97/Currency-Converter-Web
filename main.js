new Vue({
    el: '#app',
    data() {
        return {
            headers: [
                {
                    text: 'Currency',
                    align: 'center',
                    sortable: false,
                    value: 'type'
                },
                { 
                    text: 'Amount', 
                    align: 'center',
                    value: 'value',
                }
            ],
            desserts: [
                {
                    value: false,
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%'
                },
                {
                    value: false,
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%'
                },
                {
                    value: false,
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%'
                },
                {
                    value: false,
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%'
                },
                {
                    value: false,
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%'
                },
                {
                    value: false,
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%'
                },
                {
                    value: false,
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%'
                },
                {
                    value: false,
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%'
                },
                {
                    value: false,
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%'
                },
                {
                    value: false,
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%'
                },
                {
                    value: false,
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%'
                },
                {
                    value: false,
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%'
                },
                {
                    value: false,
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%'
                },
                {
                    value: false,
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%'
                },
                {
                    value: false,
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%'
                },
                {
                    value: false,
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%'
                },
                {
                    value: false,
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%'
                },
                {
                    value: false,
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%'
                },
                {
                    value: false,
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%'
                },
                {
                    value: false,
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%'
                }
            ],
            isEditing: false,
            fromCurrency: null,
            toCurrency: null,
            currency: [
                {
                    'type': 'AED',
                    'value': 4.321734
                },
                {
                    'type': 'AFN',
                    'value': 89.266597
                },
                {
                    'type': 'ALL',
                    'value': 126.493446
                },
                {
                    'type': 'AMD',
                    'value': 566.773548
                },
                {
                    'type': 'ANG',
                    'value': 2.172839
                },
                {
                    'type': 'AOA',
                    'value': 340.104087
                },
                {
                    'type': 'ARS',
                    'value': 43.893987
                },
                {
                    'type': 'AUD',
                    'value': 1.624196
                },
                {
                    'type': 'AWG',
                    'value': 2.118716
                },
                {
                    'type': 'AZN',
                    'value': 2.003124
                },
                {
                    'type': 'BAM',
                    'value': 1.957935
                },
                {
                    'type': 'BBD',
                    'value': 2.357208
                },
                {
                    'type': 'BDT',
                    'value': 98.949256
                },
                {
                    'type': 'BGN',
                    'value': 1.956114
                },
                {
                    'type': 'BHD',
                    'value': 0.443604
                },
                {
                    'type': 'BIF',
                    'value': 2086.948848
                },
                {
                    'type': 'BMD',
                    'value': 1.176574
                },
                {
                    'type': 'BND',
                    'value': 1.617261
                },
                {
                    'type': 'BOB',
                    'value': 8.139718
                },
                {
                    'type': 'BRL',
                    'value': 4.815485
                },
                {
                    'type': 'BSD',
                    'value': 1.177927
                },
                {
                    'type': 'BTC',
                    'value': 0.000184
                },
                {
                    'type': 'BTN',
                    'value': 85.468772
                },
                {
                    'type': 'BWP',
                    'value': 12.474628
                },
                {
                    'type': 'BYN',
                    'value': 2.452981
                },
                {
                    'type': 'BYR',
                    'value': 23060.858311
                },
                {
                    'type': 'BZD',
                    'value': 2.36703
                },
                {
                    'type': 'CAD',
                    'value': 1.524529
                },
                {
                    'type': 'CDF',
                    'value': 1911.933747
                },
                {
                    'type': 'CHF',
                    'value': 1.136589
                },
                {
                    'type': 'CLF',
                    'value': 0.02659
                },
                {
                    'type': 'CLP',
                    'value': 792.187387
                },
                {
                    'type': 'CNY',
                    'value': 8.089069
                },
                {
                    'type': 'COP',
                    'value': 3532.664647
                },
                {
                    'type': 'CRC',
                    'value': 681.895155
                },
                {
                    'type': 'CUC',
                    'value': 1.176574
                },
                {
                    'type': 'CUP',
                    'value': 31.179222
                },
                {
                    'type': 'CVE',
                    'value': 110.418566
                },
                {
                    'type': 'CZK',
                    'value': 25.621791
                },
                {
                    'type': 'DJF',
                    'value': 209.100327
                },
                {
                    'type': 'DKK',
                    'value': 7.458364
                },
                {
                    'type': 'DOP',
                    'value': 59.005483
                },
                {
                    'type': 'DZD',
                    'value': 138.356128
                },
                {
                    'type': 'EGP',
                    'value': 21.088922
                },
                {
                    'type': 'ERN',
                    'value': 17.64872
                },
                {
                    'type': 'ETB',
                    'value': 32.63994
                },
                {
                    'type': 'EUR',
                    'value': 1
                },
                {
                    'type': 'FJD',
                    'value': 2.493808
                },
                {
                    'type': 'FKP',
                    'value': 0.894185
                },
                {
                    'type': 'GBP',
                    'value': 0.894085
                },
                {
                    'type': 'GEL',
                    'value': 3.088485
                },
                {
                    'type': 'GGP',
                    'value': 0.894333
                },
                {
                    'type': 'GHS',
                    'value': 5.753094
                },
                {
                    'type': 'GIP',
                    'value': 0.894185
                },
                {
                    'type': 'GMD',
                    'value': 57.399232
                },
                {
                    'type': 'GNF',
                    'value': 10652.47305
                },
                {
                    'type': 'GTQ',
                    'value': 9.080037
                },
                {
                    'type': 'GYD',
                    'value': 245.680656
                },
                {
                    'type': 'HKD',
                    'value': 9.188634
                },
                {
                    'type': 'HNL',
                    'value': 28.303088
                },
                {
                    'type': 'HRK',
                    'value': 7.430888
                },
                {
                    'type': 'HTG',
                    'value': 81.958403
                },
                {
                    'type': 'HUF',
                    'value': 323.628519
                },
                {
                    'type': 'IDR',
                    'value': 17535.253111
                },
                {
                    'type': 'ILS',
                    'value': 4.214913
                },
                {
                    'type': 'IMP',
                    'value': 0.894333
                },
                {
                    'type': 'INR',
                    'value': 85.507555
                },
                {
                    'type': 'IQD',
                    'value': 1405.18281
                },
                {
                    'type': 'IRR',
                    'value': 49539.665278
                },
                {
                    'type': 'ISK',
                    'value': 130.800424
                },
                {
                    'type': 'JEP',
                    'value': 0.894333
                },
                {
                    'type': 'JMD',
                    'value': 159.967118
                },
                {
                    'type': 'JOD',
                    'value': 0.834784
                },
                {
                    'type': 'JPY',
                    'value': 132.778721
                },
                {
                    'type': 'KES',
                    'value': 118.894608
                },
                {
                    'type': 'KGS',
                    'value': 81.316941
                },
                {
                    'type': 'KHR',
                    'value': 4827.190465
                },
                {
                    'type': 'KMF',
                    'value': 491.631727
                },
                {
                    'type': 'KPW',
                    'value': 1058.947443
                },
                {
                    'type': 'KRW',
                    'value': 1315.759388
                },
                {
                    'type': 'KWD',
                    'value': 0.356151
                },
                {
                    'type': 'KYD',
                    'value': 0.98134
                },
                {
                    'type': 'KZT',
                    'value': 417.201307
                },
                {
                    'type': 'LAK',
                    'value': 10035.232632
                },
                {
                    'type': 'LBP',
                    'value': 1782.216426
                },
                {
                    'type': 'LKR',
                    'value': 198.676117
                },
                {
                    'type': 'LRD',
                    'value': 182.398426
                },
                {
                    'type': 'LSL',
                    'value': 16.748519
                },
                {
                    'type': 'LTL',
                    'value': 3.474118
                },
                {
                    'type': 'LVL',
                    'value': 0.711698
                },
                {
                    'type': 'LYD',
                    'value': 1.621614
                },
                {
                    'type': 'MAD',
                    'value': 11.004514
                },
                {
                    'type': 'MDL',
                    'value': 19.790297
                },
                {
                    'type': 'MGA',
                    'value': 4023.656708
                },
                {
                    'type': 'MKD',
                    'value': 61.587785
                },
                {
                    'type': 'MMK',
                    'value': 1887.693306
                },
                {
                    'type': 'MNT',
                    'value': 2970.67127
                },
                {
                    'type': 'MOP',
                    'value': 9.472071
                },
                {
                    'type': 'MRO',
                    'value': 419.45019
                },
                {
                    'type': 'MUR',
                    'value': 40.156147
                },
                {
                    'type': 'MVR',
                    'value': 18.114542
                },
                {
                    'type': 'MWK',
                    'value': 855.593179
                },
                {
                    'type': 'MXN',
                    'value': 22.32304
                },
                {
                    'type': 'MYR',
                    'value': 4.866333
                },
                {
                    'type': 'MZN',
                    'value': 71.558944
                },
                {
                    'type': 'NAD',
                    'value': 16.748541
                },
                {
                    'type': 'NGN',
                    'value': 428.085446
                },
                {
                    'type': 'NIO',
                    'value': 37.69686
                },
                {
                    'type': 'NOK',
                    'value': 9.576751
                },
                {
                    'type': 'NPR',
                    'value': 136.759109
                },
                {
                    'type': 'NZD',
                    'value': 1.770539
                },
                {
                    'type': 'OMR',
                    'value': 0.452975
                },
                {
                    'type': 'PAB',
                    'value': 1.178045
                },
                {
                    'type': 'PEN',
                    'value': 3.884932
                },
                {
                    'type': 'PGK',
                    'value': 3.914993
                },
                {
                    'type': 'PHP',
                    'value': 63.900957
                },
                {
                    'type': 'PKR',
                    'value': 144.977467
                },
                {
                    'type': 'PLN',
                    'value': 4.289155
                },
                {
                    'type': 'PYG',
                    'value': 6906.197444
                },
                {
                    'type': 'QAR',
                    'value': 4.28393
                },
                {
                    'type': 'RON',
                    'value': 4.661235
                },
                {
                    'type': 'RSD',
                    'value': 118.316257
                },
                {
                    'type': 'RUB',
                    'value': 77.392126
                },
                {
                    'type': 'RWF',
                    'value': 1038.473983
                },
                {
                    'type': 'SAR',
                    'value': 4.412095
                },
                {
                    'type': 'SBD',
                    'value': 9.424834
                },
                {
                    'type': 'SCR',
                    'value': 16.007885
                },
                {
                    'type': 'SDG',
                    'value': 21.197754
                },
                {
                    'type': 'SEK',
                    'value': 10.344619
                },
                {
                    'type': 'SGD',
                    'value': 1.606953
                },
                {
                    'type': 'SHP',
                    'value': 1.554141
                },
                {
                    'type': 'SLL',
                    'value': 9900.873118
                },
                {
                    'type': 'SOS',
                    'value': 680.646279
                },
                {
                    'type': 'SRD',
                    'value': 8.774883
                },
                {
                    'type': 'STD',
                    'value': 24631.964272
                },
                {
                    'type': 'SVC',
                    'value': 10.304913
                },
                {
                    'type': 'SYP',
                    'value': 605.936094
                },
                {
                    'type': 'SZL',
                    'value': 16.755007
                },
                {
                    'type': 'THB',
                    'value': 38.158069
                },
                {
                    'type': 'TJS',
                    'value': 11.09892
                },
                {
                    'type': 'TMT',
                    'value': 4.129776
                },
                {
                    'type': 'TND',
                    'value': 3.265584
                },
                {
                    'type': 'TOP',
                    'value': 2.674412
                },
                {
                    'type': 'TRY',
                    'value': 7.22792
                },
                {
                    'type': 'TTD',
                    'value': 7.939583
                },
                {
                    'type': 'TWD',
                    'value': 36.102595
                },
                {
                    'type': 'TZS',
                    'value': 2687.296031
                },
                {
                    'type': 'UAH',
                    'value': 33.080622
                },
                {
                    'type': 'UGX',
                    'value': 4486.997944
                },
                {
                    'type': 'USD',
                    'value': 1.176574
                },
                {
                    'type': 'UYU',
                    'value': 38.756677
                },
                {
                    'type': 'UZS',
                    'value': 9466.003083
                },
                {
                    'type': 'VEF',
                    'value': 292402.211993
                },
                {
                    'type': 'VND',
                    'value': 27467.71774
                },
                {
                    'type': 'VUV',
                    'value': 133.065141
                },
                {
                    'type': 'WST',
                    'value': 3.060199
                },
                {
                    'type': 'XAF',
                    'value': 656.704618
                },
                {
                    'type': 'XAG',
                    'value': 0.082425
                },
                {
                    'type': 'XAU',
                    'value': 0.00098
                },
                {
                    'type': 'XCD',
                    'value': 3.179752
                },
                {
                    'type': 'XDR',
                    'value': 0.83812
                },
                {
                    'type': 'XOF',
                    'value': 656.658311
                },
                {
                    'type': 'XPF',
                    'value': 119.386956
                },
                {
                    'type': 'YER',
                    'value': 294.448014
                },
                {
                    'type': 'ZAR',
                    'value': 16.907551
                },
                {
                    'type': 'ZMK',
                    'value': 10590.600627
                },
                {
                    'type': 'ZMW',
                    'value': 13.990625
                },
                {
                    'type': 'ZWL',
                    'value': 379.274655
                }
            ],
            currencyType: []
        }
    },
    methods: {
        getCurrencyList: function () {
            if (this.$data.currencyType.length > 0) {
                return this.$data.currencyType
            }
            for (i in this.$data.currency) {
                this.$data.currencyType.push(this.$data.currency[i].type)
            }
            return this.$data.currencyType
        }
    }
})