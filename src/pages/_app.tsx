import { useEffect, ReactElement } from 'react'
import {AppProps} from 'next/app'
import Router from "next/router";
import NProgress from "nprogress";
import { QueryClientProvider } from "react-query";
import "nprogress/nprogress.css";
import {Provider} from 'react-redux'
import { Toaster } from 'react-hot-toast';
import 'tippy.js/dist/tippy.css';

// import theme from '@src/theme/index'
import AppLayout from '../components/AppLayout'
import '../styles/globals.css'
import {queryClient} from '@src/lib/queryClient'
import {rootStore} from '@store/rootStore'

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  
  return (
    <Provider store={rootStore}>
      <QueryClientProvider client={queryClient}>
          <Toaster position="bottom-center"/>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp
