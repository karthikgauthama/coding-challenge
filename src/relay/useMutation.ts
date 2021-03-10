import React from 'react';
import { commitMutation } from 'react-relay';
import environment from '../relayEnv';

type MutationConfig = {
  variables: any;
  uploadables?: any;
  onCompleted?: any;
  onError?: any;
};

export const useMutation = (mutation: any) => {
  const [loading, setLoading] = React.useState(false);

  const submit: any = ({ variables, uploadables, onCompleted, onError }: MutationConfig) => {
    setLoading(true);

    commitMutation(environment, {
      mutation,
      variables,
      ...(uploadables ? { uploadables } : {}),
      onCompleted: (...args) => {
        setLoading(false);

        if (typeof onCompleted === 'function') {
          onCompleted(...args);
        }
      },
      onError: (...args) => {
        setLoading(false);

        if (typeof onError === 'function') {
          onError(...args);
        }
      },
    });
  };
  return [submit, loading];
};
