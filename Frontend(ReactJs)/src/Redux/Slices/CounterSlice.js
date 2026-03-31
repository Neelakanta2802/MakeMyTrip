import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


const initialState = {
  Count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state) => {
      state.Count += 1
    },
    remove: (state) => {
      state.Count -= 1
    },
    
     reset: (state) => {
      state.Count = 0
    },
  },
})

export const { add, remove, reset } = counterSlice.actions

export default counterSlice.reducer


