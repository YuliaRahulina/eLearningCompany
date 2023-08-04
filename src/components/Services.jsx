import './services.css'
function Services(props) {
    return (
        <div className="services">
            <p className="servicesMainTitle">Services We Provide</p>
            <div className="servicesContainer">
                {props.list.map(function(item) {
                    return (
                        <div className="servicesList">
                            <img className="srvImg" src={item.img} alt={item.img}/>
                            <p className="servicesTitle">{item.title}</p>
                            <p className="servicesDesc">{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Services;
