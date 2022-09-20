module.exports = {
  title: 'Coffee',
  description: 'Coffee Repository',
  plugins: [
    '@vuepress/last-updated',
    ['@vuepress/search', { searchHotkeys: [] }],
  ],

  themeConfig: {
    nav: [
      {text: 'Feedback', link: 'https://airtable.com/shrt86wdmJVh8gpXQ',},
      {text: 'Slack', link: 'https://join.slack.com/t/docscoffee/shared_invite/zt-1fv02kk3k-uvj2hog7a9qEUDg91PtMOQ',}
  ],
    docsRepo: 'https://github.com/connorwforsyth/docs.coffee',
    docsDir: 'docs',
    editLinks: true,
  },
}
