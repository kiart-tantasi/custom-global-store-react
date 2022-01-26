import ItemModel from "../model/ItemModel";

const itemActions = {
    ADD_ITEM: (payload:{item: ItemModel}, globalStore:{items:ItemModel[]}) => {
        const newState = [...globalStore.items, payload.item];
        return {items: newState};
    },
    REMOVE_ITEM: (payload:{id: string}, globalStore:{items:ItemModel[]}) => {
        const newState = globalStore.items.filter(x => x.id !== payload.id);
        return {items: newState};
    }
    
}

const itemInitialState: {items:ItemModel[]} = {items:[{id:"1", name:"apple"}, {id:"2", name:"shirt"}, {id:"3", name:"book"}]};

export { itemInitialState };
export default itemActions;