const { createSlice } = require("@reduxjs/toolkit");

const initAuthnSlice = {
    isAuthn: false,
    token: "",
    refreshToken: "",
}

const authnSlice = createSlice({
    name: "Authentication",
    initialState: initAuthnSlice,
    reducers: {
        login(state, payload) {

            const { access_token } = payload.payload;
            state.token = access_token;
            state.isAuthn = true;
        }
    }
})

const authnAction = authnSlice.actions;
const authnReducer = authnSlice.reducer;

export {
    authnAction,

}

export default authnReducer;