import React from "react";
import { fetchItem } from "../../util/api_util";


const ItemDetail = ({item}) => {
    if (item === undefined) {return null};
    // debugger;
    return (
    <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.happiness}</li>
    </ul>
    );


}

export default ItemDetail; 