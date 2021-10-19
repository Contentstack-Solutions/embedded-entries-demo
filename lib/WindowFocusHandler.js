import React, { useEffect } from 'react';

// User has switched back to the tab
const onFocus = () => {
  console.log('Tab is in focus');
};

const WindowFocusHandler = () => {
  useEffect(() => {
    window.addEventListener('focus', onFocus);

    return () => {
      window.removeEventListener('focus', onFocus);
    };
  });
  return <></>;
};

export default WindowFocusHandler;