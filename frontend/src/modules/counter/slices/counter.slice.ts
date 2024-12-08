import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            } else {
                alert("Count cannot be less than 0");
            }
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;