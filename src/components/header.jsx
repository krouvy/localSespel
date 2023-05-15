import {useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown.jsx";
import Logo from "../images/logo_white.png";
import '../css/header.css';

function Header() {
    const [dataProfile, setDataProfile] = useState({'imageUser': null, 'userName': null, 'userMail': null});

    let [login, setLogin] = useState(false)
    let loginRef = useRef()

    useEffect(() => {

        if(login) {
            console.log('Переход')
            loginRef.current.click()
        }
    }, [login])

    let i = 0

    // function block(e){
    //     e.preventDefault();
    // }

    function Li(e){
        e.preventDefault();
        console.log('Попытка переадресоваться заблокирована', i)
        i+=1
        if(i >= 3){
            console.log('Разблокировать адресацию')
            setLogin(true)
        }
    }

    return (
        <div>

            <div className="headerBody" id="headerCss">
                <Link to="/" onClick={login? null:Li} ref={loginRef}>
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