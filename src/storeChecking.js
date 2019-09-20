import { createStore } from 'redux';


//checking Store
export const checkingStore = () => {
    const initialState = {
        name: "Anton",
        age: 22,
        sex: "Male",
        isSingle: true
    }
    
    const CHANGE_NAME = "CHANGE_NAME";
    const CHANGE_SEX = "CHANGE_SEX";
    
    const actionChangeName = () => {
        return {
            type: "CHANGE_NAME",
            payload: "Victoria"
        }
        
    }
    
    const actionChangeSex = () => {
        return {
            type: "CHANGE_SEX",
            payload: "Female"
        }
        
    }
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case CHANGE_NAME:
                return {...state, name: action.payload}
            case CHANGE_SEX:
                return {...state, sex: action.payload}   
            default:
                return state;
        }
    }
    
    const store = createStore(reducer);
    
    
    //Проверим подключение store
    console.log(store.getState());
    
    store.dispatch(actionChangeName());
    console.log(store.getState());
    
    store.dispatch(actionChangeSex());
    console.log(store.getState());
}


/*
<Route 
        path = "/working" 
        render={(props) => <Index {...props} className = { `styleForIndex` } />} />*/