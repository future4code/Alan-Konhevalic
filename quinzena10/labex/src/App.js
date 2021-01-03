import { CssBaseline } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'

import ApplicationPage from './pages/ApplicationPage'
import CreateTripPage from './pages/CreateTripPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import TripDetailPage from './pages/TripDetailPage'
import TripsListPage from './pages/TripsListPage'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider} from '@material-ui/pickers';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
`


const App = () => {
  return (
    <Router>
      <CssBaseline/>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppContainer>
          <Switch>
            <Route exact path="/inscricao">
              <ApplicationPage/>
            </Route>
            <Route exact path="/criar-viagem">
              <CreateTripPage/>
            </Route>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/login">
              <LoginPage/>
            </Route>
            <Route exact path="/detalhes-viagem/:tripId">
              <TripDetailPage/>
            </Route>
            <Route exact path="/lista">
              <TripsListPage/>
            </Route>
          </Switch>
        </AppContainer>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App