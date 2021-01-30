import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // server context
    // url format -> http://SERVICENAME.NAMESPACE.svc.cluster.local
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers
    });
  } else {
    // browser context
    return axios.create({
      baseURL: '/'
    });
  }
};
