const { createSlice } = require("@reduxjs/toolkit");

const initAuthnSlice = {
    isAdmin: false,
    token: "",
    refreshToken: "",
}

const authnSlice = createSlice({
    name: "Authentication",
    initialState: initAuthnSlice,
    reducers: {
        login(state, payload) {
            console.log(payload)
            const { isAdmin } = payload.payload;
            state.isAdmin = isAdmin;
        }
    }
})

const authnAction = authnSlice.actions;
const authnReducer = authnSlice.reducer;

export {
    authnAction,

}

export default authnReducer;