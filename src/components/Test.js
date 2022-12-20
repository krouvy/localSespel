import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Header from "./Header";
import "../css/test.css"
import {highChartMonthLine, highChartStackedColumn} from "../js/highchartReport"
import {highChart3Dpie} from "../js/hc3dReport";
import {highChartPolar} from "../js/hcMoreReport";

function Test() {

    let navigate = useNavigate();
    useEffect(() => {

        highChartMonthLine('container')
        highChart3Dpie('container2')
        highChartPolar('container3')
        highChartStackedColumn('container4')

    }, [])


    return (
        <div className="testBody">
            <Header/>

            <div className="containerHighChart" id="container"></div>

            <div className="containerHighChart" id="container2"></div>

            <div className="containerHighChart" id="container3"></div>

            <div className="containerHighChart" id="container4"></div>

        </div>
    )
}

export default Test;

