import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/AsynComponent/asyncComponent'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Orders from './containers/Orders/Orders';
import * as actions from './store/actions/index'

const asyncCheckout = asyncComponent(() => {
  return import ('./containers/Checkout/Checkout');
})
const asyncLogout = asyncComponent(() => {
  return import ('./containers/Auth/Logout/Logout');
})
const asyncAuth = asyncComponent(() => {
  return import ('./containers/Auth/Auth');
})


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignUp()
  }

  render() {
    let Routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to = "/"/>
      </Switch>
    )

    if (this.props.isAuthenticated) {
      Routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={asyncLogout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to = "/"/>
        </Switch>
      )
    }
    return (
      <div>
        <Layout>
          {Routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.autoCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
