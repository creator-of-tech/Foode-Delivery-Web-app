import {createSlice} from "@reduxjs/toolkit"
import { act } from "react";

const cart = createSlice({
    name : 'cartslice',
    initialState : {
        items : [],
        count :0,
    },
    reducers : {
        addItems : (state,action)=>{
            state.items.push({...action.payload,quantity:1});
            state.count = state.count + 1;
        },
        Incrementitems : (state,action)=>{
          const obj  = state.items.find(item => item.id == action.payload.id);
          obj.quantity +=1;
          state.count = state.count + 1;
        },
        Decrementitems : (state,action)=>{
            const obj  = state.items.find(item => item.id == action.payload.id);
            if(state.count >= 1){
                state.count = state.count - 1;
            }
            else{
                state.count = 0;
            }
            if(obj.quantity > 1){
                obj.quantity -=1;
            }
            else{
               state.items =  state.items.filter(item => item.id!=action.payload.id);
            }
        }
    }
})

export const {addItems,Incrementitems,Decrementitems} =cart.actions;
export default cart.reducer;