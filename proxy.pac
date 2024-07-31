function FindProxyForURL(url, host) {
  if(localHostOrDomainIs(host, "office.autox.clu")) {
    return "PROXY 10.100.0.1:8899; DIRECT";
  }
  return "DIRECT";
}
