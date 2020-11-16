import React from "react";
import { Switch , Link, Route, NavLink } from "react-router-dom";
import Clinics from "./Clinics";
import styles from "./home.module.css";
import Admin from "./Admin";
import Signup from "./Signup";
import Apollo from "./Apollo";
import Vita from "./Vita";
import Derma from "./Derma";
import Smiles from "./Smiles";
import Sushila from "./Sushila";




function Home(){
    return(
        <div className={styles.container}>
            <div className={styles.navbar}>
             <h1>Health+</h1>
               <ul>
                   <li>
                       <NavLink to="/" style={{textDecoration:"none",color:"white"}}>Home</NavLink>
                       </li>
                   
                <li>
                    <NavLink to="/admin" style={{textDecoration:"none",color:"white"}}>Admin</NavLink>
                </li>
                   <li>
                       <NavLink to="/signup" style={{textDecoration:"none",color:"white"}}>Sign-up
                       </NavLink>
                       </li>
               </ul>
               </div>
               <div className={styles.title}>
                   <h1>
                       Health+
                   </h1>
                   <h4>
                       One place for all your queries related clinics.
                   </h4>
               </div>
               <div className={styles.clinicswrapper}>
                   <Link to="/apollo" style={{textDecoration:"none",color:"black"}}>
                   <Clinics  h2="Apollo Clinic" src="apollo1.jpg"/>
                   </Link>
                <Link to="/vita" style={{textDecoration:"none",color:"black"}}>
                    <Clinics h2="Vita Family Clinic" src="vita1.jpg"/>
                    </Link>
                <Link to="sushila" style={{textDecoration:"none",color:"black"}}>
                    <Clinics h2="Sushila Matrutva Clinic" src="sushila1.jpg"/>
                    </Link>
                <Link to="32" style={{textDecoration:"none",color:"black"}}>
                    <Clinics h2="32 Smiles Dental Clinic" src="32smiles1.jpg"/>
                    </Link>
                <Link to="dermasculpt" style={{textDecoration:"none",color:"black"}}> 
                <Clinics h2="Dermasculpt Clinic" src="derma1.jpg"/>
                </Link>
                
               
               </div>
            </div>

    );
}
export default function App() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={Admin} />
        <Route path='/signup' component={Signup} />
        <Route path='/apollo' component={Apollo} />
        <Route path='/vita' component={Vita} />
        <Route path='/sushila' component={Sushila} />
        <Route path='/32' component={Smiles} />
        <Route path='/dermasculpt' component={Derma} />

      </Switch>
    );
  }

