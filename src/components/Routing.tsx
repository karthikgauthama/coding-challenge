import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateLinks, PublicLinks } from '../constants/urls';
import { Countries } from './Countries';
import { CountryDetails } from './CountryDetails';
import { SearchCountries } from './SearchCountries';

export const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={PublicLinks.Self} component={Countries} name="Home" />
    </Switch>
  );
};

export const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Route
        exact
        path={PrivateLinks.CountryDetails}
        component={CountryDetails}
        name="CountryDetails"
      />
      <Route
        exact
        path={PrivateLinks.SearchCountry}
        component={SearchCountries}
        name="SearchCountries"
      />
    </Switch>
  );
};
