import { AppDispatch } from "../store";
import { DevsGrSlice } from "../reducers/DevsGrSlice";
import DevsGrCreator from "../services/DevsGrCreator";
import { TDGroup } from "../../models/IDev";
import { DevsGrSelectedSlice } from "../reducers/DevsGrSelectedSlice";

export const getDevsGr =
  (users_w: boolean, org_id: string, code: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(DevsGrSlice.actions.getDevsFetching());

    try {
      const response = await DevsGrCreator.get_DevsGroups(
        users_w,
        org_id,
        code
      );
      dispatch(DevsGrSlice.actions.getDevsFetchingSuccess(response.data));
    } catch (e: any) {
      dispatch(DevsGrSlice.actions.getDevsFetchingError("Произошла ошибка"));
    }
  };

// export const selectDevs =
//   (id_devs: any, id_child: any) => async (dispatch: AppDispatch) => {
//     let data = {
//       id_devs,
//       id_child
//     };
//     try {
//       dispatch(DevsGrSelectedSlice.actions.getDevsFetchingSuccess(data));
//     } catch (e: any) {
//       console.log(e);
//     }
//   };
