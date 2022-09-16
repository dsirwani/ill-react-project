import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const ListIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <defs>
        <path
          id="prefix__a"
          d="M2 6.5C1.17 6.5.5 7.17.5 8S1.17 9.5 2 9.5 3.5 8.83 3.5 8 2.83 6.5 2 6.5zm0-6C1.17.5.5 1.17.5 2S1.17 3.5 2 3.5 3.5 2.83 3.5 2 2.83.5 2 .5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM5 15h14v-2H5v2zm0-6h14V7H5v2zm0-8v2h14V1H5z"
        />
        <path id="prefix__c" d="M0 0H24V24H0z" />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(2 4)">
        <mask id="prefix__b" fill="#fff">
          <use xlinkHref="#prefix__a" />
        </mask>
        <g mask="url(#prefix__b)">
          <g transform="translate(-2 -4)">
            <use fill="#1C1C22" xlinkHref="#prefix__c" />
            <use fill="#FFF" fillOpacity=".2" xlinkHref="#prefix__c" />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

export default ListIcon;
