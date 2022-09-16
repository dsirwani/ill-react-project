import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const CheckboxCheckedIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} width="24" height="24">
      <defs>
        <path
          id="bd42rbqqsa"
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99 8-8z"
        />
        <path id="o791hjjnjc" d="M0 0H24V24H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="89p8igtvkb" fill="#fff">
          <use xlinkHref="#bd42rbqqsa" />
        </mask>
        <g mask="url(#89p8igtvkb)">
          <use fill="#1C1C22" xlinkHref="#o791hjjnjc" />
          <use fill="#FFF" fillOpacity=".87" xlinkHref="#o791hjjnjc" />
        </g>
      </g>
    </SvgIcon>
  );
};

export default CheckboxCheckedIcon;
