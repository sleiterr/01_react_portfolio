// GA Measurement ID (public, safe to expose)
const GA_ID = "G-8H9MZT5LQG"

export function loadGoogleAnalytics() { 
    if (window.gtag) return; // for hot-reloading in dev

    // conected to Google Analytics
    const gtagScript = document.createElement("script")
    gtagScript.async = true
    // set the source to the gtag.js with our GA_ID
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

    // inline script to initialize gtag
    const inlineScript = document.createElement("script")
    // set the innerHTML to the gtag initialization code
    inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('config', '${GA_ID}');
    `;

    // append both scripts to head
    document.head.appendChild(gtagScript)
    document.head.appendChild(inlineScript)
}