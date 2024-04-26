function FilterPurchases ({info}) {
    //console.log(info);
    function filterByCategory () {
        //console.log('working')
        const newArray = info.filter((purchase) => {
            
        })
    }
    return(
        <input onChange={filterByCategory} className="form-control m-4 p-2" type="text" placeholder="filter by Category"/>
    )
}

export default FilterPurchases