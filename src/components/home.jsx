import { Link } from "react-router-dom";
import '../css/home.css';




function Home({token, setToken}) {

    console.log('home')

    function getToken(){
        if(token == null){
            console.log('Подготавливаю токен')
            setToken('ready')
        }
    }


    const menuItems = [
        { name: 'Станки', link: '/stanki/ОТК', iconClass: 'stanki', description: 'Суточные и месячные отчеты работы оборудования' },
        { name: 'Энергоресурсы', link: '/energyWater', iconClass: 'energy', description: 'Показатели расхода газа, воды, электроэнергии' },
        // { name: 'Beacon', link: '/beacon', iconClass: 'beacon', description: 'Отслеживание объектов' },
        { name: 'Сетевое окружение', link: '/network', iconClass: 'network', description: 'Сетевое окружение' },
        { name: 'Контроль персонала', link: '/scud/2ploshadka', iconClass: 'scud', description: 'Отслеживание работы сотрудников в зонах предприятия' },
        { name: 'Owencloud', link: '/owencloud', iconClass: 'owencloud', description: 'Облачная платформа мониторинга оборудования' },
        { name: 'Умный дом', link: '/intra', iconClass: 'intra', description: 'SCADA система Intrahouse для диспетчеризации' },
        { name: 'Wialon', link: '/wialon', iconClass: 'wialon', description: 'Облачная платформа мониторинга производимых ППЦ' },
        { name: 'Teamcenter', link: '/teamcenter', iconClass: 'teamcenter', description: 'Платформа для работы с конструкторской документацией'},
        { name: 'Конфигуратор ППЦ', link: '/configPpc', iconClass: 'confPpc', description: 'Трёхмерный конфигуратор ППЦ' },
        { name: '3D карта предприятия', link: '/mapService', iconClass: 'beacon', description: '3D модель цехов с отображением связи со станками', onClick:getToken},
    ];

    return (
        <div className="homeBody">
            <div className="main-container-home">
                {menuItems.map(({name, link, iconClass, description, onClick}) => (
                    <Link key={name} to={link} className="container-home" onClick={(e) =>{
                        if(onClick !== undefined) onClick(e)
                    }}>
                        <div className="icon-container">
                            <p>{description}</p>
                            <div className={`${iconClass}`}/>
                        </div>
                        <h2 className="buttonName">{name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )

}

export default Home;

