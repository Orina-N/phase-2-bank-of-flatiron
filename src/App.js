import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import Table from './Table';
import FilterPurchases from './filter';

function App() {

  const data =[
    {
     Date: '2/11/2024',
     Description: 'Movie',
     Category:'Entertainement',
     Amount: '$40'
    },
    {
    Date: '4/11/2024',
    Description: 'Chipotle',
    Category:'Food',
    Amount: '$70'
    },
    {
     Date:'5/11/2024',
     Description:'Delta Airlines',
     Category:'Trip',
     Amount:'$200'  
    },
    {
     Date:'5/11/2024',
     Description:'Airpods',
     Category:'Electronics',
     Amount:'$100'   
    }
]

  return(
    <>
     <div className='container-fluid bg-primary text-center'>
      <h1 className='bank_name'>The Royal Bank of Flatiron </h1>
     </div>
     <FilterPurchases info={data}/>
     <Table info={data}/>
    </>
  );
}

export default App;