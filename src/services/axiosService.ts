import axios from 'axios'

import {config as appConfig} from '../config/constants'
import logger from '@services/pinoService'

const httpsProxyAgent = require('https-proxy-agent');

const axiosInstance = axios.create({
  timeout: 10000
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (appConfig.proxy) {
      // logger.info(appConfig.proxy)
      const proxyAgent = new httpsProxyAgent(appConfig.proxy)
      config.httpsAgent = proxyAgent,
      config.proxy = false
    }
    config.headers = {
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
      // 'Content-Type': 'application/json',
    }
    // config.headers = {
    //   // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    //   // 'Accept-Encoding': 'gzip, deflate, br',
    //   // 'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
    //   // 'Cache-Control': 'max-age=0',
    //   // 'Connection': 'keep-alive',
    //   // 'Upgrade-Insecure-Requests': '1',
    //   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
    // }
    return config;
  }
);
  
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosService = axiosInstance