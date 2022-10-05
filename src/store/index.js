import { createSlice, configureStore } from "@reduxjs/toolkit";
 
const persistedArray = JSON.parse(sessionStorage.getItem("linksArray"));
console.log(persistedArray); 
let linksArray; 
if(persistedArray && persistedArray.length > 0){
    linksArray = persistedArray
} else{
    linksArray = []; 
}
const linksSlice = createSlice({
    name: "links", 
    initialState : { linksArray}, 
    reducers:{
        updateLinksArray(state, action){
            state.linksArray = [...state.linksArray, action.payload ]; 
            sessionStorage.setItem('linksArray', JSON.stringify(state.linksArray))
        },
    }
})


const store = configureStore({
    reducer: {
        links: linksSlice.reducer, 
    }
})


export const linkActions = linksSlice.actions; 
export default store; 