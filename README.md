# 1day-release-site
## コンポーネント定義
- Header 
  - Logo
  - Menu
  - LoopText
  - TypingText
- About
- Activities
  - SlideArticles
- products
  - SlideProducts
- Members
  - Member
- Footer
  - TypingText
  - Sitemap
  - GotoPagetop
  - Copyright

## サイト情報管理
### ファイル構造
- siteinfo
  - index.json: 総合的な情報を管理する
  - works: worksの各記事を管理する
    - 2019-01-01_記事タイトル
      - article.md
      - image.jpg
  - activities-records: worksの各記事を管理する
    - 2019-01-01_記事タイトル
      - article.md
      - image.jpg

### index.json
```json
{
  "about": {
    "text": "JSONエンコードされた文字列"
  },
  "works": [
    {
      "date": "2019-01-01",
      "title": "記事タイトル",
      "description": "説明"
    }
  ],
  "activitiesRecords": [
    {
      "date": "2019-01-01",
      "title": "記事タイトル",
      "description": "説明"
    }
  ],
  "contact": {
    "email": "admin@1day-release.com"
  }
}
```

### サイト情報の取得手順
1. ロード時、Ajaxによりindex.jsonを取得する
1. 取得したデータをsiteinfoにStoreする
1. siteinfo.about.textが存在する場合、Aboutのテキストとして表示する
1. siteinfo.worksが存在する場合、配列を繰り返す
    1. 値.dateを日付として、値.titleをタイトルとして、値.descriptionを説明として表示する
    1. {値.date}_{値.title}/image.jpgとしてサムネイル画像を表示する
    1. 記事がクリックされた場合、{値.date}_{値.title}/article.mdを取得、記事詳細を表示する
1. siteinfo.activitiesRecordsが存在する場合、配列を繰り返す
    1. 値.dateを日付として、値.titleをタイトルとして、値.descriptionを説明として表示する
    1. {値.date}_{値.title}/image.jpgとしてサムネイル画像を表示する
    1. 記事がクリックされた場合、{値.date}_{値.title}/article.mdを取得、記事詳細を表示する
1. siteinfo.contact.emailが存在する場合、Contactのメールアドレスとして表示する
