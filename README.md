Note: 
In useStore.tsx, you can make the types of the variables 'globalStore' and 'actions' more strict by defining their types as shown below.

//
let globalStore:SomeGlobalStoreType = {};
let subscribers: React.Dispatch<React.SetStateAction<{}>>[] = [];
let actions:SomeActionsType = {};
//

But if it is possible to add more states and actions in the future, let just type it "any" and change it when the project is done.
