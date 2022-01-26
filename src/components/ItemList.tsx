import React from "react";
import ItemModel from "../model/ItemModal"
import Item from "./Item";

const ItemList = (props: { items: ItemModel[]; onRemove: (id:string) => void}) => {
    return (
        <div>
            {props.items.map((x) => {
                return <Item key={x.id} name={x.name} onRemove={props.onRemove.bind(null, x.id)} />
            })}
        </div>
    )
}

export default ItemList;