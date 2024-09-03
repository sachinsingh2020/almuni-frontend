import { createAction, createReducer } from '@reduxjs/toolkit';

const getAllAlumnisRequest = createAction('getAllAlumnisRequest');
const getAllAlumnisSuccess = createAction('getAllAlumnisSuccess');
const getAllAlumnisFail = createAction('getAllAlumnisFail');
const getAlumniDetailsRequest = createAction('getAlumniDetailsRequest');
const getAlumniDetailsSuccess = createAction('getAlumniDetailsSuccess');
const getAlumniDetailsFail = createAction('getAlumniDetailsFail');
const alumniRegisterRequest = createAction('alumniRegisterRequest');
const alumniRegisterSuccess = createAction('alumniRegisterSuccess');
const alumniRegisterFail = createAction('alumniRegisterFail');
const alumniLoginRequest = createAction('alumniLoginRequest');
const alumniLoginSuccess = createAction('alumniLoginSuccess');
const alumniLoginFail = createAction('alumniLoginFail');
const alumniLogoutRequest = createAction('alumniLogoutRequest');
const alumniLogoutSuccess = createAction('alumniLogoutSuccess');
const alumniLogoutFail = createAction('alumniLogoutFail');
const loadAlumniDetailsRequest = createAction('loadAlumniDetailsRequest');
const loadAlumniDetailsSuccess = createAction('loadAlumniDetailsSuccess');
const loadAlumniDetailsFail = createAction('loadAlumniDetailsFail');
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
            state.alumniError = action.payload;
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
            state.alumniError = action.payload;
        })
        .addCase(alumniRegisterRequest, (state) => {
            state.loading = true;
        })
        .addCase(alumniRegisterSuccess, (state, action) => {
            state.loading = false;
            state.isAlumniAuthenticated = true;
            state.alumniUser = action.payload.data;
            state.message = action.payload.message;
        }
        )
        .addCase(alumniRegisterFail, (state, action) => {
            state.loading = false;
            state.alumniError = action.payload;
        }
        )
        .addCase(alumniLoginRequest, (state) => {
            state.loading = true;
        }
        )
        .addCase(alumniLoginSuccess, (state, action) => {
            state.loading = false;
            state.isAlumniAuthenticated = true;
            state.alumniUser = action.payload.user;
            state.message = action.payload.message;
        }
        )
        .addCase(alumniLoginFail, (state, action) => {
            state.loading = false;
            state.alumniError = action.payload;
        }
        )
        .addCase(alumniLogoutRequest, (state) => {
            state.loading = true;
        }
        )
        .addCase(alumniLogoutSuccess, (state, action) => {
            state.loading = false;
            state.isAlumniAuthenticated = false;
            state.alumniUser = null;
        }
        )
        .addCase(alumniLogoutFail, (state, action) => {
            state.loading = false;
            state.alumniError = action.payload;
        }
        )
        .addCase(loadAlumniDetailsRequest, (state) => {
            state.loading = true;
        })
        .addCase(loadAlumniDetailsSuccess, (state, action) => {
            state.loading = false;
            state.isAlumniAuthenticated = true;
            state.alumniUser = action.payload.alumni;
        })
        .addCase(loadAlumniDetailsFail, (state, action) => {
            state.loading = false;
            state.alumniError = action.payload;
        })
        .addCase(clearError, (state) => {
            state.alumniError = null;
        })
        .addCase(clearMessage, (state) => {
            state.message = null;
        })
        .addDefaultCase((state) => {
            state.alumniError = null;
            state.message = null;
        })
})