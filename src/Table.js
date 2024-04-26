import Row from "./rows"


function Table () {
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
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                <Row info={data}/>
                </tbody>
            </table>
        </div>
    )
}

export default Table