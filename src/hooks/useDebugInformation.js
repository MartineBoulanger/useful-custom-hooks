import { useEffect, useRef } from 'react';
import { useRenderCount } from './useRenderCount';

export const useDebugInformation = (component, props) => {
  const count = useRenderCount();
  const changedProps = useRef({});
  const prevProps = useRef(props);
  const timestampLastRender = useRef(Date.now());
  const propKeys = Object.keys({ ...props, ...prevProps });

  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === prevProps.current[key]) return obj;
    return {
      ...obj,
      [key]: { previous: prevProps.current[key], current: props[key] },
    };
  }, {});

  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - timestampLastRender.current,
    lastRenderTimestamp: timestampLastRender.current,
  };

  useEffect(() => {
    prevProps.current = props;
    timestampLastRender.current = Date.now();
    console.log('[debug-info]', component, info);
  });

  return info;
};
