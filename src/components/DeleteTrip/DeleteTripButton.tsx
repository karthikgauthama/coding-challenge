import React from 'react';
import Button from '@material-ui/core/Button';
import { useIntl } from 'react-intl';
import { messages } from './messages';
import { selectCurrentTrip, deleteTrip } from '../../features/TripPlannerProvider/TripPlannerSlice';
import { useSelector, useDispatch } from 'react-redux';

export const DeleteTripButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const currentTripId = useSelector(selectCurrentTrip);
  if (!currentTripId) {
    return null;
  }
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(deleteTrip(currentTripId))}
      >
        {formatMessage(messages.deleteTrip)}
      </Button>
    </div>
  );
};
