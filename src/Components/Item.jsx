import React from "react";

function Item(props) {
    const {element} = props;
    return(
        <tr>
            <td><input type="checkbox" /></td>
            <td>{element.name}</td>
            <td>{element.category}</td>
            <td>{element.availability}</td>
            <td>{element.arrival_status}</td>
        </tr>
    )
}

export default Item;