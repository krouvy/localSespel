import * as Highcharts from 'highcharts';

require('../lib/highcharts-3d')(Highcharts);

require("highcharts/modules/exporting")(Highcharts);

export function highChart3Dcolumn(containerName, year) {

    let array
    console.log(year)

    switch (year) {
        case 2010:
            array = [0, 98400, 0, 0]
            break
        case 2011:
            array = [737483, 49632818, 22144781, 0]
            break
        case 2012:
            array = [13813059, 70709220, 43089951, 0]
            break
        case 2013:
            array = [32698714, 127893481, 32641965, 0]
            break
        case 2014:
            array = [62140248, 183670093, 27736664, 0]
            break
        case 2015:
            array = [105046854, 308109173, 66571822, 0]
            break
        case 2016:
            array = [124122123, 304947297, 65867047, 0]
            break
        case 2017:
            array = [196122427, 414445299, 74667452, 18941825]
            break
        case 2018:
            array = [586097169, 313120590, 76738160, 45478301]
            break
        case 2019:
            array = [492422893, 350283801, 106790648, 55513329]
            break
        case 2020:
            array = [726183181, 258306422, 83654088, 51781539]
            break
        case 2021:
            array = [169357801, 59640892, 16273304, 8176500]
            break

        default:
            array = [0, 0, 0, 0]
    }

// Set up the chart
    const chart = new Highcharts.Chart({
        chart: {
            renderTo: containerName,
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        xAxis: {
            categories: ['МИК', 'Наноцентр', 'Прочее', 'ТИК'],
            labels: {

                style: {
                    fontSize: '13px',
                    color: '#FFF'
                }
            }
        },
        yAxis: {
            title: {
                enabled: false
            },
            labels: {

                style: {
                    fontSize: '13px',
                    color: '#FFF'
                }
            }
        },
        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '{point.y}'
        },
        title: {
            text: 'Динамика налогов',
            style: {
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: '22px',
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            data: array,
            colorByPoint: true
        }]
    });



}

export function highChart3Ddohut(containerName) {

    Highcharts.chart(containerName, {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Global smartphone shipments market share, Q1 2022'
        },
        subtitle: {
            text: 'Source: ' +
                '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
                'target="_blank">Counterpoint Research</a>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Share',
            data: [
                ['Samsung', 23],
                ['Apple', 18],
                {
                    name: 'Xiaomi',
                    y: 12,
                    sliced: true,
                    selected: true
                },
                ['Oppo*', 9],
                ['Vivo', 8],
                ['Others', 30]
            ]
        }]
    });
}

export function highChart3Dpie(containerName) {

    Highcharts.chart(containerName, {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Суммарное количество инвестиций (2010 - 2021)',
            style: {
                color: '#FFF'
            }
        },

        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}% - {point.y}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'pie',
            name: 'Share',
            data: [
                ['МИК',  23874640875],
                ['Наноцентр',  9077349904],
                {
                    name: 'Прочее',
                    y:  2015513678,
                    sliced: true,
                    selected: true
                },
                ['ТИК',  1536019540],
            ]
        }]
    });
}