import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { useI18n } from '../../../hooks/useI18n';
import { useStyles } from './style';

const Footer: React.FC = () => {
  const classes = useStyles();
  const i18n = useI18n();

  const FOOTER_LINKS = [
    {
      link_url: 'https://ilmvp-public-resources.s3.amazonaws.com/TermsPolicyDoc/Privacy+Statement+2020+10+28.pdf',
      caption: i18n._('PRIVACY STATEMENT')
    },
    {
      link_url: 'https://ilmvp-public-resources.s3.amazonaws.com/TermsPolicyDoc/Cookie+Preference+2020+10+28.pdf',
      caption: i18n._('COOKIE PREFERENCE')
    },
    {
      link_url: 'https://ilmvp-public-resources.s3.amazonaws.com/TermsPolicyDoc/Security+Statement+2020+10+28.pdf',
      caption: i18n._('SECURITY STATEMENT')
    },
    {
      link_url: 'https://ilmvp-public-resources.s3.amazonaws.com/TermsPolicyDoc/Terms+of+Service+2020+10+28.pdf',
      caption: i18n._('TERMS OF SERVICE')
    }
  ]

  return (
    <AppBar color="primary" className={classes.footer}>
      <Typography variant="body2" gutterBottom className={classes.footerContent} >
        &copy; 2020 POLARIS I/0 {i18n._('ALL RIGHTS RESERVED')}
        {FOOTER_LINKS.map((link: any) => {
          return <a style={{ color: '#4A4A4A' }}
            className={classes.footerLinks} href={link.link_url}
            target="_blank">{'  '}{link.caption}
          </a>
        })}
      </Typography>
    </AppBar>
  );
};

export default Footer;
