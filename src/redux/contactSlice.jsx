import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, editingContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact, editingContact];
const getActions = type => extraActions.map(action => action[type]);

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(editingContact.fulfilled, (state, action) => {
        const i = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(i, 1, {
          ...state.items[i],
          name: action.payload.name,
          number: action.payload.number,
        });
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactReducer = contactSlice.reducer;
