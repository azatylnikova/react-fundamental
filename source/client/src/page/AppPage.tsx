import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getDevsGr } from "../store/authStore/DevsGrStore";
import { Box } from "@mui/system";
import Loading from "../components/Loading";

function AppPage() {
  const dispatch = useAppDispatch();
  const { code, data } = useAppSelector(state => state.userReducer);
  const { isLoading } = useAppSelector(state => state.devsReducer);

  const data_devs = useAppSelector(state => state.devsReducer.data);
  let devs: any = data_devs;
  let devs_g;

  const users_w = true;
  useEffect(() => {
    dispatch(getDevsGr(users_w, data[0].org_id, code));
  }, []);

  if (devs.length > 0) {
    devs_g = JSON.parse(devs);

    return (
      <body className="wrapper-page">
        <main className="main">
          <header className="header row sticky">
            <div className="col-12"> 1</div>
          </header>
          <div className="blank-col"></div>
          <div className="main-content">
            <div className="wrapper">
              <div className="row">
                <aside className="col-3 sidebar-left">12</aside>
                <div className="col-8 content-page">1</div>
                <aside className="col-1 sidebar-right">1</aside>
              </div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default AppPage;
