import { configureStore } from "@reduxjs/toolkit";
import balancerSlice from "./balancerSlice";

export default configureStore({
  reducer: {
    balancer: balancerSlice,
  },
});
