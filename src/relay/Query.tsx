import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../relayEnv';

type Props = {
  query: any;
  variables?: any;
  children: (props: any) => React.ReactNode;
};
export const Query: React.FC<Props> = (props) => {
  if (typeof props.children !== 'function') {
    throw new Error('Expected single react node as a child of Query component');
  }

  return (
    <QueryRenderer
      environment={environment}
      query={props.query}
      variables={props.variables || {}}
      render={(res) => {
        const { error, props: renderProps } = res;

        if (error) {
          console.log('<Query> error:', { error });

          return <div>Error!</div>;
        }

        if (!props) {
          return <div>Loading...</div>;
        }

        return props.children({
          data: renderProps,
          error,
          loading: !error && !props,
        });
      }}
    />
  );
};
