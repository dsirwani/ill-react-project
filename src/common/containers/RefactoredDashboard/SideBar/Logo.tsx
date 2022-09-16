import React, { FC } from 'react';
import { useStyles } from './style';
interface LogoProps {
  [key: string]: any;
  clientlogo:any;
}

const Logo: FC<LogoProps> = (props) => {
  const classes = useStyles();
  return (
    <img
      className={classes.logoImage}
      alt="Logo"
      src={props.clientlogo}
      {...props}
    />
  );
}

export default Logo;
