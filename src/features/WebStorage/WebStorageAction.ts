import { createAction } from '@reduxjs/toolkit';
import { Trip } from '../../types/global';

export const getSavedTrips = createAction<Trip[] | undefined>('trips/getSavedTrips');
