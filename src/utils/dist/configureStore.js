"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_saga_1 = require("redux-saga");
var injectReducer_1 = require("./injectReducer");
var injectSagas_1 = require("./injectSagas");
function configureStore() {
    var sagaMiddleware = redux_saga_1["default"]();
    var store = redux_1.createStore(injectReducer_1.rootReducer, {}, redux_1.applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(injectSagas_1["default"]);
    return store;
}
exports["default"] = configureStore;
