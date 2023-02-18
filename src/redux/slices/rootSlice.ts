import { createSlice } from '@reduxjs/toolkit';

export interface HeroState {
    name: string,
    description: string
    
}

const initialState: HeroState = {
    name: 'FLippy',
    description: 'loves to slap people with flip-flops '
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        
        
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const {
    chooseName,
    chooseDescription
    
    
} = rootSlice.actions;