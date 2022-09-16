export const getTheme: any = (prefersDarkMode: string): any => ({
  palette: {
    type: prefersDarkMode ? 'dark' : 'light',
    primary: {
      light: '#000000 32%',
      main: '#181818',
      dark: '#000000 87%',
    },

    default: {
      light: '#fff 87%',
      main: '#fff',
      dark: '#fff',
    },

    background: {
      default: '#000',
    },

    text: {
      primary: '#fff',
      secondarty: 'rgba(255, 255, 255, 0.7)',
    },
  },
  overrides: {
    MuiDrawer: {
      paper: {
        // backgroundColor: '#181818',
      },
    },

    MuiPaper: {
      root: {
        // backgroundColor: '#121212',
      },
    },

    MuiFormLabel: {
      root: {
        // color: '#fff',
        '&$focused': {
          // color: '#fff',
        },
      },
    },

    MuiTableCell: {
      root: {
        // borderBottom: '1px solid #121212',
      },
      head: {
        // borderBottom: '1px solid #121212',
      },
    },

    MuiCircularProgress: {
      colorPrimary: {
        // color: '#0096dc',
      },
    },

    MuiInput: {
      underline: {
        '&$disabled': {
          fontFamily: 'Roboto',
          fontSize: 16,
          fontWeight: 'normal',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 1.5,
          letterSpacing: 0.15,
          color: 'rgba(255, 255, 255, 0.6)',
          '&:before': {
            borderBottom: '1px solid rgba(255, 255, 255, 0.38);',
          },
        },
        '&:before': {
          borderBottom: '2px solid rgba(255, 255, 255, 0.12)'
        },
        '&:after': {
          borderBottom: '2px solid rgba(255, 255, 255, 0.12)'
        }
      },
    },

    MuiCheckbox: {
      root: {
        // color: '#e0e0e1',
        // '&$checked': { color: '#e0e0e1' },
      },
      colorSecondary: {
        // '&$checked': { color: '#e0e0e1' },
        '&$disabled': {
          color: '#e0e0e1',
          cursor: 'not-allowed',
          pointerEvents: 'none',
        },
      },
    },

    MuiSwitch: {
      colorSecondary: {
        '&$disabled': {
          color: '#000',
          '& + $track': {
            backgroundColor: '#a5a4a7',
            opacity: 1,
            border: '1px solid #9e9e9e',
            cursor: 'not-allowed',
          },
        },
      },
    },

    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
      },
    },

    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
      },
      label: {
        '&$disabled': {
          color: 'rgba(255, 255, 255, 0.6)',
        }
      }
    },

    MuiTypography: {
      colorPrimary: {
        color: 'rgba(255, 255, 255, 0.6)',
      }
    },

    MuiButton: {
      containedPrimary: {
        // backgroundColor: '#0096dc',
        // color: '#fff',
        
        '&:hover': {
          // backgroundColor: 'rgb(232, 236, 245)',
          // color: '#000',
        }
      },

      containedSecondary: {
        // backgroundColor: '#000000',
        // color: '#0096dc',
        // border: '1px solid rgba(255, 255, 255, 0.12)',

        '&:hover': {
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.6)'
        }
      },

      contained: {
        '&$disabled': {
          // backgroundColor: 'rgba(0, 150, 220, 0.7)',
          // color: 'rgba(255, 255, 255, 0.8)'
        }
      }
    },

    MuiIconButton: {
      root: {
        // color: '#0096dc',
      }
    },

    MuiDivider: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.07)'
      }
    },

    MuiSelect: {
      icon: {
        color: 'rgba(255, 255, 255, 0.6)'
      },

      select: {
        '&:not([multiple]) option': {
          backgroundColor: '#2c2c31',
          '&:checked': {
            backgroundColor: '#red',
          }
        }
      },

      selectMenu: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.43',
        letterSpacing: '0.25px',
        color: 'rgba(255, 255, 255, 0.87)'
      }
    },
    
    MuiPopover: {
      paper: {
        background: '#2c2c31',
      }
    },

    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.12)'
        }
      }
    },

    MuiMenuItem: {
      root: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.43',
        letterSpacing: '0.25px',
        color: 'rgba(255, 255, 255, 0.87)'
      }
    }
  },
});


/* MuiOutlinedInput: {
      root: {
        borderColor: 'rgba(255, 255, 255, 0.38) !important',

        '&$focused': {
          borderColor: 'rgba(255, 255, 255, 0.75)',
        }
      },

      notchedOutline: {
        borderColor: 'rgba(255, 255, 255, 0.38)',
      },
      focused: {}
    } */
