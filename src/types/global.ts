export interface PlannedCountry {
  alpha2Code: string;
  name: string;
}

export interface Trip {
  id: string;
  name: string;
  description: string;
  plannedCountries: PlannedCountry[];
  plannedStartDate: string;
}
