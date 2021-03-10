import { call, put, select, takeLatest, throttle } from 'redux-saga/effects';
import isEmpty from 'lodash/isElement';
import {
  selectAllTrips,
  deleteTrip,
  deletePlannedCountries,
  addPlannedCountries,
  updateTripForm,
  updateTripsToStore,
} from '../TripPlannerProvider/TripPlannerSlice';

function* getSavedTrips() {
  const allTrips = JSON.parse(localStorage.getItem('savedTrips') || '');
  if (Array.isArray(allTrips)) {
    yield put(updateTripsToStore(allTrips));
  } else {
    yield put(updateTripsToStore([]));
  }
}

function* saveTrips() {
  const allTrips = yield select(selectAllTrips);
  if (!isEmpty(allTrips)) {
    localStorage.setItem('savedTrips', JSON.stringify(allTrips));
  }
}

function* tripSagas() {
  yield takeLatest('trips/getSavedTrips', getSavedTrips);
  yield throttle(100, updateTripForm, saveTrips);
  yield throttle(100, deleteTrip, saveTrips);
  yield throttle(100, deletePlannedCountries, saveTrips);
  yield throttle(100, addPlannedCountries, saveTrips);
}

export default tripSagas;
