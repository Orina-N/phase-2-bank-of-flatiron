import { useState } from "react"

function NewPurchase ({info, setInfo}) {
    //console.log(info);
    const [formData, setFormdata] = useState({
        Date:"",
        Description:"",
        Category:"",
        Amount:""
    })
    
    function change(event){
        setFormdata({...formData,[event.target.name]:event.target.value} )
        //console.log(formData);
    }

    function submit(event) {
        event.preventDefault();
        const updatedInfo = [formData, ...info]; 
        setInfo(updatedInfo);
        console.log(updatedInfo);
    }
    

return (
    <form onSubmit={submit}>
        <div className="row ">
            <input onChange={change} type="text" name="Date" value={formData.Date} className="col-3 p-1 m-0.8 inputs" placeholder="Date"/>
            <input onChange={change} type="text" name="Description" value={formData.Description} className="col-3 p-1 m-0.8 inputs" placeholder="Description"/>
            <input onChange={change} type="text" name="Category" value={formData.Category} className="col-3 p-1 m-0.8 inputs" placeholder="Category"/>
            <input onChange={change} type="text" name="Amount" value={formData.Amount} className="col-3 p-1 m-0.8 inputs"
            placeholder="Amount"/>
        </div>
        <div className="text-center m-4">
            <button type="submit" className="btn btn-primary ">Add Transaction</button>
        </div>
    </form>
)
}

export default NewPurchase