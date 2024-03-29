import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.png"
      style={{width: '80px'}}
      {...props}
    />
  );
};

export default Logo;
