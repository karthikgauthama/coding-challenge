/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type CountryDetailsQueryVariables = {
  alpha2Code?: string | null;
};
export type CountryDetailsQueryResponse = {
  readonly Country: ReadonlyArray<{
    readonly flag: {
      readonly svgFile: string;
    } | null;
    readonly name: string;
    readonly officialLanguages: ReadonlyArray<{
      readonly name: string;
    } | null> | null;
    readonly currencies: ReadonlyArray<{
      readonly name: string;
    } | null> | null;
    readonly callingCodes: ReadonlyArray<{
      readonly name: string;
    } | null> | null;
    readonly area: number | null;
    readonly capital: string;
    readonly alternativeSpellings: ReadonlyArray<{
      readonly name: string;
    } | null> | null;
    readonly nativeName: string;
    readonly subregion: {
      readonly name: string;
      readonly region: {
        readonly name: string;
      } | null;
    } | null;
    readonly ' $fragmentRefs': FragmentRefs<'CountryPreviewCard_data'>;
  } | null> | null;
};
export type CountryDetailsQuery = {
  readonly response: CountryDetailsQueryResponse;
  readonly variables: CountryDetailsQueryVariables;
};

/*
query CountryDetailsQuery(
  $alpha2Code: String
) {
  Country(alpha2Code: $alpha2Code) {
    ...CountryPreviewCard_data
    flag {
      svgFile
    }
    name
    officialLanguages {
      name
    }
    currencies {
      name
    }
    callingCodes {
      name
    }
    area
    capital
    alternativeSpellings {
      name
    }
    nativeName
    subregion {
      name
      region {
        name
      }
    }
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
        name: 'alpha2Code',
        type: 'String',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'alpha2Code',
        variableName: 'alpha2Code',
      },
    ],
    v2 = {
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
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'name',
      storageKey: null,
    },
    v4 = [v3 /*: any*/],
    v5 = {
      alias: null,
      args: null,
      concreteType: 'Language',
      kind: 'LinkedField',
      name: 'officialLanguages',
      plural: true,
      selections: v4 /*: any*/,
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      concreteType: 'Currency',
      kind: 'LinkedField',
      name: 'currencies',
      plural: true,
      selections: v4 /*: any*/,
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      concreteType: 'CallingCode',
      kind: 'LinkedField',
      name: 'callingCodes',
      plural: true,
      selections: v4 /*: any*/,
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'area',
      storageKey: null,
    },
    v9 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'capital',
      storageKey: null,
    },
    v10 = {
      alias: null,
      args: null,
      concreteType: 'AlternativeSpelling',
      kind: 'LinkedField',
      name: 'alternativeSpellings',
      plural: true,
      selections: v4 /*: any*/,
      storageKey: null,
    },
    v11 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'nativeName',
      storageKey: null,
    },
    v12 = {
      alias: null,
      args: null,
      concreteType: 'Subregion',
      kind: 'LinkedField',
      name: 'subregion',
      plural: false,
      selections: [
        v3 /*: any*/,
        {
          alias: null,
          args: null,
          concreteType: 'Region',
          kind: 'LinkedField',
          name: 'region',
          plural: false,
          selections: v4 /*: any*/,
          storageKey: null,
        },
      ],
      storageKey: null,
    };
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'CountryDetailsQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'Country',
          kind: 'LinkedField',
          name: 'Country',
          plural: true,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            v5 /*: any*/,
            v6 /*: any*/,
            v7 /*: any*/,
            v8 /*: any*/,
            v9 /*: any*/,
            v10 /*: any*/,
            v11 /*: any*/,
            v12 /*: any*/,
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
      name: 'CountryDetailsQuery',
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
            v2 /*: any*/,
            v9 /*: any*/,
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'population',
              storageKey: null,
            },
            v3 /*: any*/,
            v5 /*: any*/,
            v6 /*: any*/,
            v7 /*: any*/,
            v8 /*: any*/,
            v10 /*: any*/,
            v11 /*: any*/,
            v12 /*: any*/,
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      id: null,
      metadata: {},
      name: 'CountryDetailsQuery',
      operationKind: 'query',
      text:
        'query CountryDetailsQuery(\n  $alpha2Code: String\n) {\n  Country(alpha2Code: $alpha2Code) {\n    ...CountryPreviewCard_data\n    flag {\n      svgFile\n    }\n    name\n    officialLanguages {\n      name\n    }\n    currencies {\n      name\n    }\n    callingCodes {\n      name\n    }\n    area\n    capital\n    alternativeSpellings {\n      name\n    }\n    nativeName\n    subregion {\n      name\n      region {\n        name\n      }\n    }\n  }\n}\n\nfragment CountryPreviewCard_data on Country {\n  alpha2Code\n  flag {\n    svgFile\n  }\n  capital\n  population\n  name\n}\n',
    },
  };
})();
(node as any).hash = 'b6f35080f5bac51089f3f57699d1856c';
export default node;
