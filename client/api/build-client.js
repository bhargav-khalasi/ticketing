import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // server context
    // url format -> http://SERVICENAME.NAMESPACE.svc.cluster.local
    return axios.create({
      baseURL: 'http://www.ticketing-service.tech/',
      headers: req.headers
    });
  } else {
    // browser context
    return axios.create({
      baseURL: '/'
    });
  }
};
