import { configureStore } from "@reduxjs/toolkit";
import { lifeCalendarSlice } from 'app/modules/LifeCalendar/store/LifeCalendarSlice';

export const store = configureStore({
    reducer: {
        lifeCalendar: lifeCalendarSlice.reducer,
    },
});