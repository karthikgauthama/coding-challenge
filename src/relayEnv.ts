import { Environment, Network, RecordSource, Store } from 'relay-runtime';
// @ts-ignore
import Cookies from 'js-cookie';
import { config } from './config/graphql';

export const TOKEN_NAME = '@socialToken';

function fetchQuery(operation: any, variables: any, cacheConfig?: any, uploadables?: any) {
  const token = Cookies.get(TOKEN_NAME);

  let requestHeaders = { 'Content-Type': 'application/json' };
  let requestBody = JSON.stringify({
    query: operation.text,
    variables,
  });

  if (uploadables) {
    if (!window.FormData) {
      throw new Error('Uploading files without `FormData` not supported.');
    }

    const formData = new FormData();

    formData.append('query', operation.text);
    formData.append('variables', JSON.stringify(variables));

    Object.keys(uploadables).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
        formData.append(key, uploadables[key]);
      }
    });

    // @ts-ignore
    requestHeaders = {};

    // @ts-ignore
    requestBody = formData;
  }

  return fetch(config.graphql, {
    method: 'POST',
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...requestHeaders,
    },
    body: requestBody,
  }).then(async (response) => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
