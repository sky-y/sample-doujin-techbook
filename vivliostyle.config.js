module.exports = {
  title: '科学の不思議', 
  author: 'アンリイ・ファブル（大杉栄、伊藤野枝訳）', 
  language: 'ja', 
  size: 'JIS-B5', 
  theme: [
    '@vivliostyle/theme-techbook@^1.0.1',
    'themes/my-theme.css'
  ],
  entryContext: './manuscripts',
  entry: [
    'index.md',
    { rel: 'contents' },
    '01.md',
    '02.md',
    '03.md',
    '04.md',
    '05.md',
    '06.md',
    '07.md',
    '08.md',
    '09.md',
    'colophon.md', 
  ], 
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  toc: {
    htmlPath: 'toc.html',
    title: '目次',
  },
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
