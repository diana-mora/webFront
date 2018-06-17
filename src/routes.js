import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from 'utils/AuthService'
import Form from './Form'
import Form_regis from './Form_regis'
import perfil from './perfil'
import mesa from './mesa'
import reserva from './reserva'

const auth = new AuthService()

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.isAuthenticated()) {
    replace({ pathname: '/login' })
  }
}

const requireAdmin = (nextState, replace) => {
  if (!auth.isAuthenticated() || !auth.isAdmin()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/Form" />
      <Route path="Form" component={Form} />
      <Route path="Form_regis" component={Form_regis} onEnter={requireAdmin} />
      <Route path="perfil" component={perfil} onEnter={requireAuth} />
      <Route path="mesa" component={mesa} onEnter={requireAuth} />
      <Route path="reserva" component={reserva} onEnter={requireAuth} />
    </Route>
  )
}

export default makeMainRoutes
