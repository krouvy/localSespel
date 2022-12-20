import '../css/header.css';
import {useNavigate} from "react-router-dom";
// import Logo from '../images/MVP.png'
// import profileImage from '../images/buklov.jpg'
import React, {useEffect, useState, useRef} from "react";

function Header() {

    let navigate = useNavigate();


    return (
        <div>

            <div className="headerBody" id="headerCss">

                    <img
                        className="icon-logo"
                        src={null}
                        onClick={event => navigate('/')}
                    />

                <div className="userInfo">
                    <div className="div_login_mail">
                        <p className="nameInfo">Алексей</p>
                        <p className="mailInfo">test@test.com</p>
                    </div>

                    <Dropdown/>

                </div>


            </div>

        </div>
    )
}

function useOutsideAlerter(ref,dropDown, setDropdown) {
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

function Dropdown() {

    const [dropDown, setDropdown] = useState("none");
    let navigate = useNavigate();

    function changeDropdown() {
        dropDown == "none" ? setDropdown("block") : setDropdown("none")
    }

    //Закрытие dropdown на клик вне поля
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, dropDown, setDropdown);

    function outAuth() {
        document.cookie = "user=null";
        navigate('/login')
    }


    return (
        <div
            ref={wrapperRef}
            className="dropdown">
            <input
                className="avatar"
                type="image"
                src={null}
                alt="Avatar"
                onClick={changeDropdown}
            >
            </input>
            <div
                className="dropdown-content"
                style={{display: dropDown}}
            >
                <div
                    className="profile-pic"
                >
                    <label
                        className="-label"
                        htmlFor="file"
                    >

                    </label>

                    <img
                        className="outputImage"
                        src={null}
                        id="output"
                        width="200"
                    />
                </div>

                <p
                    className="userName"
                >
                    Алексей
                </p>

                <p
                    className="userEmail"
                >
                    test@test.com
                </p>

                <p className="userRoleStatic">Права доступа:</p>
                <p
                    className="userRole"
                >
                    Пользователь
                </p>

                <button
                    className="buttonLogout"
                    type="submit"
                    onClick={outAuth}
                >Выход
                </button>


            </div>
        </div>
    )
}

export default Header;