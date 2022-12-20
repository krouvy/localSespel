import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {highChartLine, highChartLineZoom, highChartColumnFondChastGos, highChartColumn, tableHigcharts} from "../js/highchartReport";
import {highChartPolar} from "../js/hcMoreReport";
import Header from "./Header";

function Test2() {
    let data = []


    let navigate = useNavigate();
    useEffect(() => {

        highChartColumnFondChastGos('container')
        tableHigcharts(array, 'container2')
        // tableHigcharts([], 'container2')
        // highChartLineZoom('container2')
        // highChartPolar('container3')

    }, [])

    let years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]
    let place = ['МИК', 'Наноцентр', 'Прочее', 'ТИК']

    let array = [ 0, 1512687, 5259664, 93477927, 212900742, 727573945,506327730,
        1270057284,3400267363,6971316500, 9102391637,1583555396, 0, 202892698,
        185182593, 175500936,241076075,554087599,993398913,1497140632,1654787341,
        1539112094,1633563674,400607349, 104676000,292719000, 156458000, 152841000,
        168685000, 175522000, 158172000, 169448355, 188279886, 202702227, 194223990,
        51786219 , 0, 0, 3000000, 27386000, 42955938, 50510229, 91359049, 120935962,
        270479050, 551504261, 272478971, 105410080]

    console.log(array.length)

    const [state, setState] = useState(array)
    let ind = 0

    return (
        <div className="testBody">
            <Header/>

            <div className="containerHighChartTest2" id="container"></div>

            <table className='dinamicTable'>
                <thead>
                <tr>
                    <th></th>
                    {years.map(e=>{
                        return <th key={e}>{e}</th>
                    })}
                </tr>
                </thead>
                <tbody>

                {place.map(e=>{
                    return (
                    <tr key={e}>
                        <td key={e}>{e}</td>
                        {years.map((j,i)=>{
                            return <td key={j}>
                                        <div key={e} className='flex'>
                                            <input maxLength={10} key={ind} name={ind} type="text" value={state[ind++]}
                                            onChange={(e)=>{
                                                const key = e.target
                                                let copy = state.slice()
                                                copy[key.name] = +key.value.replace(/[^0-9.]/g, "")
                                                tableHigcharts(copy, 'container2')
                                                setState(copy)
                                            }}/>
                                        </div>
                                    </td>
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="containerHighChartTest2" id="container2"></div>
            {/*<div className="containerHighChart" id="container3"></div>*/}

        </div>
    )

}
export default Test2;
