const { createSlice } = require("@reduxjs/toolkit");

type Token = {
  access_token: string;
  refresh_token: string;
};

let token: Token = {
  access_token: "",
  refresh_token: "",
};
if (typeof window !== "undefined") {
  token = JSON.parse(
    localStorage.getItem("token") ||
      JSON.stringify({
        access_token: "",
        refresh_token: "",
      })
  );
}

if (typeof window !== "undefined") {
}

let initAuthnSlice = token;
// let initAuthnSlice = {
//   isAuthn: token ? true : false,
//   token: token ? token : "",
//   // refreshToken: "",
// };

// if (token) {
//   initAuthnSlice = {
//     isAuthn: true,
//     token: token,
//   };
// }

const authnSlice = createSlice({
  name: "Authentication",
  initialState: initAuthnSlice,
  reducers: {
    login(state: any, payload: any) {
      const { access_token } = payload.payload;
      state.token = access_token;
      // state.isAuthn = true;
      localStorage.setItem(
        "token",
        JSON.stringify({
          access_token: access_token,
        })
      );
    },
    logout(state: any) {
      state.access_token = "";
      localStorage.removeItem("token");
      window.location.href = "/login";
    },
  },
});

const authnAction = authnSlice.actions;
const authnReducer = authnSlice.reducer;

export { authnAction };

export default authnReducer;
