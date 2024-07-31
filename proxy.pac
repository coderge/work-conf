function FindProxyForURL(url, host) {
  if(localHostOrDomainIs(host, "office.autox.clu")) {
    return "PROXY 10.100.0.1:8899";
  }
  if(!isResolvable(host)) {
    return "PROXY 10.100.0.1:8899";
  }
  return "DIRECT";
}
