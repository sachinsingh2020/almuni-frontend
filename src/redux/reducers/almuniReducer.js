import { createAction, createReducer } from '@reduxjs/toolkit';

const getAllAlumnisRequest = createAction('getAllAlumnisRequest');
const getAllAlumnisSuccess = createAction('getAllAlumnisSuccess');
const getAllAlumnisFail = createAction('getAllAlumnisFail');
const getAlumniDetailsRequest = createAction('getAlumniDetailsRequest');
const getAlumniDetailsSuccess = createAction('getAlumniDetailsSuccess');
const getAlumniDetailsFail = createAction('getAlumniDetailsFail');
const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const alumniReducer = createReducer({}, (builder) => {
    builder
        .addCase(getAllAlumnisRequest, (state) => {
            state.loading = true;
        })
        .addCase(getAllAlumnisSuccess, (state, action) => {
            state.loading = false;
            state.alumnisCount = action.payload.alumniCount;
            state.alumnis = action.payload.alumnis;
            state.filteredAlumni = action.payload.filteredAlumni;
            state.resultsPerPage = action.payload.resultsPerPage;
            state.filteredAlumniCount = action.payload.filteredAlumniCount;
        })
        .addCase(getAllAlumnisFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getAlumniDetailsRequest, (state) => {
            state.loading = true;
        })
        .addCase(getAlumniDetailsSuccess, (state, action) => {
            state.loading = false;
            state.singleAlumniDetail = action.payload.alumni;
        })
        .addCase(getAlumniDetailsFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearError, (state) => {
            state.error = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        })
        .addDefaultCase((state) => {
            state.error = null;
            state.message = null;
        })
})