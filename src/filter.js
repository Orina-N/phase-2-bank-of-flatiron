import { useState } from "react";
import Table from "./Table";
import NewPurchase from "./add";
function FilterPurchases() {
    const array =[
        {
            Date: '04/14/2024',
            Description: 'Movie',
            Category:'Entertainement',
            Amount: '$40'
           },
           {
           Date: '04/18/2024',
           Description: 'Chipotle',
           Category:'Food',
           Amount: '$70'
           },
           {
            Date:'04/19/2024',
            Description:'Delta Airlines',
            Category:'Trip',
            Amount:'$200'  
           },
           {
            Date:'04/20/2024',
            Description:'Airpods',
            Category:'Electronics',
            Amount:'$100'   
           }
    ]


    const [data, setData] = useState(array)


    function filterByDescription (event){
        const text = event.target.value
       if(text.length > 0){
        const filtered = data.filter((purchase) => {
            return purchase.Description.toLowerCase().includes(text.toLowerCase())
        })
        setData([...filtered])
       }else{
        setData([...array])
       }
    }
     
    return(
        <>
         <input onChange={filterByDescription} className="form-control m-4 p-2" type="text" placeholder="filter by Description"/>
         <NewPurchase info={data} setInfo={setData}/>
         <Table info={data}/>
        </>
        
    )
}

export default FilterPurchases