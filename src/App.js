/* eslint-disable no-alert */
import React, { Component, Suspense, lazy } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import $ from 'jquery';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/NewResumePage'));
const Stats = lazy(() => import('./pages/Stats'));

class App extends Component {
  constructor(props: {} | ReadOnly<{}>) {
    super(props);
    this.state = {
      datas: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ datas: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter basename={PUBLIC_URL}>
          <Suspense fallback={<Main />}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/stats" component={Stats} />
              <Route path="/contact" component={Contact} />
              <Route path="/resume" component={Resume} />
              <Route component={NotFound} status={404} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
