/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type CountryPreviewCard_data = {
  readonly alpha2Code: string;
  readonly flag: {
    readonly svgFile: string;
  } | null;
  readonly capital: string;
  readonly population: number;
  readonly name: string;
  readonly ' $refType': 'CountryPreviewCard_data';
};
export type CountryPreviewCard_data$data = CountryPreviewCard_data;
export type CountryPreviewCard_data$key = {
  readonly ' $data'?: CountryPreviewCard_data$data;
  readonly ' $fragmentRefs': FragmentRefs<'CountryPreviewCard_data'>;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'CountryPreviewCard_data',
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
  type: 'Country',
};
(node as any).hash = '0b0e1bdf217c0120dc62372a1a93a0d0';
export default node;
