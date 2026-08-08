import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



const MenuSlice = createSlice({
    name : "menu_cache",
    initialState : {
        menus : {}
    },
    reducers : {
        addMenu : (state,action) =>{
            const {id,menu} = action.payload;
            // state.menus[id] = menu;
            if(!state.menus[id]){
                state.menus[id] = menu;
            }
        }
    }
});

export const {addMenu} = MenuSlice.actions;
export default MenuSlice.reducer;