// import '../css/App.css';
import {
    BrowserRouter as Router,
    Route, Routes,
} from "react-router-dom";

import '../css/index.css'

import Login from '../components/Login';
import Home from "../components/home.jsx";
import Header from "../components/header.jsx";
import Beacon from '../components/beacon.jsx';

// import Menubar from '../components/menubar.jsx';

function App() {
    return (
        <Router>
                <Header/>
                <div className="headerPadding">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/beacon" element={<Beacon/>}/>
                </Routes>
                    {/*<Route path="/login">*/}
                    {/*    <Login/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/winnum">*/}
                    {/*    <Winnum/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/owencloud">*/}
                    {/*    <Owencloud/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/intra">*/}
                    {/*    <Intra/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/wialon">*/}
                    {/*    <Wialon/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/teamcenter">*/}
                    {/*    <Teamcenter/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/energyWater">*/}
                    {/*    <Suspense fallback={<div>Loading...</div>}>*/}
                    {/*        <EnergyWater/>*/}
                    {/*    </Suspense>*/}
                    {/*</Route>*/}

                    {/*<Route path="/energyElectro">*/}
                    {/*    <EnergyElectro/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/energyGas">*/}
                    {/*    <EnergyGas/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/printEnergy">*/}
                    {/*    <PrintEnergy/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/stanki">*/}
                    {/*    <Stanki/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/stankiMonth">*/}
                    {/*    <StankiMonth/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/stankiSmena">*/}
                    {/*    <StankiSmena/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/service">*/}
                    {/*    <Service/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/report">*/}
                    {/*    <Report/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/currentParams">*/}
                    {/*    <CurrentParams/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/beacon">*/}
                    {/*    <Beacon/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/scud">*/}
                    {/*    <Scud/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/bot/scudBot">*/}
                    {/*    <ScudBot/>*/}
                    {/*</Route>*/}

                    {/*<Route path="/userscontrol">*/}
                    {/*    <UsersControl/>*/}
                    {/*</Route>*/}

                    {/*<Route exact path="/">*/}
                    {/*    <Home/>*/}
                    {/*</Route>*/}
            </div>
        </Router>

    );
}

export default App;


