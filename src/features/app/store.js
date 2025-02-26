import {configureStore} from "@reduxjs/toolkit";
import user from "../user/userSlice.js"
import stats from "../stats/statsSlice.js"

export const store = configureStore({
        reducer: {
            user, stats
        }
    }
);
