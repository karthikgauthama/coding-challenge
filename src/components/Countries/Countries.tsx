import React from 'react';
import { createStyles, Theme } from '@material-ui/core';
import { Query } from '../../relay';
import { graphql } from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { CountryPreviewCard } from '../CountryPreviewCard';
import { Flex } from '../../ui-library/layout';
import { CountryPagination } from '../../features/CountryPagination/CountryPagination';
import { selectCurrentPageSize } from '../../features/CountryPagination/CountrySlice';

const query = graphql`
  query CountriesQuery($first: Int, $offset: Int) {
    Country(first: $first, offset: $offset) {
      ...CountryPreviewCard_data
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      width: '100%',
      height: '100%',
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    countryContainer: {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
        padding: '5px',
      },
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '5px',
      },
    },
  }),
);

export const Countries: React.FC = () => {
  const classes = useStyles();
  const pageCount = useSelector(selectCurrentPageSize);
  const offset = pageCount === 1 ? 0 : pageCount * 20 + 1;

  return (
    <Query query={query} variables={{ first: 20, offset }}>
      {(data: any) => {
        if (!data) {
          return null;
        }

        let issuances = data?.data?.Country || [];

        return (
          <div className={classes.root}>
            <Flex className={classes.countryContainer}>
              {issuances.map((issuance: any) => (
                <CountryPreviewCard data={issuance} />
              ))}
            </Flex>
            <div>
              <CountryPagination />
            </div>
          </div>
        );
      }}
    </Query>
  );
};
