import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarRange } from 'app/modules/LifeCalendar/types';

interface LifeCalendarState {
    userStartDate: string;
    userEndDate: string;
    selectedRange: CalendarRange;
}

const initialState: LifeCalendarState = {
    userStartDate: '',
    userEndDate: '',
    selectedRange: 'week',
};

export const lifeCalendarSlice = createSlice({
    name: 'lifeCalendar',
    initialState,
    reducers: {
        setUserStartDate(state, action: PayloadAction<string>) {
            state.userStartDate = action.payload;
        },
        setUserEndDate(state, action: PayloadAction<string>) {
            state.userEndDate = action.payload;
        },
        setSelectedRange(state, action: PayloadAction<CalendarRange>) {
            state.selectedRange = action.payload;
        },
    },
});
