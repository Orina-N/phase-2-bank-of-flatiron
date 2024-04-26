function Row ({info}) {
    //console.log(info);
    const newDataArray = info.map((purchase, index) => {
        return (
            <tr key={index+1}>
             <td>{purchase.Date}</td>
             <td>{purchase.Description}</td>
             <td>{purchase.Category}</td>
             <td>{purchase.Amount}</td>
         </tr>
        )
    })
    return (
        <>
         {newDataArray}
        </>
    )
}

export default Row
