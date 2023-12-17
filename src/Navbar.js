
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <a className="navbar-brand" href="#"><img className="imgg px-2"src='https://tse4.mm.bing.net/th?id=OIP.Yx0uJruCrTz85C30Mvzt4wHaGp&pid=Api&P=0&h=80'/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" style={{color:'yellowgreen'}} href="#" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  style={{color:'yellowgreen'}}  href="#" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  style={{color:'yellowgreen'}}  href="#" to="/holiday">Holidays</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  style={{color:'yellowgreen'}} href="#">Details</Link>
            </li>
            
          </ul>
        </div>
      </nav>
    );

}

export default Navbar;