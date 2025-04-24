export const selectUserName = (state) => state.auth.userName;

export const selectUserEmail = (state) => state.auth.userEmail;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectError = (state) => state.auth.error;

export const selectToken = (state) => state.auth.token;
