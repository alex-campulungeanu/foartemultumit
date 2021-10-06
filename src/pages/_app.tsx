import { useEffect, ReactElement } from 'react'
import {AppProps} from 'next/app'
import Router from "next/router";
import NProgress from "nprogress";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { QueryClientProvider } from "react-query";
import "nprogress/nprogress.css";
import {Provider} from 'react-redux'

import theme from '@src/theme/index'
import Layout from '../components/Layout'
import '../styles/globals.css'
import {queryClient} from '@src/lib/queryClient'
import {store} from '@redux/store'

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  
  useEffect(() => {
    // Remove the server-side injected CSS.
    // fix the Warning: Prop `className` did not match.
    //see https://stackoverflow.com/questions/50685175/react-material-ui-warning-prop-classname-did-not-match  (chrisweb answer) and https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MuiThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MuiThemeProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp
