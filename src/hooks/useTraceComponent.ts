// @ts-ignore
import React from 'react';

export const useTraceUpdate = (props: any) => {
  const prev = React.useRef(props);
  React.useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps: any, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log('bbb trace Changed props:', changedProps);
    }
    prev.current = props;
  });
};
