//every component is a function
import './Card.css'


function Card({ user }) {
    //we write js
    //....

    return (<div className="Card">
        <img src="./logo192.png" className="Card-Image" />
        <div className="Card-Details">
            <h3 className="Card-Header">{user.fullName}</h3>
            <h4 className="Card-SubHeader"> React</h4>
        </div>
    </div>);

}

export default Card;