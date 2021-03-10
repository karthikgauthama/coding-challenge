import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  updateTripForm,
  selectModalState,
  selectCurrentTripDetails,
  deletePlannedCountries,
  toggleTripForm,
} from '../../features/TripPlannerProvider/TripPlannerSlice';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { v4 as uuidv4 } from 'uuid';
import { useIntl } from 'react-intl';
import { messages } from './messages';
import { PlannedCountry, Trip } from '../../types/global';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // display: 'flex',
    top: '10%',
    margin: 'auto',
    position: 'initial',
    marginTop: '50px',
  },
  formRoot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export const TripPlanningForm = () => {
  const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  const shouldShowForm = useSelector(selectModalState);
  const currentTripDetails: Trip = useSelector(selectCurrentTripDetails);
  const plannedCountries: PlannedCountry[] = currentTripDetails?.plannedCountries?.slice() || [];
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  const deleteSelectedCountries = (alpha2Code: string) => {
    dispatch(deletePlannedCountries(alpha2Code));
  };

  const [values, setValues] = React.useState({
    name: '',
    description: '',
    plannedStartDate: '',
    showError: false,
    shouldValidate: false,
  });

  const handleChange = (prop: string) => (event: any) => {
    setValues({ ...values, shouldValidate: true, [prop]: event.target.value });
  };

  const validateForm = () => !values.description || !values.name || !values.plannedStartDate;

  const updateTripDetails = () => {
    if (values.shouldValidate || !currentTripDetails) {
      if (validateForm()) {
        setValues({ ...values, showError: true });
        return;
      }

      dispatch(
        updateTripForm({
          id: currentTripDetails?.id || uuidv4(),
          ...values,
          plannedCountries,
        }),
      );

      setValues({
        name: '',
        description: '',
        plannedStartDate: '',
        shouldValidate: false,
        showError: false,
      });
    } else {
      dispatch(toggleTripForm(false));
    }
  };

  const body = (
    <div className={classes.paper}>
      <form noValidate autoComplete="off">
        <Typography variant="h6">Manage your Trip Information</Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '20px',
          }}
        >
          <TextField
            error={values.showError}
            label={formatMessage(messages.tripName)}
            defaultValue={currentTripDetails?.name}
            onChange={handleChange('name')}
          />
          <TextField
            error={values.showError}
            id="standard-error-helper-text"
            label={formatMessage(messages.tripDescription)}
            defaultValue={currentTripDetails?.description}
            onChange={handleChange('description')}
          />
          <TextField
            id="date"
            label={formatMessage(messages.tripPlannedDate)}
            type="date"
            defaultValue={currentTripDetails?.plannedStartDate}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange('plannedStartDate')}
            error={values.showError}
          />
          <Grid item xs={12} md={6} style={{ width: '250px' }}>
            <Typography>{formatMessage(messages.selectedCountries)}</Typography>
            <List
              dense={true}
              style={{ width: '400px', height: '225px', overflowX: 'hidden', overflowY: 'auto' }}
            >
              {plannedCountries?.map((country: PlannedCountry) => (
                <ListItem style={{ width: '400px' }}>
                  <ListItemText primary={country.name} />
                  <ListItemSecondaryAction
                    onClick={() => deleteSelectedCountries(country.alpha2Code)}
                  >
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
        </div>
      </form>
      <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
        <Button variant="contained" color="primary" onClick={() => updateTripDetails()}>
          Update
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={shouldShowForm}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
