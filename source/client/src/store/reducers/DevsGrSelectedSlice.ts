import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IApiResponse } from "../../models/response/ApiResponse";
import { deleteAllCookies, setCookie } from "../browserCookes";
import { DEVICE, D_GROUP, TDGroup, TDevice } from "../../models/IDev";

export type gr = {
  id_devs: string;
  id_child: string;
};
const initialState: gr = {
  id_devs: "",
  id_child: ""
};

export const DevsGrSelectedSlice = createSlice({
  name: "dev",
  initialState,
  reducers: {
    selectIdParent(state, action: PayloadAction<any>) {
      state.id_devs = action.payload;
    },
    selectIdChild(state, action: PayloadAction<any>) {
      state.id_child = action.payload;
    }
  }
});

export default DevsGrSelectedSlice.reducer;
