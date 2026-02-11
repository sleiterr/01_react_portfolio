// GA Measurement ID (public, safe to expose)
const GA_ID = "G-8H9MZT5LQG";

export function loadGoogleAnalytics() {
  if (window.gtag) return; // for hot-reloading in dev

  // conected to Google Analytics
  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  // set the source to the gtag.js with our GA_ID
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

  // function to initialize gtag after the script is loaded
  gtagScript.onload = () => {
    // window.dataLayer is used by gtag.js
    window.dataLayer = window.dataLayer || [];

    // function to push events to dataLayer
    function gtag() {
      dataLayer.push(arguments);
    }

    // expose gtag function to the global window object
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  };
    
  // append both scripts to head
  document.head.appendChild(gtagScript);
}
