import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './modules/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import conf from './conf';
import reducer from './reducer';
import Error404 from './modules/Error404';
import Layout from './modules/Layout';
import Contacts from './modules/Contacts';
import Services from './modules/Services';
import Barbers from './modules/Barbers';
import Booking from './modules/Booking';

const composeThunk = conf.isProduction ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk));
conf.store = createStore(reducer, composeThunk);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={conf.store}>
      <Router>
        <Route
          render={(props) => (
            <Layout>
              <Switch location={props.location}>
                <Route key="index" exact path="/" component={App} />
                <Route key="contacts" exact path="/contacts" component={Contacts} />
                <Route key="services" exact path="/services" component={Services} />
                <Route key="barbers" exact path="/barbers" component={Barbers} />
                <Route key="booking" exact path="/booking" component={Booking} />
                <Route key="404" component={Error404} />
              </Switch>
            </Layout>
          )}
        />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
