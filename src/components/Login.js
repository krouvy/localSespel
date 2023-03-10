import '../css/login.css';
import '../css/usersControl.css';
import PasswordView from '../images/view.svg'
import PasswordNoView from '../images/no-view.svg'

import Logo from "../images/logo_white.png";

import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import Video from "../video/fire.mp4"

function Login() {

    let navigate = useNavigate();
    let [login, setLogin] = useState("")
    let [password, setPassword] = useState("")
    let [rememberMe, setRememberMe] = useState(false)
    let [passwordEye, setpasswordEye] = useState(false)

    const [errorMsg, setErrorMsg] = useState('');


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
        <>
            <div className="loginTheme"></div>
            <div className={'loginMenu'}>
                <img className="loginLogo"
                     src={Logo}/>
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
                        <div className='passwordDiv'>
                            <input
                                type={passwordEye ? 'text' : 'password'}
                                className="inputBtn"
                                tabIndex="1"
                                placeholder="Password"
                                onChange={event => setPassword(event.target.value)}

                            />
                            <img src={passwordEye ? PasswordView : PasswordNoView}
                                 className="passwordEye"
                                 onClick={() => toggleClass()}
                            />
                        </div>
                        <input
                            id="abc"
                            className="inputBtn"
                            name="remember"
                            type="checkbox"
                            onClick={event => setRememberMe(event.target.checked)}
                        />
                        <label
                            htmlFor="abc"
                            className="label-block checkbox">
                            Запомнить меня
                        </label>
                        {errorMsg.length > 0 ?
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
        </>

    )
}

export default Login;