import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    searcher: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    changeSearcher: (state, action) => {
      state.searcher = action.payload;
    },
    removeItem: (state, action) => {
      const index = action.payload;
      const todo = state.items.findIndex(item => item.index === index);
      state.items.splice(index, 1);
    }
  },
});

export const { addNote, changeSearcher } = notesSlice.actions;
export default notesSlice.reducer;