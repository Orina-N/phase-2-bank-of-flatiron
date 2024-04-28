

import Row from "./rows"


function Table ({info}) {
    //console.log(info);
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
                   <Row info={info}/> 
                </tbody>
            </table>
        </div>
    )
}

export default Table
