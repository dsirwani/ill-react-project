import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    viewBar: {
      display: 'flex',
      flexDirection: 'row-reverse',
      margin: theme.spacing(3, 5),
    },

    svgIcon: {
      margin: theme.spacing(0, 1),
    },

    svgActive: {
      cursor: 'pointer',
      filter:
        'invert(39%) sepia(45%) saturate(1807%) hue-rotate(168deg) brightness(104%) contrast(102%)',
    },

    svgNotActive: {
      cursor: 'pointer',
    },

    noAccountsDisplay: {
      margin: theme.spacing(1, 7),
    },
  })
);