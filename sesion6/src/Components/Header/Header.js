import './Header.css';


function Header({ pagetitle, desc }) {
    return (
        <div className="hero">
            <h2>{pagetitle}</h2>
            <p>{desc}</p>
        </div>

    )
}
export default Header;