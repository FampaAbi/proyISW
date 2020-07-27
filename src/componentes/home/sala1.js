import React from 'react';

import Menu from '../menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial)

//bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
//import 'mdbreact/dist/css/mdb.css';

class Sala1 extends React.Component {

 render() {

 return(

 <>

 <Menu />

 <main role="main" className="flex-shrink-0 mt-5">

 <section className="text-center">
     <div className="container">
       <h1 style={{padding: "20px"}} className="jumbotron-heading">Sala B04</h1>
     </div>
 </section>

         <div className="album py-5 bg-light">
     <div className="container">
       <div className="row">
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm">
             <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: DISPONIBLE"><title>OCUPADO</title><rect width="100%" height="100%" fill="#c60300"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">OCUPADO</text></svg>
             <div className="card-body">
               <p className="card-text">CAMA B04-2</p>
               <div className="d-flex justify-content-between align-items-center">
               <div className="btn-group">
                 <p><a href ="" role="button" className="btn btn-sm btn-outline-secondary">Ver paciente</a></p>

               </div>

               </div>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm">
             <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 2"><title>SALA DE RECUPERACION B67</title><rect width="100%" height="100%" fill="#c60300"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">OCUPADO</text></svg>
             <div className="card-body">
               <p className="card-text">CAMA B04-3</p>
               <div className="d-flex justify-content-between align-items-center">
               <div className="btn-group">
                 <p><a href ="" role="button" className="btn btn-sm btn-outline-secondary">Ver paciente</a></p>

               </div>

               </div>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm">
             <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 3"><title>SALA DE RECUPERACION B89</title><rect width="100%" height="100%" fill="#c60300"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">OCUPADO</text></svg>
             <div className="card-body">
               <p className="card-text">CAMA B04-4</p>
               <div className="d-flex justify-content-between align-items-center">
                 <div className="btn-group">
                   <p><a href ="" role="button" className="btn btn-sm btn-outline-secondary">Ver paciente</a></p>

                 </div>

               </div>
             </div>
           </div>
         </div>

         <div className="col-md-4">
           <div className="card mb-4 shadow-sm">
             <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 4"><title>Servicio 4</title><rect width="100%" height="100%" fill="#c60300"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">OCUPADO</text></svg>
             <div className="card-body">
               <p className="card-text">CAMA B04-5</p>
               <div className="d-flex justify-content-between align-items-center">
                 <div className="btn-group">
                   <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>

                 </div>

               </div>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm">
             <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 5"><title>Servicio 5</title><rect width="100%" height="100%" fill="#c60300"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">OCUPADO</text></svg>
             <div className="card-body">
               <p className="card-text">CAMA B04-6</p>
               <div className="d-flex justify-content-between align-items-center">
                 <div className="btn-group">
                   <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>

                 </div>

               </div>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <div className="card mb-4 shadow-sm">
             <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 6"><title>Servicio 6</title><rect width="100%" height="100%" fill="#c60300"/><text x="40%" y="50%" fill="#eceeef" dy=".3em">OCUPADO</text></svg>
             <div className="card-body">
               <p className="card-text">CAMA B04-7</p>
               <div className="d-flex justify-content-between align-items-center">
                 <div className="btn-group">
                   <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>

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

 )

 }

}

export default Sala1;
