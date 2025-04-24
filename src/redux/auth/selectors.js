export const selectUserName = (state) => state.auth.auth.userName;

export const selectUserEmail = (state) => state.auth.auth.userEmail;

export const selectIsLoggedIn = (state) => state.auth.auth.isLoggedIn;

export const selectIsLoading = (state) => state.auth.auth.isLoading;

export const selectError = (state) => state.auth.auth.error;

export const selectToken = (state) => state.auth.auth.token;
