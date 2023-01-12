import React, {useEffect, useState} from "react";
import {dayTimeNow} from '../js/solutions';
import MonthCalendar from '../components/calendarInput'
// import SwitchLineHCIndividual from '../components/complexButtonsInfo'
import '../css/energy.css'

function getThisYearMonth() {
    let monthsNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    let year = new Date().getFullYear()
    let month = monthsNumber[new Date().getMonth()]
    return `${year}-${month}`
}


function ScudMonth({scudMonthMemory, setScudMonthMemory}) {

    let tableState = [{
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
    // let [smenaState, setSmenaState] = useState('8и')
    // let [usersWithSmena, setUsersWithSmena] = useState('line')


    useEffect(() => {
        saveMemoryMonth()
    }, [dateMonth]);

    function newDate(dateInput) {
        setDateMonth(dateInput)
    }

    return (
        <div>
            {/*<div className="buttons-otchet marginToSmenaMenu cancelMargin">*/}

            <div className="daysMonthWrapper">

                <a href={`/scud/1ploshadka`}>
                    <div className="menuNoSelect">СУТОЧНЫЙ ОТЧЕТ</div>
                </a>

                <a href={`/scudMonth`}>
                    <div className="menuSelect">МЕСЯЧНЫЙ ОТЧЕТ</div>
                </a>

            </div>

            {/*</div>*/}
            {/*<div className="energyCalendarContainer">*/}
            <MonthCalendar newDate={newDate} dateMonth={dateMonth}/>
            {/*    <div className='hideIndividualAll'>*/}
            {/*        <SwitchLineHCIndividual stateLineHC={usersWithSmena} setStateLineHC={setUsersWithSmena}*/}
            {/*                                text={'Привязка по смене'}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<p className='switchButtonMessage'>{usersWithSmena == 'line' ? 'Отображение сотрудников по выбранного графику' : 'Все сотрудники'}</p>*/}

            {tableState == null? null : <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Должность</th>
                    <th>Таб.</th>
                    {Object.keys(tableState[0]['monthObject']).map((day, thKey) => {
                        return <th key={thKey}>{day}</th>
                    })}
                    <th>Итого</th>
                </tr>
                </thead>
                <tbody>
                {tableState.map((user, i) => {
                    return <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.POS}</td>
                        <td>{user.tabid}</td>
                        {Object.keys(user.monthObject).map((day,tdKey) => {
                            return (<td key={tdKey}>{user.monthObject[day]}</td>)
                        })}
                        <td>{user.monthTotalTime}</td>
                    </tr>
                })}
                </tbody>
            </table>}
        </div>
    );
}

export default ScudMonth;
