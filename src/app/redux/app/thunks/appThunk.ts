import { createAsyncThunk } from "@reduxjs/toolkit";
import AppController from "../../../controllers/AppController";

const appController = new AppController();

export const getGoal = createAsyncThunk(
  'app/index',
  async (args: void, { rejectWithValue }) => {
    try {
      let response: any = await appController.getGoal();
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);