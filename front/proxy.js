var HttpsProxyAgent = require('https-proxy-agent');
var proxyConfig = [{
  context: '/',
  target: 'localhost:80',
  secure: false
}];

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = `localhost`;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function(entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);