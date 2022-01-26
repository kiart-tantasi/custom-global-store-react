import React, { useEffect, useState } from "react";
import ItemModel from "../model/ItemModel";

let globalStore:any = {};
let subscribers: React.Dispatch<React.SetStateAction<{}>>[] = [];
let actions:any = {};

const useStore = (subscribed:boolean = true) => {
    const [store, setStore] = useState(globalStore);

    useEffect(() => {
        if (!subscribed) return;
        subscribers.push(setStore);

        return () => {
            if (!subscribed) return;
            subscribers = subscribers.filter(setstore => setstore !== setStore);
        }
    }, [subscribed])

    const dispatch = (actiontype:string,payload?:{item?:ItemModel,id?:string}) => {
        let newState;
        if (payload) {
            newState = actions[actiontype](payload, globalStore);
        } else if (!payload) {
            newState = actions[actiontype](globalStore);
        }
        globalStore = {...globalStore,...newState};

        for (const setstore of subscribers) {
            setstore(globalStore);
        }

    }
    return {store, dispatch}
}

export const initStore = (action: {}, state: {}) => {
    actions = {...actions,...action}
    globalStore = {...globalStore,...state}
}

export default useStore;