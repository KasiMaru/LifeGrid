import { createSelector } from '@reduxjs/toolkit';
import { lifeCalendarSlice } from 'app/modules/LifeCalendar/store/LifeCalendarSlice';
import { RootState } from 'app/store/types';

export const selectLifeCalendar = (state: RootState) => state[lifeCalendarSlice.name];

export const selectUserStartDate = createSelector(selectLifeCalendar, (state) => state.userStartDate);

export const selectUserEndDate = createSelector(selectLifeCalendar, (state) => state.userEndDate);

export const selectChosenRange = createSelector(selectLifeCalendar, (state) => state.selectedRange);