import React from 'react';
import Button from '@material-ui/core/Button';
import { useIntl } from 'react-intl';
import { messages } from './messages';
import {
  toggleTripForm,
  selectCurrentTrip,
} from '../../features/TripPlannerProvider/TripPlannerSlice';
import { useSelector, useDispatch } from 'react-redux';

export const CreateTripButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const currentTrip = useSelector(selectCurrentTrip);

  const buttonLabel = currentTrip ? formatMessage(messages.edit) : formatMessage(messages.create);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => dispatch(toggleTripForm(true))}>
        {buttonLabel}
      </Button>
    </div>
  );
};
