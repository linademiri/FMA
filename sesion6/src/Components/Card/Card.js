import './Card.css'


function Card({ CardD }) {
    return (

        <div class="card">
            <img src="" alt="Card 1" />
            <h3>{title} <u>{price}{currency}</u></h3>
            <p>a</p>
            <ul class="card-list">
                <li>{features[0]}</li>
                <li>{features[1]}</li>
            </ul>
        </div>);

}


export default Card;
