export const selectMyBooks = (state) => state.library.library;

export const selectFiltered = (state) => state.library.filteredBooks;

export const selectIsLoading = (state) => state.library.isLoading;
