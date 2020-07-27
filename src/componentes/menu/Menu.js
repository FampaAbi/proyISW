import React from 'react';
//import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";

//bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'mdbreact/dist/css/mdb.css';


class Menu extends React.Component{
render(){
return (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

       <a className="navbar-brand" href="#">Tiare Men2</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarCollapse">
       <ul className="navbar-nav mr-auto">
           <li className="nav-item active">
              <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
           </li>
           <li className="nav-item">
              <a className="nav-link" href="#">Médicos</a>
           </li>
           <li className="nav-item">
              <a className="nav-link" href="#">Pabellones</a>
           </li>
           <li className="nav-item">
              <a className="nav-link" href="#">Pacientes</a>
           </li>
       </ul>
       </div>

       
   </nav>

);
};
};

export default Menu;
