import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AjaxError } from 'rxjs/ajax';
import { createFeatureSelector } from 'utils/ducks';

export type State = {
    unauthorized: boolean;

    goBack: boolean;
    redirectUrl?: string;
};

export const initialState: State = {
    unauthorized: false,
    goBack: false,
};

export const slice = createSlice({
    name: 'appRedirect',

    initialState,

    reducers: {
        clearUnauthorized: (state, action: PayloadAction<void>) => {
            state.unauthorized = false;
        },

        setUnAuthorized: (state, action: PayloadAction<void>) => {
            state.unauthorized = true;
        },

        clearGoBack: (state, action: PayloadAction<void>) => {
            state.goBack = false;
        },

        clearRedirectUrl: (state, action: PayloadAction<void>) => {
            state.redirectUrl = undefined;
        },

        goBack: (state, action: PayloadAction<void>) => {
            state.goBack = true;
        },

        redirect: (state, action: PayloadAction<{ url: string }>) => {
            state.redirectUrl = action.payload.url;
        },

        fetchError: (state, action: PayloadAction<{ error: Error; message: string }>) => {
            if (action.payload.error instanceof AjaxError && action.payload.error.status === 401) {
                state.unauthorized = true;
            }
        },
    },
});

const selectState = createFeatureSelector<State>(slice.name);

const unauthorized = createSelector(selectState, (state) => state.unauthorized);
const goBack = createSelector(selectState, (state) => state.goBack);
const redirectUrl = createSelector(selectState, (state) => state.redirectUrl);

export const selectors = {
    unauthorized,
    goBack,
    redirectUrl,
};

export const actions = slice.actions;

export const reducer = slice.reducer;
