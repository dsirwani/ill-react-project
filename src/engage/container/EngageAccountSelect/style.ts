import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const cardTitleHeight = 92;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: 130,
      height: '24.4%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4,
      // background: '#27272d',
      [theme.breakpoints.up('xs')]: {
        width: '100%',
        margin: 24,
        maxWidth: '496px',
      },
      [theme.breakpoints.up('md')]: {
        width: '100%',
        margin: 24,
        maxWidth: '430px',
      },
    },

    cardHeaderRoot: {
      height: cardTitleHeight,
      padding: theme.spacing(3),
    },

    title: {
      fontSize: 14,
    },

    pos: {
      marginBottom: 12,
    },

    cardAvatar: {
      width: 44,
      height: 44,
    },

    cardTitle: {
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 300,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.5,
      letterSpacing: 'normal',
      // color: 'rgba(255, 255, 255, 0.87)',
    },

    /* cardContent: {
      minHeight: 152,
      height: `calc(100% - ${cardTitleHeight}px)`,
      padding: theme.spacing(3),
      display: 'flex',
      alignItems: 'center',
    },
 */
    contentData: {
      width: '25%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    colHeader: {
      fontFamily: 'Roboto',
      fontSize: 12,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.33,
      letterSpacing: 0.4,
      textAlign: 'right',
      // color: 'rgba(255, 255, 255, 0.6)',
    },

    colData: {
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 300,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1.5,
      letterSpacing: 'normal',
      // color: 'rgba(255, 255, 255, 0.87)',
      marginTop: '5%',
    },

    pendingAcc: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },

    cursorPointer: {
      cursor: 'pointer',
    },

    cardHeaderContent: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },

    breadCrumbs: {
      paddingLeft: '20px !important',
      paddingTop: '35px !important',
      paddingBottom: '0px !important'
    },

    noAccountsDisplay: {
      margin: theme.spacing(1, 7),
    },

    engageCards: {
      display: 'flex',
      flexFlow: 'wrap'
    }
  })
);
