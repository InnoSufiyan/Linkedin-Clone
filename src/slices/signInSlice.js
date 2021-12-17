import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null,
}

export const userStateSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
      userCondition: (state, action) => {
        state.user = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { userCondition } = userStateSlice.actions
  
  export default userStateSlice.reducer