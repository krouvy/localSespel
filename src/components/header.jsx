import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown.jsx";
import Logo from "../images/logo_white.png";
import '../css/header.css';

function Header() {
    const [dataProfile, setDataProfile] = useState({'imageUser': null, 'userName': null, 'userMail': null});

    useEffect(() => {

        fetch('/api/userInfo', {
            method: 'POST'
        })
            .then((response) => response.json())
            .then((data) => {
                setDataProfile(data)
            })

    }, [])


    return (
        <div>

            <div className="headerBody" id="headerCss">
                <Link to="/">
                    <img
                        className="icon-logo"
                        src={Logo}
                        alt={'no-image'}
                    />
                </Link>

                <div className="userInfo">
                    <div className="div_login_mail">
                        <p className="nameInfo">{dataProfile.userName}</p>
                        <p className="mailInfo">{dataProfile.userMail}</p>
                    </div>

                    <Dropdown dataProfile={dataProfile} setDataProfile={setDataProfile}/>

                </div>


            </div>

        </div>
    )
}

export default Header