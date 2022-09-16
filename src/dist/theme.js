"use strict";
exports.__esModule = true;
exports.getTheme = void 0;
exports.getTheme = function (prefersDarkMode) { return ({
    palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: {
            light: '#000000 32%',
            main: '#181818',
            dark: '#000000 87%'
        },
        "default": {
            light: '#fff 87%',
            main: '#fff',
            dark: '#fff'
        },
        background: {
            "default": '#000'
        },
        text: {
            primary: '#fff',
            secondarty: 'rgba(255, 255, 255, 0.7)'
        }
    },
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#181818'
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: '#121212'
            }
        },
        MuiFormLabel: {
            root: {
                color: '#fff',
                '&$focused': {
                    color: '#fff'
                }
            }
        },
        MuiTableCell: {
            root: {
                borderBottom: '1px solid #121212'
            },
            head: {
                borderBottom: '1px solid #121212'
            }
        },
        MuiCircularProgress: {
            colorPrimary: {
                color: '#0096dc'
            }
        }
    }
}); };
