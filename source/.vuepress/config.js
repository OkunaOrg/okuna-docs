// More info on i18n: https://vuepress.vuejs.org/guide/i18n.html

module.exports = {
  locales: {
    // Locale settings, key must be the locale path (e.g.: '/es/')
    '/': {
      lang: 'en-US',
      title: 'Okuna Docs',
      description: 'The official documentation for Okuna.'
    }
  },
  themeConfig: {
    // Custom theme strings per-locale
    locales: {
      '/': {
        shortTitle: 'Docs',
        selectText: 'Language',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        privacyPolicyLabel: 'Privacy Policy',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'API Setup', link: '/api-setup.html' },
          { text: 'Flutter Setup', link: '/app-setup.html' },
          { text: 'API Docs', link: 'https://documenter.getpostman.com/view/5571027/S1EQSxso?version=latest' },
          { text: 'About us', link: 'https://www.okuna.io/en/about-us' },
          { text: 'Contact us', link: 'https://www.okuna.io/en/contact-us' }
        ]
      }
    },
    sidebar: {
      // Sidebar configuration per-locale
      '/': [
        {
          title: 'Okuna Documentation',
          collapsable: false,
          children: [
            'api-setup',
            'app-setup'
          ]
        }
      ]
    },
    displayAllHeaders: true
  }
};
