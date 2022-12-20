import React, {useEffect, useState, useRef} from "react";
import {highChart3Dcolumn} from "../js/hc3dReport";
import {highChartMoreRange, highChartRadar} from "../js/hcMoreReport";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/test3.css'

import Header from "./Header";

function Test3() {

    let [date, setDate] = useState(new Date());

    useEffect(() => {


        highChart3Dcolumn('container', date.getFullYear())

    }, [])

    //Закрытие dropdown на клик вне поля
    const wrapperRef = useRef(null);
    const [dropDown, setDropdown] = useState("none");

    function changeDropdown() {
        dropDown == "none" ? setDropdown("block") : setDropdown("none")

    }

    function useOutsideAlerter(ref, dropDown, setDropdown) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setDropdown("none")
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef, dropDown, setDropdown);

    return (
        <div className="testBody">
            <Header/>

            <div className='calendarContainer'>

                <h1 className='infoChange'>Выберете год:</h1>

                <div className='containerInputYear'>
                    <input
                        className='inputCalendarYear'
                        type='text'
                        value={date.getFullYear()}
                        readOnly={true}
                        onClick={changeDropdown}
                        ref={wrapperRef}
                    />

                    <div style={{display: dropDown}} ref={wrapperRef}>
                        <Calendar
                            className='master-container'
                            onChange={
                                (e) => {
                                    changeDropdown()
                                    setDate(e)
                                    highChart3Dcolumn('container', e.getFullYear())
                                }
                            }
                            maxDetail='decade'
                            defaultView='decade'
                        />
                    </div>

                </div>


            </div>


            <div className="containerHighChart" id="container"></div>

            <div className="containerHighChart" id="container2"></div>

            <div className="containerHighChart" id="container3"></div>

        </div>
    )

}

export default Test3;