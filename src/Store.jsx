import { configureStore } from '@reduxjs/toolkit';
// import campaignReducer from '../slice/campaignSlice';
import AdminDeviceSliceReducer from './Admin/AdminRedux/AdminDeviceSlice';



export const store = configureStore({
  reducer: {
    // campaign: campaignReducer,
    AdminDeviceSlice : AdminDeviceSliceReducer,
    
  },
});


