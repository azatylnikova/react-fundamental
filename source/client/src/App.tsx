import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { AuthPage } from "./page/AuthPage";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { checkAuth } from "./store/userStore/UserStore";
import { getCookie } from "./store/browserCookes";
import AppPage from "./page/AppPage";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Loading from "./components/Loading";

export const App = () => {
  return <Box>Hi</Box>;
};
