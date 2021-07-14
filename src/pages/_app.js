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

function MyApp({ Component, pageProps }) {
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
