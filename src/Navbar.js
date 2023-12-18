
import { Link } from "react-router-dom";
import citytour from './citytour.jpeg'
function Navbar(){

    return(
      <div className='container-fluid'>
      <div className='row ' >
          <div className='d-flex nav1 ' >
           
              <img src={citytour} className='img-fluid my-1' style={{height:'80px'}}></img>
                    
              <ul className="nav my-3">
                     <li className="nav-item">
                    <Link className="nav-link " to='/Project1'>Home</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                     <Link className="nav-link" to='/holiday'>Holidays</Link>
                     </li>    
              </ul>
           </div>
       </div>
       </div>
    );

}

export default Navbar;