import React from 'react';
import './App.css';
import { PrivateRoutes, PublicRoutes } from '../../components/Routing';
import { Box } from '../../ui-library/layout';
import { HeaderComponent } from '../../components/HeaderComponent';
import { TripPlanningForm } from '../../components/TripPlanningForm';

export const App: React.FC = () => {
  return (
    <Box>
      <HeaderComponent />
      <PublicRoutes />
      <PrivateRoutes />
      <TripPlanningForm />
    </Box>
  );
};

export default App;
