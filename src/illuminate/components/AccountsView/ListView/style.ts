import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },

    valuesFontSize: {
      // fontSize: '16px !important',
    },

    paper: {
      width: '100%',
      // background: '#000',
    },

    table: {
      minWidth: 750,
      borderCollapse: 'collapse'
    },

    tableRow: {
      '&:hover': {
        // backgroundColor: '#182A37 !important',
      },
    },

    accNameCell: {
      cursor: 'pointer',
      position: 'sticky',
      background: theme.palette.type == 'dark' ? '#282C34' : '#fff',
      left: 0,
      // zIndex: theme.zIndex.appBar + 2,

      '&:hover': {
        background: theme.palette.type == 'dark' ? '#30343C' : '#F5F5F5',
      },
    },

    container: {
      // background: '#272727',
    },

    headerBootomBorder: {
      // borderBottom: '1px solid #272727',
    },

    deniedPendingCell: {
      // border: '1px dashed #fff',
    },

    thumbnailIcon: {
      display: 'flex',
      alignItems: 'center',
    },

    titleBorder: {
      // borderBottom: '1px solid #272727',
    },

    tableCellRoot: {
      padding: theme.spacing(1.5),
      whiteSpace: 'nowrap',
    },
  })
);
