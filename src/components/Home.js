import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import Header from "./Header";
import '../css/home.css';
import Graph1 from '../images/graph.png';
import Graph3 from '../images/graph3.png';

function Home() {
    let navigate = useNavigate();

    useEffect(() => {
        if (document.cookie =='user=test') {
            console.log('ok')
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <div className="homeBody">
            <Header/>

            <Menubar/>

        </div>
    );
}

function Menubar() {

    let navigate = useNavigate();

    return (
        <div className="main-container-home">

            <div className="container-home"
                 onClick={event => navigate('/test')}>
                <div className="icon-container">
                    {/*<img src={Graph1} alt="no-image"/>*/}
                    <p>Информация 1</p>
                </div>
                <h2>Тест 1</h2>
            </div>

            <div className="container-home"
                 onClick={event => navigate('/test2')}>
                <div className="icon-container">
                    <p>Информация 2</p>
                </div>
                <h2>Тест 2</h2>
            </div>

            <div className="container-home"
                 onClick={event => navigate('/test3')}>
                <div className="icon-container">
                    {/*<img src={Graph3} className='staticImage' alt="no-image"/>*/}
                    <p>Информация 3</p>
                </div>
                <h2>Тест 3</h2>
            </div>



        </div>
    )

}

export default Home;