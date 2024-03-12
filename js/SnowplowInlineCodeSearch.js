/**
 * @file
 */
((drupalSettings) => {;
  // <!-- Snowplow starts plowing - Standalone Search vE.2.14.0 -->
(function (p,l,o,w,i,n,g) {if(!p[i]){p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace||[];
    p.GlobalSnowplowNamespace.push(i);p[i] = function () {(p[i].q = p[i].q||[]).push(arguments)
    };p[i].q = p[i].q||[];n = l.createElement(o);g = l.getElementsByTagName(o)[0];n.async = 1;
    n.src = w;g.parentNode.insertBefore(n,g)}}(window,document,"script",drupalSettings['script_uri'],"snowplow"));
  var collector = drupalSettings['gdx_collector'];
  var app_id = drupalSettings['app_id']
  window.snowplow('newTracker','rt',collector, {
    appId: app_id,
    cookieLifetime: 86400 * 548,
    platform: 'web',
    post: TRUE,
    forceSecureTracker: TRUE,
    contexts: {
      webPage: TRUE,
      performanceTiming: TRUE
    }
  });
  window.snowplow('enableActivityTracking', 30, 30); // Ping every 30 seconds after 30 seconds
  window.snowplow('enableLinkClickTracking');
  window.snowplow('trackPageView');
  if(drupalSettings['search']) {
    window.snowplow('trackSiteSearch', drupalSettings['search_terms']);
  }
  //<!-- Snowplow stop plowing -->
})(drupalSettings);
