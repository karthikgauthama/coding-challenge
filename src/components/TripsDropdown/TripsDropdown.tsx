import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
  selectCurrentTripName,
  selectAllTrips,
  updateSelectedTrip,
  toggleTripForm,
} from '../../features/TripPlannerProvider/TripPlannerSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Trip } from '../../types/global';

const dummyTrip = {
  id: 'CREATE_NEW_TRIP',
  name: 'CREATE NEW TRIP',
};

export const TripsDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const currentTripName = useSelector(selectCurrentTripName);
  const allTrips: Trip[] = [dummyTrip, ...useSelector(selectAllTrips)];
  const dispatch = useDispatch();
  if (!currentTripName) {
    return null;
  }

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id: string | unknown) => {
    if (id === dummyTrip.id) {
      dispatch(toggleTripForm(true));
      dispatch(updateSelectedTrip(''));
    } else if (typeof id === 'string') {
      dispatch(updateSelectedTrip(id));
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {currentTripName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {allTrips.map((trip) => (
          <MenuItem onClick={() => handleClose(trip.id)}>{trip.name}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};
