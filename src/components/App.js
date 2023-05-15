// import '../css/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {useState} from "react";

import '../css/index.css'

import Login from '../components/Login';
import Home from "../components/home.jsx";
import Header from "../components/header.jsx";
// import Beacon from '../components/beacon.jsx';
// import ScudMonth from '../components/scudMonth.jsx';
import Network from '../components/network.jsx';
import Service from '../components/service.jsx';



function IframeLink({source}) {

    return (
        <div>
            {/*<Route path="/scudMonth" element={<ScudMonth scudMonthMemory={scudMonthMemory} setScudMonthMemory={setScudMonthMemory}/>}/>*/}
            <iframe
                className="iframeInput"
                src={source}
            >
            </iframe>
        </div>
    )

}

function App() {

    let [token, setToken] = useState(null)
    // let [scudMonthMemory, setScudMonthMemory] = useState(null)

    // useEffect(()=>{
    //     // if(token == 'ready'){
    //     //     setToken('12345')
    //     //     // let promise = fetchRequestGetToken()
    //     //     // promise.then(data =>{
    //     //     //     setToken(data)
    //     //     // })
    //     // }
    //
    // }, [token]);

    const iframeRoutes = [
        {path: "/winnum", source: "http://winnum-serv/Winnum/views/navigation/home/list.jsp"},
        {path: "/owencloud", source: "https://web.owencloud.ru/device/index/201636"},
        {path: "/intra", source: "http://89.151.134.234:46088/"},
        {path: "/wialon", source: "https://hosting.wialon.com/"},
        {path: "/teamcenter", source: "http://tcsespel.sespel.corp:7001/awc/"},
        {path: "/configPpc", source: "http://192.168.3.163:3001/"},
    ]

    const componentRoutes = [
        {path: "/login", component: Login},
        // {path: "/energyWater", component: EnergyWater},
        // {path: "/energyElectro", component: EnergyElectro},
        // {path: "/energyGas", component: EnergyGas},
        // {path: "/printEnergy", component: PrintEnergy},
        // {path: "/stanki", component: Stanki},
        // {path: "/stankiMonth", component: StankiMonth},
        // {path: "/stankiSmena", component: StankiSmena},
        {path: "/service", component: Service},
        // {path: "/report", component: Report},
        // {path: "/currentParams", component: CurrentParams},
        // {path: "/signals", component: Signals},
        // {path: "/beacon", component: Beacon},
        {path: "/network", component: Network},
        // {path: "/scud", component: Scud},
        // {path: "/bot/scudBot", component: ScudBot},
        // {path: "/userscontrol", component: UsersControl},
    ];


    return (
        <Router>
                <Header/>
                <div className="headerPadding">

                <Routes>
                    {/*<Route path="/login" element={<Login/>}/>*/}
                    {/*<Route path="/network" element={<Network/>}/>*/}
                    {/*<Route path="/service/ntx1000" element={<Service/>}/>*/}
                    {/*<Route path="/scudMonth" element={<ScudMonth scudMonthMemory={scudMonthMemory} setScudMonthMemory={setScudMonthMemory}/>}/>*/}

                    {iframeRoutes.map((route) => {
                        return (
                            <Route key={route.path} path={route.path} element ={<IframeLink source={route.source}/>}/>
                        )
                    })
                    }

                    {componentRoutes.map((route) => {
                        return (
                            <Route key={route.path} path={route.path} element ={<route.component/>}/>
                        )
                    })
                    }

                    <Route path="/mapService" element={<IframeLink source={`http://192.168.2.78:3000/${token}`}/>}/>
                    <Route path="/" element={<Home token={token} setToken={setToken}/>}/>
                </Routes>



            </div>
        </Router>

    );
}

export default App;




