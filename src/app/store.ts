import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import languageReducer from '../features/LanguageProvider/languageSlice';
import countrySliceReducer from '../features/CountryPagination/CountrySlice';
import SearchCountrySliceReducer from '../features/SearchProvider/SearchSlice';
import TripPlannerSliceReducer from '../features/TripPlannerProvider/TripPlannerSlice';
import tripSagas from '../features/WebStorage/WebStorageSaga';

const epicMiddleware = createEpicMiddleware();
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    language: languageReducer,
    form: formReducer,
    pagination: countrySliceReducer,
    SearchParam: SearchCountrySliceReducer,
    TripPlanner: TripPlannerSliceReducer,
  },
  middleware: [epicMiddleware, sagaMiddleware],
});

sagaMiddleware.run(tripSagas);
