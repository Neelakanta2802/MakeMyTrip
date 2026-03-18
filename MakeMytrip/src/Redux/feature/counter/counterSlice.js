import { createSlice } from "@reduxjs/toolkit";

//  const [counterValue, setCounterValue] = useState(0);// local way state update cheydam

const globalState = {
  counterValue: "Shruthi",
  secondName:"Harish"
};

export const counterSlice = createSlice({
  name: "shruthiCounterApp", // compoentn name
  initialState: globalState, // intiitka data create chesev 0
  reducers: {
    // data ni add creatw upodate delete
    handleIncrement: (state) => {
      state.counterValue += 1;
    },
    handleDecrement: (state) => {
      state.counterValue -= 1;
    },
  },
});

export const { handleIncrement, handleDecrement } = counterSlice.actions;

export default counterSlice.reducer;
