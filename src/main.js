// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/styles/index.css';
import Link from '~/components/Link.vue';
import DefaultLayout from '~/layouts/Default.vue';
import CloudinaryImage from '~/components/CloudinaryImage.vue';
import SEO from '~/components/SEO.vue';

export default function (Vue, { router, head, isClient }) {
  // Set global components
  Vue.component('Layout', DefaultLayout);
  Vue.component('Link', Link);
  Vue.component('CloudinaryImage', CloudinaryImage);
  Vue.component('SEO', SEO);

  // Add Google Fonts from CDN to head
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap',
  });

  // Verify site for IndieLogin.com (used for webmention.io)
  head.link.push({
    rel: 'me',
    href: 'https://twitter.com/missmatsuko',
  });

  // Accept webmentions with webmention.io
  head.link.push({
    rel: 'webmention',
    href: 'https://webmention.io/www.matsuko.ca/webmention',
  });

  head.link.push({
    rel: 'pingback',
    href: 'https://webmention.io/www.matsuko.ca/xmlrpc',
  });
}
