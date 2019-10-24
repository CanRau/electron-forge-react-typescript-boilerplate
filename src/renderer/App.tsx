import * as React from 'react'
import { ThemeProvider } from 'theme-ui'
import {
  Router,
  Link,
  createMemorySource,
  createHistory,
  LocationProvider,
  RouteComponentProps,
} from '@reach/router'
import Home from './screens/Home'
import theme from './theme'

const source = createMemorySource('/')
const history = createHistory(source)

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocationProvider history={history}>
        <Router>
          <RouterPage path="/" pageComponent={<Home />} />
        </Router>
      </LocationProvider>
    </ThemeProvider>
  )
}

// Based on https://github.com/reach/router/issues/141#issuecomment-451646939
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent
