import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const GridIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          id="prefix__1"
          d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 18H2v-4h4v4zm0-6H2V8h4v4zm0-6H2V2h4v4zm6 12H8v-4h4v4zm0-6H8V8h4v4zm0-6H8V2h4v4zm6 12h-4v-4h4v4zm0-6h-4V8h4v4zm0-6h-4V2h4v4z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <mask id="prefix__2" fill="#fff">
          <use xlinkHref="#prefix__1" />
        </mask>
        <g fill="#4a4a4f" mask="url(#prefix__2)">
          <path d="M0 0H24V24H0z" transform="translate(-2 -2)" />
        </g>
      </g>
    </SvgIcon>
  );
};

export default GridIcon;
