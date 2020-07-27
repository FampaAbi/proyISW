import React from 'react';

import Menu from '../menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial)
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import { useHistory } from "react-router-dom";
//bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
//import 'mdbreact/dist/css/mdb.css';

class Home extends React.Component {


handleClick(e) {  e.preventDefault();  console.log('Seba chupalo.');  }

 render() {

 return(
//<Router>
 <>

 <Menu />

 <main role="main" className="flex-shrink-0 mt-5">

 <section className="text-center">
     <div className="container">
       <h1 style={{padding: "20px"}} className="jumbotron-heading">SALAS </h1>
     </div>
 </section>
         <div className="album py-5 bg-light">
     <div className="container">
       <div className="row">
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm">
             <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: SALA DE RECUPERACION B04"><title>SALA DE RECUPERACION B04</title><rect width="100%" height="100%" fill="#2E78EF"/><text x="20%" y="50%" fill="#eceeef" dy=".3em">SALA DE RECUPERACION B04</text></svg>
             <div className="card-body">
               <p className="card-text">Ocupadas (6/6)</p>
               <div className="d-flex justify-content-between align-items-center">
               <div className="btn-group">
                 <p><a href ="#/sala1"  role="button" className="btn btn-sm btn-outline-secondary">Ver más</a></p>
               </div>

               </div>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm">
             <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 2"><title>SALA DE RECUPERACION B67</title><rect width="100%" height="100%" fill="#2E78EF"/><text x="20%" y="50%" fill="#eceeef" dy=".3em">SALA DE RECUPERACION B67</text></svg>
             <div className="card-body">
               <p className="card-text">Ocupadas (3/6)</p>
               <div className="d-flex justify-content-between align-items-center">
               <div className="btn-group">
                 <p><a href ="#/sala2"  role="button" className="btn btn-sm btn-outline-secondary">Ver más</a></p>
               </div>

               </div>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm">
             <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 3"><title>SALA DE RECUPERACION B89</title><rect width="100%" height="100%" fill="#2E78EF"/><text x="20%" y="50%" fill="#eceeef" dy=".3em">SALA DE RECUPERACION B89</text></svg>
             <div className="card-body">
               <p className="card-text">Ocupadas (4/6)</p>
               <div className="d-flex justify-content-between align-items-center">
                 <div className="btn-group">
                   <p><a href ="#/sala3"  role="button" className="btn btn-sm btn-outline-secondary">Ver más</a></p>
                 </div>

               </div>
             </div>
           </div>
         </div>






       </div>
     </div>
 </div>

    </main>


    </>
//</Router>
 )

 }

}

export default Home;
