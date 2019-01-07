# 1day-release-site

## ディレクトリ階層
- cloudformation/: AWSのインフラストラクチャ
- siteinfo/: サイト情報管理
- src/: ソースコード
  - vue-cli3: LPのソースコード
- travis/: Travis用のデプロイコード
- package.json: Travis用のパッケージ管理
- package-lock.json: Travis用のパッケージバージョン管理
- README.md: 全体的な仕様の定義
- .travis.yml: Travisの設定

## コンポーネント定義
- Header 
  - Logo
  - Menu
  - LoopText
  - TypingText
- About
- Activities
  - SlideArticles
- Products
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
  - index.json: 総合的な情報を管理
  - activities: activitiesの各記事を管理
    - 2019-01-01-記事タイトル (ケバブケースで管理)
      - article.md
      - image.jpg
  - products: productsの各記事を管理する
    - 2019-01-01-記事タイトル (ケバブケースで管理)
      - article.md
      - image.jpg
  - members
    - Member-Name.jpg (ケバブケースで管理)

### index.json
```json
{
  "about": {
    "text": "JSONエンコードされた文字列"
  },
  "activities": [
    {
      "date": "2019-01-01",
      "title": "記事タイトル",
      "description": "説明"
    }
  ],
  "products": [
    {
      "date": "2019-01-01",
      "title": "記事タイトル",
      "description": "説明"
    }
  ],
  "members": [
    {
      "name": "Member Name",
      "position": "Position Name",
    }
  ],
  "contact": {
    "email": "admin@1day-release.com"
  }
}
```

### サイト情報の取得手順
1. ロード時、サブディレクトリがdevの場合、developブランチとして、サブディレクトリがstgの場合、stagingブランチとして、それ以外の場合masterブランチとして、https://raw.githubusercontent.com/1day-release/1day-release-site/{ブランチ}/siteinfoを基底URLとする
2. Ajaxにより基底URL/index.jsonを取得、siteinfoとしてStoreする
3. siteinfo.about.textが存在する場合、Aboutのテキストとして表示する
4. siteinfo.activitiesが存在する場合、配列を繰り返す
    1. 値.dateを日付として、値.titleをタイトルとして、値.descriptionを説明として表示する
    2. {基底URL}/acitivities/{値.date}-{値.titleをケバブケースに変換}/image.jpgをサムネイル画像として表示する
    3. 記事がクリックされた場合、{基底URL}/acitivities/{値.date}-{値.titleをケバブケースに変換}/article.mdを取得、記事詳細を表示する
5. siteinfo.productsが存在する場合、配列を繰り返す
    1. 値.dateを日付として、値.titleをタイトルとして、値.descriptionを説明として表示する
    2. {基底URL}/products/{値.date}-{値.titleをケバブケースに変換}/image.jpgをサムネイル画像として表示する
    3. 記事がクリックされた場合、{基底URL}/products/{値.date}-{値.titleをケバブケースに変換}/article.mdを取得、記事詳細を表示する
6. siteinfo.membersが存在する場合、配列を繰り返す
    1. 値.nameを名前として、値.titleをタイトルとして、値.descriptionを説明として表示する
    2. {基底URL}/members/{値.nameをケバブケースに変換}.jpgとして画像として表示する
7. siteinfo.contact.emailが存在する場合、Contactのメールアドレスとして表示する
