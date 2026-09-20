// ★ここの「G-XXXXXXXXXX」を、GA4で発行された自分の測定IDに書き換える（この1か所だけ）
var GA_MEASUREMENT_ID = 'G-15812020846';

(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
})();
