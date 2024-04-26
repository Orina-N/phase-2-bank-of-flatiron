import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import Table from './Table';
import FilterPurchases from './filter';

function App() {

  

  return(
    <>
     <div className='container-fluid bg-primary text-center'>
      <h1 className='bank_name'>The Royal Bank of Flatiron </h1>
     </div>
     <FilterPurchases />
    </>
  );
}


export default App;