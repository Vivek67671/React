module.exports = {
  extends: 'lighthouse:default',
  settings: {
    maxWaitForLoad: 45000,
    formFactor: 'desktop',
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0
    },
    screenEmulation: {
      mobile: false,
      width: 1350,
      height: 940,
      deviceScaleFactor: 1,
      disabled: false
    },
    skipAudits: [
      'uses-http2',
      'redirects-http'
    ]
  }
};
