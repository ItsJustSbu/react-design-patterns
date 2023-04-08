function RegularList({items, resourceName, itemComponent: ItemComponent}){
    return(
        <>
            {items.map((item,i)=>
                // ... this is the spread operator changes this section to prop = item
                <ItemComponent key={i} {...{[resourceName]:item}} />
            )}
        </>
    )
}

export default RegularList;