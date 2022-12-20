import '../css/login.css';
// import Logo from '../images/MVP.png'
import PasswordView from '../images/view.svg'
import PasswordNoView from '../images/no-view.svg'

import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import Video from "../video/fire.mp4"

function Login() {

    let navigate = useNavigate();
    let [login, setLogin] = useState("")
    let [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState('');

    let [passwordEye, setpasswordEye] = useState(false)


    const toggleClass = () => {
        setpasswordEye(!passwordEye);
    };

    function inputAuth() {
        if (login == 'buklov_av' && password == 'sespel887') {
            document.cookie = "user=test";
            navigate('/')
        } else {
            setErrorMsg('Логин или пароль введены неверно')
        }

    }

    return (
        <div className="loginTheme">

            {/*<video autoPlay muted loop id="myVideo">*/}
            {/*    <source*/}
            {/*        src={Video}*/}
            {/*        type="video/mp4"/>*/}
            {/*        Your browser does not support HTML5 video*/}
            {/*</video>*/}

            <img className="loginLogo"
                 src={null}/>

            <div className="box login">
                <div>
                    <h2>Авторизация</h2>
                    <input
                        type="text"
                        className="inputBtn"
                        tabIndex="1"
                        placeholder="Username"
                        onChange={event => setLogin(event.target.value)}

                    />
                    <div className='passwordContainer'>
                    <input
                        type={passwordEye?'text':'password'}
                        className="inputBtn"
                        tabIndex="1"
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}

                    />
                        <img src={passwordEye?PasswordView:PasswordNoView} className="passwordEye"
                             onClick={() =>  toggleClass()}
                        />
                    </div>
                    {errorMsg.length>0 ?
                    <p
                        id="errorMsg"
                        className="error-msg"> {errorMsg}
                    </p>
                        : null
                    }

                        <div
                            id="login-btn"
                            className="btn btn-login"
                            onClick={inputAuth}
                        >
                            Войти
                        </div>



                </div>
            </div>

        </div>
    )
}

export default Login;