import { PlannedCountry, Trip } from '../../types/global';
import { createSlice } from '@reduxjs/toolkit';

export interface TripPlanner {
  isFormOpened: boolean;
  selectedForm: string;
  tripForms: Trip[];
}

export const initialState: TripPlanner = {
  isFormOpened: false,
  selectedForm: '',
  tripForms: [],
};

export const TripPlannerSlice = createSlice({
  name: 'TripPlanner',
  initialState,
  reducers: {
    toggleTripForm: (state: TripPlanner, action: any) => {
      state.isFormOpened = action.payload;
    },
    updateTripForm: (state: TripPlanner, action: any) => {
      const index = state.tripForms.findIndex((trip: Trip) => trip.id === action.payload.id);
      if (index > -1) {
        state.tripForms[index] = { ...state.tripForms[index], ...action.payload };
      } else {
        state.tripForms.push({ ...action.payload });
      }

      state.selectedForm = action.payload.id;
      state.isFormOpened = false;
    },
    updateSelectedTrip: (state: TripPlanner, action: any) => {
      state.selectedForm = action.payload;
    },
    addPlannedCountries: (state: TripPlanner, action: any) => {
      const index = state.tripForms.findIndex((trip: Trip) => trip.id === state.selectedForm);
      if (index > -1) {
        state.tripForms[index].plannedCountries.push(action.payload);
      }
    },
    deletePlannedCountries: (state: TripPlanner, action: any) => {
      const index = state.tripForms.findIndex((trip: Trip) => trip.id === state.selectedForm);
      const deleteIndex = state.tripForms[index].plannedCountries?.findIndex(
        (country: PlannedCountry) => country.alpha2Code === action.payload,
      );
      if (deleteIndex > -1) {
        state.tripForms[index].plannedCountries.splice(deleteIndex, 1);
      }
    },
    deleteTrip: (state: TripPlanner, action: any) => {
      const deleteIndex = state.tripForms.findIndex((trip: Trip) => trip.id === action.payload);
      if (deleteIndex > -1) {
        state.tripForms.splice(deleteIndex, 1);
        state.selectedForm = state.tripForms[0]?.id || '';
      }
    },
    updateTripsToStore: (state: TripPlanner, action: any) => {
      state.tripForms = action.payload;
      state.selectedForm = state.tripForms?.[0]?.id || '';
    },
  },
});

export const {
  toggleTripForm,
  updateTripForm,
  updateSelectedTrip,
  addPlannedCountries,
  deletePlannedCountries,
  deleteTrip,
  updateTripsToStore,
} = TripPlannerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectModalState = (state: any) => state.TripPlanner.isFormOpened;

export const selectCurrentTrip = (state: any) => state.TripPlanner.selectedForm;

export const selectCurrentTripDetails = (state: any) =>
  state.TripPlanner?.tripForms?.find((trip: Trip) => trip.id === state.TripPlanner.selectedForm);

export const selectCurrentTripName = (state: any) => selectCurrentTripDetails(state)?.name;

export const selectAllTrips = (state: any) => state.TripPlanner.tripForms || [];

export const selectPlannedCountries = (state: any) =>
  selectCurrentTripDetails(state)?.plannedCountries || [];

export default TripPlannerSlice.reducer;
