import { createSlice } from '@reduxjs/toolkit';
import { SERVICE_URL } from 'config.js';
import axios from 'axios';

const initialState = {
  fashions: [],
  pageCount: 0,
  pageIndex: 0,
  loading: false,
};

const fashionsSlice = createSlice({
  name: 'fashions',
  initialState,
  reducers: {
    receiveService(state, action) {
      const { fashions, pageCount, loading } = action.payload;
      state.fashions = fashions;
      state.pageCount = pageCount;
      state.loading = loading;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
const { setLoading, receiveService } = fashionsSlice.actions;

export const getFashions =
  ({ term, sortBy, pageSize, pageIndex }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.get(`http://localhost:5000/api/fashions`, { params: { term, sortBy, pageSize, pageIndex } });
    const { items: fashions, pageCount } = response.data;
    dispatch(receiveService({ fashions, pageCount, loading: false, pageIndex }));
  };

export const createFashion =
  ({ sortBy, pageSize, pageIndex, item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.post(`${SERVICE_URL}/apps/fashions`, { sortBy, pageSize, pageIndex, item });
    const { items: fashions, pageCount } = response.data;
    dispatch(receiveService({ fashions, pageCount, loading: false, pageIndex }));
  };

export const updateFashion =
  ({ sortBy, pageSize, pageIndex, item }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const response = await axios.put(`${SERVICE_URL}/apps/fashions`, { sortBy, pageSize, pageIndex, item });
    const { items: fashions, pageCount } = response.data;
    dispatch(receiveService({ fashions, pageCount, loading: false, pageIndex }));
  };
export const deleteFashion =
  ({ sortBy, pageSize, pageIndex, ids }) =>
  async (dispatch) => {
    const response = await axios.delete(`${SERVICE_URL}/apps/fashions`, { sortBy, pageSize, pageIndex, ids });
    const { items: fashions, pageCount } = response.data;
    dispatch(receiveService({ fashions, pageCount, loading: false, pageIndex }));
  };

const fashionsReducer = fashionsSlice.reducer;

export default fashionsReducer;
