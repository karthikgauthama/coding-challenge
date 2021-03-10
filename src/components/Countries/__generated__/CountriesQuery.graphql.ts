/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type CountriesQueryVariables = {
  first?: number | null;
  offset?: number | null;
};
export type CountriesQueryResponse = {
  readonly Country: ReadonlyArray<{
    readonly ' $fragmentRefs': FragmentRefs<'CountryPreviewCard_data'>;
  } | null> | null;
};
export type CountriesQuery = {
  readonly response: CountriesQueryResponse;
  readonly variables: CountriesQueryVariables;
};

/*
query CountriesQuery(
  $first: Int
  $offset: Int
) {
  Country(first: $first, offset: $offset) {
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
        name: 'first',
        type: 'Int',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'offset',
        type: 'Int',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'first',
      },
      {
        kind: 'Variable',
        name: 'offset',
        variableName: 'offset',
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'CountriesQuery',
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
      name: 'CountriesQuery',
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
      name: 'CountriesQuery',
      operationKind: 'query',
      text:
        'query CountriesQuery(\n  $first: Int\n  $offset: Int\n) {\n  Country(first: $first, offset: $offset) {\n    ...CountryPreviewCard_data\n  }\n}\n\nfragment CountryPreviewCard_data on Country {\n  alpha2Code\n  flag {\n    svgFile\n  }\n  capital\n  population\n  name\n}\n',
    },
  };
})();
(node as any).hash = '20f32ef8b528110add940672acb6e430';
export default node;
