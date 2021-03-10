/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type _CountryFilter = {
  AND?: Array<_CountryFilter> | null;
  OR?: Array<_CountryFilter> | null;
  alpha2Code?: string | null;
  alpha2Code_not?: string | null;
  alpha2Code_in?: Array<string> | null;
  alpha2Code_not_in?: Array<string> | null;
  alpha2Code_contains?: string | null;
  alpha2Code_not_contains?: string | null;
  alpha2Code_starts_with?: string | null;
  alpha2Code_not_starts_with?: string | null;
  alpha2Code_ends_with?: string | null;
  alpha2Code_not_ends_with?: string | null;
  alpha3Code?: string | null;
  alpha3Code_not?: string | null;
  alpha3Code_in?: Array<string> | null;
  alpha3Code_not_in?: Array<string> | null;
  alpha3Code_contains?: string | null;
  alpha3Code_not_contains?: string | null;
  alpha3Code_starts_with?: string | null;
  alpha3Code_not_starts_with?: string | null;
  alpha3Code_ends_with?: string | null;
  alpha3Code_not_ends_with?: string | null;
  area?: number | null;
  area_not?: number | null;
  area_in?: Array<number> | null;
  area_not_in?: Array<number> | null;
  area_lt?: number | null;
  area_lte?: number | null;
  area_gt?: number | null;
  area_gte?: number | null;
  capital?: string | null;
  capital_not?: string | null;
  capital_in?: Array<string> | null;
  capital_not_in?: Array<string> | null;
  capital_contains?: string | null;
  capital_not_contains?: string | null;
  capital_starts_with?: string | null;
  capital_not_starts_with?: string | null;
  capital_ends_with?: string | null;
  capital_not_ends_with?: string | null;
  demonym?: string | null;
  demonym_not?: string | null;
  demonym_in?: Array<string> | null;
  demonym_not_in?: Array<string> | null;
  demonym_contains?: string | null;
  demonym_not_contains?: string | null;
  demonym_starts_with?: string | null;
  demonym_not_starts_with?: string | null;
  demonym_ends_with?: string | null;
  demonym_not_ends_with?: string | null;
  gini?: number | null;
  gini_not?: number | null;
  gini_in?: Array<number> | null;
  gini_not_in?: Array<number> | null;
  gini_lt?: number | null;
  gini_lte?: number | null;
  gini_gt?: number | null;
  gini_gte?: number | null;
  location?: _Neo4jPointInput | null;
  location_not?: _Neo4jPointInput | null;
  location_distance?: _Neo4jPointDistanceFilter | null;
  location_distance_lt?: _Neo4jPointDistanceFilter | null;
  location_distance_lte?: _Neo4jPointDistanceFilter | null;
  location_distance_gt?: _Neo4jPointDistanceFilter | null;
  location_distance_gte?: _Neo4jPointDistanceFilter | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: Array<string> | null;
  name_not_in?: Array<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  nameTranslations?: _TranslationFilter | null;
  nameTranslations_not?: _TranslationFilter | null;
  nameTranslations_in?: Array<_TranslationFilter> | null;
  nameTranslations_not_in?: Array<_TranslationFilter> | null;
  nameTranslations_some?: _TranslationFilter | null;
  nameTranslations_none?: _TranslationFilter | null;
  nameTranslations_single?: _TranslationFilter | null;
  nameTranslations_every?: _TranslationFilter | null;
  nativeName?: string | null;
  nativeName_not?: string | null;
  nativeName_in?: Array<string> | null;
  nativeName_not_in?: Array<string> | null;
  nativeName_contains?: string | null;
  nativeName_not_contains?: string | null;
  nativeName_starts_with?: string | null;
  nativeName_not_starts_with?: string | null;
  nativeName_ends_with?: string | null;
  nativeName_not_ends_with?: string | null;
  numericCode?: string | null;
  numericCode_not?: string | null;
  numericCode_in?: Array<string> | null;
  numericCode_not_in?: Array<string> | null;
  numericCode_contains?: string | null;
  numericCode_not_contains?: string | null;
  numericCode_starts_with?: string | null;
  numericCode_not_starts_with?: string | null;
  numericCode_ends_with?: string | null;
  numericCode_not_ends_with?: string | null;
  population?: number | null;
  population_not?: number | null;
  population_in?: Array<number> | null;
  population_not_in?: Array<number> | null;
  population_lt?: number | null;
  population_lte?: number | null;
  population_gt?: number | null;
  population_gte?: number | null;
  topLevelDomains?: _TopLevelDomainFilter | null;
  topLevelDomains_not?: _TopLevelDomainFilter | null;
  topLevelDomains_in?: Array<_TopLevelDomainFilter> | null;
  topLevelDomains_not_in?: Array<_TopLevelDomainFilter> | null;
  topLevelDomains_some?: _TopLevelDomainFilter | null;
  topLevelDomains_none?: _TopLevelDomainFilter | null;
  topLevelDomains_single?: _TopLevelDomainFilter | null;
  topLevelDomains_every?: _TopLevelDomainFilter | null;
  callingCodes?: _CallingCodeFilter | null;
  callingCodes_not?: _CallingCodeFilter | null;
  callingCodes_in?: Array<_CallingCodeFilter> | null;
  callingCodes_not_in?: Array<_CallingCodeFilter> | null;
  callingCodes_some?: _CallingCodeFilter | null;
  callingCodes_none?: _CallingCodeFilter | null;
  callingCodes_single?: _CallingCodeFilter | null;
  callingCodes_every?: _CallingCodeFilter | null;
  timezones?: _TimezoneFilter | null;
  timezones_not?: _TimezoneFilter | null;
  timezones_in?: Array<_TimezoneFilter> | null;
  timezones_not_in?: Array<_TimezoneFilter> | null;
  timezones_some?: _TimezoneFilter | null;
  timezones_none?: _TimezoneFilter | null;
  timezones_single?: _TimezoneFilter | null;
  timezones_every?: _TimezoneFilter | null;
  borders?: _CountryFilter | null;
  borders_not?: _CountryFilter | null;
  borders_in?: Array<_CountryFilter> | null;
  borders_not_in?: Array<_CountryFilter> | null;
  borders_some?: _CountryFilter | null;
  borders_none?: _CountryFilter | null;
  borders_single?: _CountryFilter | null;
  borders_every?: _CountryFilter | null;
  subregion?: _SubregionFilter | null;
  subregion_not?: _SubregionFilter | null;
  subregion_in?: Array<_SubregionFilter> | null;
  subregion_not_in?: Array<_SubregionFilter> | null;
  officialLanguages?: _LanguageFilter | null;
  officialLanguages_not?: _LanguageFilter | null;
  officialLanguages_in?: Array<_LanguageFilter> | null;
  officialLanguages_not_in?: Array<_LanguageFilter> | null;
  officialLanguages_some?: _LanguageFilter | null;
  officialLanguages_none?: _LanguageFilter | null;
  officialLanguages_single?: _LanguageFilter | null;
  officialLanguages_every?: _LanguageFilter | null;
  currencies?: _CurrencyFilter | null;
  currencies_not?: _CurrencyFilter | null;
  currencies_in?: Array<_CurrencyFilter> | null;
  currencies_not_in?: Array<_CurrencyFilter> | null;
  currencies_some?: _CurrencyFilter | null;
  currencies_none?: _CurrencyFilter | null;
  currencies_single?: _CurrencyFilter | null;
  currencies_every?: _CurrencyFilter | null;
  regionalBlocs?: _RegionalBlocFilter | null;
  regionalBlocs_not?: _RegionalBlocFilter | null;
  regionalBlocs_in?: Array<_RegionalBlocFilter> | null;
  regionalBlocs_not_in?: Array<_RegionalBlocFilter> | null;
  regionalBlocs_some?: _RegionalBlocFilter | null;
  regionalBlocs_none?: _RegionalBlocFilter | null;
  regionalBlocs_single?: _RegionalBlocFilter | null;
  regionalBlocs_every?: _RegionalBlocFilter | null;
  flag?: _FlagFilter | null;
  flag_not?: _FlagFilter | null;
  flag_in?: Array<_FlagFilter> | null;
  flag_not_in?: Array<_FlagFilter> | null;
  distanceToOtherCountries?: _DistanceToOtherCountryFilter | null;
  distanceToOtherCountries_not?: _DistanceToOtherCountryFilter | null;
  distanceToOtherCountries_in?: Array<_DistanceToOtherCountryFilter> | null;
  distanceToOtherCountries_not_in?: Array<_DistanceToOtherCountryFilter> | null;
  distanceToOtherCountries_some?: _DistanceToOtherCountryFilter | null;
  distanceToOtherCountries_none?: _DistanceToOtherCountryFilter | null;
  distanceToOtherCountries_single?: _DistanceToOtherCountryFilter | null;
  distanceToOtherCountries_every?: _DistanceToOtherCountryFilter | null;
  shortestPathToOtherCountry?: _CountryFilter | null;
  shortestPathToOtherCountry_not?: _CountryFilter | null;
  shortestPathToOtherCountry_in?: Array<_CountryFilter> | null;
  shortestPathToOtherCountry_not_in?: Array<_CountryFilter> | null;
  shortestPathToOtherCountry_some?: _CountryFilter | null;
  shortestPathToOtherCountry_none?: _CountryFilter | null;
  shortestPathToOtherCountry_single?: _CountryFilter | null;
  shortestPathToOtherCountry_every?: _CountryFilter | null;
};
export type _Neo4jPointInput = {
  x?: number | null;
  y?: number | null;
  z?: number | null;
  longitude?: number | null;
  latitude?: number | null;
  height?: number | null;
  crs?: string | null;
  srid?: number | null;
};
export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: number;
};
export type _TranslationFilter = {
  AND?: Array<_TranslationFilter> | null;
  OR?: Array<_TranslationFilter> | null;
  languageCode?: string | null;
  languageCode_not?: string | null;
  languageCode_in?: Array<string> | null;
  languageCode_not_in?: Array<string> | null;
  languageCode_contains?: string | null;
  languageCode_not_contains?: string | null;
  languageCode_starts_with?: string | null;
  languageCode_not_starts_with?: string | null;
  languageCode_ends_with?: string | null;
  languageCode_not_ends_with?: string | null;
  value?: string | null;
  value_not?: string | null;
  value_in?: Array<string> | null;
  value_not_in?: Array<string> | null;
  value_contains?: string | null;
  value_not_contains?: string | null;
  value_starts_with?: string | null;
  value_not_starts_with?: string | null;
  value_ends_with?: string | null;
  value_not_ends_with?: string | null;
};
export type _TopLevelDomainFilter = {
  AND?: Array<_TopLevelDomainFilter> | null;
  OR?: Array<_TopLevelDomainFilter> | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: Array<string> | null;
  name_not_in?: Array<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  countries?: _CountryFilter | null;
  countries_not?: _CountryFilter | null;
  countries_in?: Array<_CountryFilter> | null;
  countries_not_in?: Array<_CountryFilter> | null;
  countries_some?: _CountryFilter | null;
  countries_none?: _CountryFilter | null;
  countries_single?: _CountryFilter | null;
  countries_every?: _CountryFilter | null;
};
export type _CallingCodeFilter = {
  AND?: Array<_CallingCodeFilter> | null;
  OR?: Array<_CallingCodeFilter> | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: Array<string> | null;
  name_not_in?: Array<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  countries?: _CountryFilter | null;
  countries_not?: _CountryFilter | null;
  countries_in?: Array<_CountryFilter> | null;
  countries_not_in?: Array<_CountryFilter> | null;
  countries_some?: _CountryFilter | null;
  countries_none?: _CountryFilter | null;
  countries_single?: _CountryFilter | null;
  countries_every?: _CountryFilter | null;
};
export type _TimezoneFilter = {
  AND?: Array<_TimezoneFilter> | null;
  OR?: Array<_TimezoneFilter> | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: Array<string> | null;
  name_not_in?: Array<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  countries?: _CountryFilter | null;
  countries_not?: _CountryFilter | null;
  countries_in?: Array<_CountryFilter> | null;
  countries_not_in?: Array<_CountryFilter> | null;
  countries_some?: _CountryFilter | null;
  countries_none?: _CountryFilter | null;
  countries_single?: _CountryFilter | null;
  countries_every?: _CountryFilter | null;
};
export type _SubregionFilter = {
  AND?: Array<_SubregionFilter> | null;
  OR?: Array<_SubregionFilter> | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: Array<string> | null;
  name_not_in?: Array<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  region?: _RegionFilter | null;
  region_not?: _RegionFilter | null;
  region_in?: Array<_RegionFilter> | null;
  region_not_in?: Array<_RegionFilter> | null;
  countries?: _CountryFilter | null;
  countries_not?: _CountryFilter | null;
  countries_in?: Array<_CountryFilter> | null;
  countries_not_in?: Array<_CountryFilter> | null;
  countries_some?: _CountryFilter | null;
  countries_none?: _CountryFilter | null;
  countries_single?: _CountryFilter | null;
  countries_every?: _CountryFilter | null;
};
export type _RegionFilter = {
  AND?: Array<_RegionFilter> | null;
  OR?: Array<_RegionFilter> | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: Array<string> | null;
  name_not_in?: Array<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  subregions?: _SubregionFilter | null;
  subregions_not?: _SubregionFilter | null;
  subregions_in?: Array<_SubregionFilter> | null;
  subregions_not_in?: Array<_SubregionFilter> | null;
  subregions_some?: _SubregionFilter | null;
  subregions_none?: _SubregionFilter | null;
  subregions_single?: _SubregionFilter | null;
  subregions_every?: _SubregionFilter | null;
};
export type _LanguageFilter = {
  AND?: Array<_LanguageFilter> | null;
  OR?: Array<_LanguageFilter> | null;
  iso639_1?: string | null;
  iso639_1_not?: string | null;
  iso639_1_in?: Array<string> | null;
  iso639_1_not_in?: Array<string> | null;
  iso639_1_contains?: string | null;
  iso639_1_not_contains?: string | null;
  iso639_1_starts_with?: string | null;
  iso639_1_not_starts_with?: string | null;
  iso639_1_ends_with?: string | null;
  iso639_1_not_ends_with?: string | null;
  iso639_2?: string | null;
  iso639_2_not?: string | null;
  iso639_2_in?: Array<string> | null;
  iso639_2_not_in?: Array<string> | null;
  iso639_2_contains?: string | null;
  iso639_2_not_contains?: string | null;
  iso639_2_starts_with?: string | null;
  iso639_2_not_starts_with?: string | null;
  iso639_2_ends_with?: string | null;
  iso639_2_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: Array<string> | null;
  name_not_in?: Array<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  nativeName?: string | null;
  nativeName_not?: string | null;
  nativeName_in?: Array<string> | null;
  nativeName_not_in?: Array<string> | null;
  nativeName_contains?: string | null;
  nativeName_not_contains?: string | null;
  nativeName_starts_with?: string | null;
  nativeName_not_starts_with?: string | null;
  nativeName_ends_with?: string | null;
  nativeName_not_ends_with?: string | null;
  countries?: _CountryFilter | null;
  countries_not?: _CountryFilter | null;
  countries_in?: Array<_CountryFilter> | null;
  countries_not_in?: Array<_CountryFilter> | null;
  countries_some?: _CountryFilter | null;
  countries_none?: _CountryFilter | null;
  countries_single?: _CountryFilter | null;
  countries_every?: _CountryFilter | null;
};
export type _CurrencyFilter = {
  AND?: Array<_CurrencyFilter> | null;
  OR?: Array<_CurrencyFilter> | null;
  code?: string | null;
  code_not?: string | null;
  code_in?: Array<string> | null;
  code_not_in?: Array<string> | null;
  code_contains?: string | null;
  code_not_contains?: string | null;
  code_starts_with?: string | null;
  code_not_starts_with?: string | null;
  code_ends_with?: string | null;
  code_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: Array<string> | null;
  name_not_in?: Array<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  symbol?: string | null;
  symbol_not?: string | null;
  symbol_in?: Array<string> | null;
  symbol_not_in?: Array<string> | null;
  symbol_contains?: string | null;
  symbol_not_contains?: string | null;
  symbol_starts_with?: string | null;
  symbol_not_starts_with?: string | null;
  symbol_ends_with?: string | null;
  symbol_not_ends_with?: string | null;
  countries?: _CountryFilter | null;
  countries_not?: _CountryFilter | null;
  countries_in?: Array<_CountryFilter> | null;
  countries_not_in?: Array<_CountryFilter> | null;
  countries_some?: _CountryFilter | null;
  countries_none?: _CountryFilter | null;
  countries_single?: _CountryFilter | null;
  countries_every?: _CountryFilter | null;
};
export type _RegionalBlocFilter = {
  AND?: Array<_RegionalBlocFilter> | null;
  OR?: Array<_RegionalBlocFilter> | null;
  acronym?: string | null;
  acronym_not?: string | null;
  acronym_in?: Array<string> | null;
  acronym_not_in?: Array<string> | null;
  acronym_contains?: string | null;
  acronym_not_contains?: string | null;
  acronym_starts_with?: string | null;
  acronym_not_starts_with?: string | null;
  acronym_ends_with?: string | null;
  acronym_not_ends_with?: string | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: Array<string> | null;
  name_not_in?: Array<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  countries?: _CountryFilter | null;
  countries_not?: _CountryFilter | null;
  countries_in?: Array<_CountryFilter> | null;
  countries_not_in?: Array<_CountryFilter> | null;
  countries_some?: _CountryFilter | null;
  countries_none?: _CountryFilter | null;
  countries_single?: _CountryFilter | null;
  countries_every?: _CountryFilter | null;
};
export type _FlagFilter = {
  AND?: Array<_FlagFilter> | null;
  OR?: Array<_FlagFilter> | null;
  emoji?: string | null;
  emoji_not?: string | null;
  emoji_in?: Array<string> | null;
  emoji_not_in?: Array<string> | null;
  emoji_contains?: string | null;
  emoji_not_contains?: string | null;
  emoji_starts_with?: string | null;
  emoji_not_starts_with?: string | null;
  emoji_ends_with?: string | null;
  emoji_not_ends_with?: string | null;
  emojiUnicode?: string | null;
  emojiUnicode_not?: string | null;
  emojiUnicode_in?: Array<string> | null;
  emojiUnicode_not_in?: Array<string> | null;
  emojiUnicode_contains?: string | null;
  emojiUnicode_not_contains?: string | null;
  emojiUnicode_starts_with?: string | null;
  emojiUnicode_not_starts_with?: string | null;
  emojiUnicode_ends_with?: string | null;
  emojiUnicode_not_ends_with?: string | null;
  svgFile?: string | null;
  svgFile_not?: string | null;
  svgFile_in?: Array<string> | null;
  svgFile_not_in?: Array<string> | null;
  svgFile_contains?: string | null;
  svgFile_not_contains?: string | null;
  svgFile_starts_with?: string | null;
  svgFile_not_starts_with?: string | null;
  svgFile_ends_with?: string | null;
  svgFile_not_ends_with?: string | null;
  country?: _CountryFilter | null;
  country_not?: _CountryFilter | null;
  country_in?: Array<_CountryFilter> | null;
  country_not_in?: Array<_CountryFilter> | null;
};
export type _DistanceToOtherCountryFilter = {
  AND?: Array<_DistanceToOtherCountryFilter> | null;
  OR?: Array<_DistanceToOtherCountryFilter> | null;
  distanceInKm?: number | null;
  distanceInKm_not?: number | null;
  distanceInKm_in?: Array<number> | null;
  distanceInKm_not_in?: Array<number> | null;
  distanceInKm_lt?: number | null;
  distanceInKm_lte?: number | null;
  distanceInKm_gt?: number | null;
  distanceInKm_gte?: number | null;
  countryName?: string | null;
  countryName_not?: string | null;
  countryName_in?: Array<string> | null;
  countryName_not_in?: Array<string> | null;
  countryName_contains?: string | null;
  countryName_not_contains?: string | null;
  countryName_starts_with?: string | null;
  countryName_not_starts_with?: string | null;
  countryName_ends_with?: string | null;
  countryName_not_ends_with?: string | null;
};
export type SearchCountriesQueryVariables = {
  filter?: _CountryFilter | null;
};
export type SearchCountriesQueryResponse = {
  readonly Country: ReadonlyArray<{
    readonly ' $fragmentRefs': FragmentRefs<'CountryPreviewCard_data'>;
  } | null> | null;
};
export type SearchCountriesQuery = {
  readonly response: SearchCountriesQueryResponse;
  readonly variables: SearchCountriesQueryVariables;
};

/*
query SearchCountriesQuery(
  $filter: _CountryFilter
) {
  Country(filter: $filter) {
    ...CountryPreviewCard_data
  }
}

fragment CountryPreviewCard_data on Country {
  alpha2Code
  flag {
    svgFile
  }
  capital
  population
  name
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'filter',
        type: '_CountryFilter',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'filter',
        variableName: 'filter',
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'SearchCountriesQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'Country',
          kind: 'LinkedField',
          name: 'Country',
          plural: true,
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'CountryPreviewCard_data',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'SearchCountriesQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'Country',
          kind: 'LinkedField',
          name: 'Country',
          plural: true,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'alpha2Code',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'Flag',
              kind: 'LinkedField',
              name: 'flag',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'svgFile',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'capital',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'population',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'name',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      id: null,
      metadata: {},
      name: 'SearchCountriesQuery',
      operationKind: 'query',
      text:
        'query SearchCountriesQuery(\n  $filter: _CountryFilter\n) {\n  Country(filter: $filter) {\n    ...CountryPreviewCard_data\n  }\n}\n\nfragment CountryPreviewCard_data on Country {\n  alpha2Code\n  flag {\n    svgFile\n  }\n  capital\n  population\n  name\n}\n',
    },
  };
})();
(node as any).hash = '93b5d6c28c9554f272da94150ece61da';
export default node;
