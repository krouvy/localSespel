import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import {dayTimeNow} from '../js/solutions';
import MonthCalendar from '../components/calendarInput'
// import SwitchLineHCIndividual from '../components/complexButtonsInfo'
import '../css/energy.css'
import '../css/scud.css'
import '../css/stanki.css'

function getThisYearMonth() {
    let monthsNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    let year = new Date().getFullYear()
    let month = monthsNumber[new Date().getMonth()]
    return `${year}-${month}`
}


function ScudMonth({scudMonthMemory, setScudMonthMemory}) {

    let tableData = [{
        POS: "Главный энергетик1",
        logtime: null,
        monthObject: {
            1: 177000,
            2: 0,
            3: 2915000,
            4: 22010000,
        },
        monthTotalTime: 110467000,
        name: "Диомидов Михаил Юрьевич1",
        photo: undefined,
        smenaInfo: "8и",
        statusInOut: null,
        tabid: "1464",
    }, {
        POS: "Главный энергетик2",
        logtime: null,
        monthObject: {
            1: 177000,
            2: 0,
            3: 2915000,
            4: 22010000,
        },
        monthTotalTime: 110467000,
        name: "Диомидов Михаил Юрьевич2",
        photo: undefined,
        smenaInfo: "8и",
        statusInOut: null,
        tabid: "1464",
    },
    ]

    let [tableState, setTableState] = useState(null)

    // tableState = null

    function saveMemoryMonth() {
        console.log('Текущие данные', scudMonthMemory)
        // Текущая дата и время
        let lastTime = new Date(dayTimeNow()).getTime()

        // тестовые данные
        let dataArray = [1, 2, 3]

        // Если состояние памяти пустое
        if (scudMonthMemory == null) {
            // То запрос и сохранить состояние
            console.log('Отправка запроса на', dateMonth)

            setScudMonthMemory({[dateMonth]: {lastTime: dayTimeNow(), data: dataArray},})
        } else {
            // Иначе, если не пустой,но выбранный месяц отсутсвует
            if (scudMonthMemory[dateMonth] == undefined) {
                // То запрос и сохранить состояние
                console.log('Отправка запроса на', dateMonth)

                setScudMonthMemory(prevState => ({
                    ...prevState,
                    [dateMonth]: {lastTime: dayTimeNow(), data: dataArray}
                }));
                // Иначе вывести срок время сохранения этих данных
            } else {
                console.log('Последнее время данных', scudMonthMemory[dateMonth].lastTime)
            }

        }
    }

    let [dateMonth, setDateMonth] = useState(getThisYearMonth());
    let [smenaState, setSmenaState] = useState('8и')



    useEffect(() => {
        // setTableState(tableData)
        saveMemoryMonth()
    }, [dateMonth,tableState]);

    function newDate(dateInput) {
        setDateMonth(dateInput)
    }

    return (
        <div>
            <div className="buttons-otchet marginToSmenaMenu cancelMargin">
                <LinkMonth smenaState={smenaState} setSmenaState={setSmenaState}/>
            </div>
            <div className="energyCalendarContainer">
                <MonthCalendar newDate={newDate} dateMonth={dateMonth}/>
            </div>
            {/*<ScudMonthTable tableState={tableState} sortState={sortState} loadingState={loadingState}/>*/}
        </div>
    );
}


function LinkMonth({smenaState, setSmenaState}) {

    return (
        <div className="daysMonthWrapper">

            <Link to={`/scud/1ploshadka`}>
                <div className="menuNoSelect">СУТОЧНЫЙ ОТЧЕТ</div>
            </Link>

            <Link to={`/scudMonth`}>
                <div className="menuSelect">МЕСЯЧНЫЙ ОТЧЕТ
                    <div className={`smenaScud`}>
                        <span className={smenaState == '8' ? 'scudSelect' : 'scudSelectNoSelect'}
                              onClick={() => {
                                  setSmenaState('8')
                              }}>8 часов
                        </span>
                        <span className={smenaState == '7' ? 'scudSelect' : 'scudSelectNoSelect'}
                              onClick={() => {
                                  setSmenaState('7')
                              }}>7.2 часа
                        </span>
                        <span className={smenaState == '11' ? 'scudSelect' : 'scudSelectNoSelect'}
                              onClick={() => {
                                  setSmenaState('11')
                              }}>11 часов
                        </span>
                        <span className={smenaState == '24' ? 'scudSelect' : 'scudSelectNoSelect'}
                              onClick={() => {
                                  setSmenaState('24')
                              }}>24 часа
                        </span>
                        <span className={smenaState == '8и' ? 'scudSelect' : 'scudSelectNoSelect'}
                              onClick={() => {
                                  setSmenaState('8и')
                              }}>ИТР
                        </span>
                        <span
                            className={`hideIndividualAll ${(smenaState == 'hiddens') ? 'scudSelect' : 'scudSelectNoSelect'}`}
                            onClick={() => {
                                setSmenaState('hiddens')
                            }}>Скрытые
                        </span>
                    </div>
                </div>
            </Link>

        </div>
    )
}

function Loader() {

    return (
        <div className="loaderWrapper">
            <div className="loaderText">IoT Sespel</div>
            <div className="loader"></div>
        </div>
    )

}

export default ScudMonth;
