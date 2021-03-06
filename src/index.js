import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from './reducers'
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    (<React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>), document.getElementById('root'))