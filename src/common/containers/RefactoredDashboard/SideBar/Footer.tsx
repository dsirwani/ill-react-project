import React from 'react';
import { FC } from 'react';
import { Box, Typography, Divider, Link } from '@material-ui/core';
import { useI18n } from '../../../../hooks/useI18n';
import { FOOTER_LINKS } from './constant';

interface FooterProps {};

const Footer: FC<FooterProps> = (props) => {
  const i18n = useI18n();
  return (
  <>
  {/* <Box p={2}>
    <Box
      p={2}
      borderRadius="borderRadius"
      bgcolor="background.dark"
    >
      <Typography
        variant="h6"
        color="textPrimary"
      >
        Need help?
        </Typography>
      <Link
        variant="subtitle1"
        color="secondary"

      >
        Check our documentation
        </Link>
    </Box>
  </Box> */}
  <Divider />
  <Box p={2}>
    <Box
      p={2}
      borderRadius="borderRadius"
      bgcolor="background.dark"
    >
      <Typography variant="subtitle1"
        color="textPrimary" gutterBottom style={{ 'whiteSpace': 'initial' }}>
        &copy; 2020 POLARIS I/0 {i18n._('ALL RIGHTS RESERVED')}
        {FOOTER_LINKS.map((link: any) => {
          return <Link
            key={link.caption}
            style={{ 'cursor': "pointer" }}
            variant="subtitle1"
            color="textPrimary"
            onClick={() => window.open(link.link_url, '_blank')}
          >
            {' | '}{i18n._(link.caption)}
          </Link>
        })}
      </Typography>
    </Box>
  </Box>
  </>
  );
}

export default Footer;