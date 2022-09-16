"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
var cardTitleHeight = 92;
exports.useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: '44%',
            minHeight: 250,
            height: '24.4%',
            margin: '2% 2% 2% 2%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4,
            background: '#27272d'
        },
        cardHeaderRoot: {
            height: cardTitleHeight,
            padding: theme.spacing(3)
        },
        title: {
            fontSize: 14
        },
        pos: {
            marginBottom: 12
        },
        cardAvatar: {
            width: 44,
            height: 44
        },
        cardTitle: {
            fontFamily: 'Roboto',
            fontSize: 24,
            fontWeight: 300,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.5,
            letterSpacing: 'normal',
            color: 'rgba(255, 255, 255, 0.87)'
        },
        cardContent: {
            minHeight: 152,
            height: "calc(100% - " + cardTitleHeight + "px)",
            padding: theme.spacing(3),
            display: 'flex',
            alignItems: 'center'
        },
        contentData: {
            width: '25%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
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
            color: 'rgba(255, 255, 255, 0.6)'
        },
        colData: {
            fontFamily: 'Roboto',
            fontSize: 24,
            fontWeight: 300,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.5,
            letterSpacing: 'normal',
            color: 'rgba(255, 255, 255, 0.87)',
            marginTop: '5%'
        },
        pendingAcc: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        },
        cursorPointer: {
            cursor: 'pointer'
        }
    });
});
