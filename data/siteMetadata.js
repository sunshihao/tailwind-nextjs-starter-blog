/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  blogTile: "Welcome to William Son's blog!",
  title: "William's blog", // 标签栏
  author: 'William Son',
  bannerImage: '/static/images/ged001.jpg', // 首页banner默认图
  headerTitle: "William Son's Blog",
  // description: 'Spirit of independence, thoughts of freedom',
  description: 'Urgently explore the unknown',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/sunshihao/tailwind-nextjs-starter-blog/tree/dev-v2',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: '4sh945@gmail.com',
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      // repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repo: 'sunshihao/tailwind-nextjs-starter-blog',
      // repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      repositoryId: 'R_kgDOLK3z1Q',
      // category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      category: 'Announcements',
      // categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      categoryId: 'DIC_kwDOLK3z1c4Cc8wT',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    // provider: 'kbar', // kbar or algolia
    // kbarConfig: {
    //   searchDocumentsPath: 'search.json', // path to load documents to search
    // },
    provider: 'algolia',
    algoliaConfig: {
      // The application ID provided by Algolia
      appId: '8VXERBO4N6',
      // Public API key: it is safe to commit it
      apiKey: 'e7cdd0c3d2ca4dfc00315d0c99fa5151',
      // indexName: 'docsearch',
      indexName: 'blog_william',
    },
  },
}

module.exports = siteMetadata
