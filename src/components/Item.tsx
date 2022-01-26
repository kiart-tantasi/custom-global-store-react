const Item = (props: {name: string; onRemove: () => void}) => {
    return (
        <div onClick={props.onRemove} className="item-div">
            <p>{props.name}</p>
        </div>
    )
}

export default Item;