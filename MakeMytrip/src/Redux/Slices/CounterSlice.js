import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


// Global Data Object 
const initialState = {
  Count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state) => {
      debugger
      state.Count += 1
    },
    remove: (state) => {
      state.Count -= 1
    },
    
     reset: (state) => {
      debugger
      state.Count = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, reset } = counterSlice.actions

export default counterSlice.reducer



// store 

// slices for logic


// counter.jsx

// dispatch(add())

// dispatch(sub())

// dispatch(reset())

// Global Data Count :1 2 3 4 5 


// counter.jsx
// Count data dipay cheyali ?


// const count = useSelector((globalState)=>globalState)
