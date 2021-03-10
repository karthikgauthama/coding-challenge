import React from 'react';
import { reduxForm } from 'redux-form';

const FormComponent: React.FC<any> = (props) => {
  if (typeof props.children !== 'function') {
    throw new Error('props.children expected to be a function');
  }

  return props.children({
    ...props,
  });
};

export const ReduxFormContainer: any = reduxForm({})(FormComponent);
