import React from 'react'
import { Route, IndexRoute, Router, browserHistory, Link } from "react-router";
import MatchesContainer from "../../containers/MatchesContainer";


const App = props => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/statics/:id" component={MatchesContainer} />
      </Router>
    </div>
  );
};

export default App