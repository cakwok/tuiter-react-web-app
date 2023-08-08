import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
      try {
        const user = await authService.login(credentials);
        console.log("auth-thunks", user);
        return user;
      } catch (e) {
        console.log("auth-thunks catch");
          throw e;
        }
      }
);

export const registerThunk = createAsyncThunk(
  "auth/register", async (credentials) => {
    const user = await authService.register(credentials);
    console.log("registerThunk", user);
    return user;
  }
 );

export const profileThunk = createAsyncThunk(
  "auth/profile", async () => {
  const response = authService.profile();
  return response.data;
});
export const logoutThunk = createAsyncThunk(
  "auth/logout", async () => {
  return await authService.logout();
});
export const updateUserThunk = createAsyncThunk(
  "user/updateUser", async (user) => {
  await authService.updateUser(user);
  return user;
});
 