//login action me jo email or password as a parameter receive kiye hai unka nam req.body ke nam se match hona chaiye;
import axios from "axios";
import { server_uri } from "../store.js";

export const authInstance = axios.create({
  baseURL: server_uri + "/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginAction = (email, password) => async (dispatch) => {
  console.log("login req");
  try {
    dispatch({ type: "loginReq" });
    //url ke baad jo {email, password} hai vo actual me req.body hai!
    //req.body se {email, password} controller me access kar rahe hai or vha ka kam hone ke baad jo res.json{success,message} me jo message hai vo {data} me aa raha hai, complete res.json({})
    const { data } = await authInstance.post("/auth/login", {
      email,
      password,
    });

    //paylaod me jo data hai vo ye upper wala {data} hi hai
    console.log("login resssss");
    dispatch({ type: "loginRes", payload: data });
    // phir ye payload reducer me access kar rahe hai!
  } catch (error) {
    console.log(error);
    dispatch({ type: "loginRej", payload: error.response.data.error });
  }
};

export const signUpAction = (name, email, password) => async (dispatch) => {
  try {
    console.log("signup req");
    dispatch({ type: "signUpReq" });

    const { data } = await authInstance.post("/auth/register", {
      name,
      email,
      password,
    });
    console.log("signup ressss", data);

    dispatch({ type: "signUpRes", payload: data });
  } catch (error) {
    console.log("signup rej", error.response.data);
    dispatch({ type: "signUpRej", payload: error.response.data.error });
  }
};

export const changePassAction =
  (currentPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "changePassReq" });

      const { data } = await authInstance.put("/auth/password/change", {
        currentPassword,
        newPassword,
      });
      dispatch({ type: "changePassRes", payload: data });
    } catch (error) {
      dispatch({ type: "changePassRej", payload: error.response.data.error });
    }
  };
export const forgetPassAction = (email) => async (dispatch) => {
  try {
    dispatch({ type: "forgetPassReq" });

    const { data } = await authInstance.post("/auth/password/forget", {
      email,
    });
    dispatch({ type: "forgetPassRes", payload: data });
  } catch (error) {
    dispatch({ type: "forgetPassRej", payload: error.response.data.error });
  }
};
export const resetPassAction =
  (newPassword, confirmPassword, token) => async (dispatch) => {
    try {
      dispatch({ type: "resetPassReq" });

      const { data } = await authInstance.put("/auth/password/reset/" + token, {
        newPassword,
        confirmPassword,
      });
      dispatch({ type: "resetPassRes", payload: data });
    } catch (error) {
      dispatch({ type: "resetPassRej", payload: error.response.data.error });
    }
  };
export const getUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: "getUserReq" });

    const { data } = await authInstance.get("/auth/me");
    dispatch({ type: "getUserRes", payload: data });
  } catch (error) {
    dispatch({ type: "getUserRej", payload: error.response.data.error });
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({ type: "logOutReq" });

    const { data } = await authInstance.get("/auth/logout");

    dispatch({ type: "logOutRes", payload: data });
  } catch (error) {
    dispatch({ type: "logOutRej", payload: error.response.data.error });
  }
};
