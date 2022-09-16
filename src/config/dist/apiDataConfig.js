"use strict";
exports.__esModule = true;
exports.configAPI = void 0;
exports.configAPI = {
    uploadWorkbookRequest: {
        REQUEST_URL: '/csv-upload',
        method: 'post'
    },
    getAccountList: function (nextPageUrl) {
        var url = '/account-list/' + nextPageUrl;
        // 'https://x8la1e91cd.execute-api.us-east-1.amazonaws.com' + nextPageUrl;
        // const url = 'http://localhost:3000/stub/accounts/accountsList.json';
        return {
            REQUEST_URL: url
        };
    }
};
