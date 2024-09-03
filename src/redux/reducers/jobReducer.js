import { createAction, createReducer } from '@reduxjs/toolkit';

const createAJobRequest = createAction('createAJobRequest');
const createAJobSuccess = createAction('createAJobSuccess');
const createAJobFail = createAction('createAJobFail');
const getAllJobsRequest = createAction('getAllJobsRequest');
const getAllJobsSuccess = createAction('getAllJobsSuccess');
const getAllJobsFail = createAction('getAllJobsFail');
const clearError = createAction('clearError');
const clearMessage = createAction('clearMessage');

export const jobReducer = createReducer({}, (builder) => {
    builder
        .addCase(createAJobRequest, (state) => {
            state.loading = true;
        })
        .addCase(createAJobSuccess, (state, action) => {
            state.loading = false;
            state.job = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(createAJobFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getAllJobsRequest, (state) => {
            state.loading = true;
        })
        .addCase(getAllJobsSuccess, (state, action) => {
            state.loading = false;
            state.resultPerPage = action.payload.resultPerPage;
            state.filteredJobs = action.payload.filteredJobs;
            state.filteredJobsCount = action.payload.filteredJobsCount;
            state.reversedJobs = action.payload.reversedJobs;
        })
        .addCase(getAllJobsFail, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(clearError, (state) => {
            state.error = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        })
});