import React from 'react';
import { createStyles, Theme } from '@material-ui/core';
import { Query } from '../../relay';
import { graphql } from 'babel-plugin-relay/macro';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { CountryPreviewCard } from '../CountryPreviewCard';
import { Flex } from '../../ui-library/layout';
import { selectSearchParam } from '../../features/SearchProvider/SearchSlice';

const query = graphql`
  query SearchCountriesQuery($filter: _CountryFilter) {
    Country(filter: $filter) {
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
    issuancesContainer: {
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

export const SearchCountries: React.FC = () => {
  const classes = useStyles();
  const searchKey = useSelector(selectSearchParam);

  return (
    <Query
      query={query}
      variables={{
        filter: { OR: [{ name_contains: searchKey }, { capital_contains: searchKey }] },
      }}
    >
      {(data: any) => {
        if (!data) {
          return null;
        }

        let issuances = data?.data?.Country || [];

        return (
          <div className={classes.root}>
            <Flex className={classes.issuancesContainer}>
              {issuances.map((issuance: any) => (
                <CountryPreviewCard data={issuance} />
              ))}
            </Flex>
          </div>
        );
      }}
    </Query>
  );
};
