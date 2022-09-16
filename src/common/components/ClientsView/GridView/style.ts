import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const cardTitleHeight = 92;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContent: {
      display: 'flex',
      flexFlow: 'wrap',
      marginLeft: '2%',
    },

    root: {
      minHeight: 150,
      height: '24.4%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4,
      // background: '#27272d',
      [theme.breakpoints.up('xs')]: {
        width: '100%',
        margin: 24,
        maxWidth: '280px',
      },
      [theme.breakpoints.up('md')]: {
        width: '100%',
        margin: 24,
        maxWidth: '345px',
      },
    },

    cardHeaderRoot: {
      height: cardTitleHeight,
      padding: theme.spacing(3),
    },

    cardAvatar: {
      width: 44,
      height: 44,
      flex: '0 0 auto',
      marginRight: '16px',
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

    cardContent: {
      minHeight: 152,
      height: `calc(100% - ${cardTitleHeight}px)`,
      padding: theme.spacing(3),
      display: 'flex',
      alignItems: 'center',
    },

    cursorPointer: {
      cursor: 'pointer',
    },
  })
);