import React from 'react';
import { useHistory } from 'react-router-dom';
import { graphql } from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { Props } from 'CountryPreviewCard';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, IconButton, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import AddCircle from '@material-ui/icons/AddCircle';

import { Row } from '../../ui-library/layout';
import {
  selectPlannedCountries,
  selectCurrentTrip,
  addPlannedCountries,
} from '../../features/TripPlannerProvider/TripPlannerSlice';
import { useSelector, useDispatch } from 'react-redux';
import { PlannedCountry } from '../../types/global';
import { linkToCountry } from '../../utils/global';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.down('md')]: {
        flex: '0 0 50%',
        marginBottom: theme.spacing(3),
      },
      [theme.breakpoints.up('md')]: {
        flex: '0 0 33%',
        marginBottom: theme.spacing(3),
      },
    },
    media: {
      height: theme.spacing(18),
    },
    minInvestmentContainer: {
      justifyContent: 'space-between',
      // marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      // marginBottom: theme.spacing(3),
      margin: '10px',
    },
    investmentDataContainer: {
      marginTop: theme.spacing(2),
    },
    statusIcon: {
      marginRight: theme.spacing(1),
      justifyContent: 'center',
    },
    mediaButtons: {
      width: '100%',
      justifyContent: 'flex-end',
    },
    cardActions: {
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    meetTheTeam: {
      width: '100%',
      padding: theme.spacing(5, 0),
    },
    membersContainer: {
      flexDirection: 'column',

      [theme.breakpoints.up('md')]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
      },
    },
    avatar: {
      width: '100%',
      paddingTop: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    oneMember: {
      justifyContent: 'center',

      [theme.breakpoints.up('md')]: {
        flex: '0 0 31%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: theme.spacing(5),
        marginRight: theme.spacing(5),

        '&:nth-child(3n)': {
          marginRight: 0,
        },
        '&:last-child': {
          marginRight: 0,
        },
      },
    },
  }),
);

export const PlainCountryPreviewCard: React.FC<Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const plannedCountries = useSelector(selectPlannedCountries);
  const dispatch = useDispatch();
  const { data } = props;
  const { alpha2Code, name } = data;
  const currentTrip = useSelector(selectCurrentTrip);
  const showAddButton =
    plannedCountries?.findIndex(
      (country: PlannedCountry) => country.alpha2Code === data.alpha2Code,
    ) === -1 && currentTrip;

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => history.push(linkToCountry(data.alpha2Code))}
        style={{ margin: '10px' }}
      >
        <CardMedia
          component="img"
          className={classes.media}
          image={data.flag.svgFile}
          title={data.name}
        />
      </CardActionArea>
      <Row className={classes.minInvestmentContainer}>
        <Typography>{data.name}</Typography>
        {showAddButton && (
          <IconButton edge="end" aria-label="add" onClick={() => {
              dispatch(addPlannedCountries({ alpha2Code, name }));
          }}
          >
              <AddCircle
                  style={{ color: green[500], fontSize: 30 }}
              />
          </IconButton>
        )}
        <Typography>{data.capital}</Typography>
      </Row>
    </Card>
  );
};
export const CountryPreviewCard: any = createFragmentContainer<any>(PlainCountryPreviewCard, {
  data: graphql`
    fragment CountryPreviewCard_data on Country {
      alpha2Code
      flag {
        svgFile
      }
      capital
      population
      name
    }
  `,
});
