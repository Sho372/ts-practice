# 月曜からストレスフリーでTSのコーディングするための設定

- [月曜からストレスフリーでTSのコーディングするための設定](#月曜からストレスフリーでtsのコーディングするための設定)
  - [TypeScriptコンパイラー TSCのインストール](#typescriptコンパイラー-tscのインストール)
  - [プロジェクトディレクトリを作成](#プロジェクトディレクトリを作成)
  - [.tsのソースを用意して、コンパイル＆実行(tscコマンド)](#tsのソースを用意してコンパイル実行tscコマンド)
  - [Hover information](#hover-information)
  - [Signature help](#signature-help)
  - [Errors and warnings](#errors-and-warnings)
  - [Formatting](#formatting)
    - [VSCode設定デフォルト値一覧](#vscode設定デフォルト値一覧)
  - [Refactoring](#refactoring)
    - [処理を抽出](#処理を抽出)
    - [処理をループブロックで囲む](#処理をループブロックで囲む)
    - [リネーム](#リネーム)
  - [Linters](#linters)
    - [ESLint](#eslint)
    - [VSCodeのESLint拡張](#vscodeのeslint拡張)

## [TypeScriptコンパイラー TSCのインストール](https://code.visualstudio.com/docs/languages/typescript#_installing-the-typescript-compiler) 

グローバルインストール

```shell
npm install -g typescript
```

プロジェクトごとのインストール

```shell
npm install --save-dev typescript
```

確認

```shell
tsc --version
```

## [プロジェクトディレクトリを作成](https://code.visualstudio.com/docs/languages/typescript#_hello-world)

```shell
mkdir HelloWorld
cd HelloWorld
code .
```

## .tsのソースを用意して、コンパイル＆実行(tscコマンド)

1. テストソースを用意
2. tscコマンドで.tsを.jsにトランスパイル (`helloworld.js`が生成される)

    ```shell
    tsc helloworld.ts
    ```

    - コンパイルがソース -> バイナリに対して、トランスパイルはA言語 -> B言語への変換を指すらしい

3. 実行 ※ただのJS実行

    ```shell
    node helloworld.js
    ```

## [Hover information](https://code.visualstudio.com/docs/languages/typescript#_hover-information)

`⌘K⌘I`でも出せる

## [Signature help](https://code.visualstudio.com/docs/languages/typescript#_signature-help)

`⇧⌘Space`でも出せる

## [Errors and warnings](https://code.visualstudio.com/docs/languages/typescript#_errors-and-warnings)

- `⇧⌘M`でサマリー出せる
- `F8`でインラインで詳細出せる

## Formatting

- VSCodeにはTypeScriptのフォーマッターが組み込まれている
- `typescript.format.enable`でフォーマッターの有効・無効を切替える (defaultでtrue)
    - フォーマットの細かい設定は`typescript.format.*`
    - 設定値については↓で確認

### [VSCode設定デフォルト値一覧](https://code.visualstudio.com/docs/getstarted/settings#_default-settings)

## Refactoring

### 処理を抽出

1. 関数にしたい部分をハイライト
2. 電球マークをクリック or `⌘.`
3. Extract function and Extract constant

### 処理をループブロックで囲む

1. 関数にしたい部分をハイライト
2. 電球マークをクリック or `⌘.`
3. ブロックの挿入から選択

### リネーム

`F2`

## [Linters](https://code.visualstudio.com/docs/languages/typescript#_linters)

- ESLintを設定
- [typescript-eslint](https://typescript-eslint.io/getting-started/)

### ESLint

以前はTSLintが推奨されていたが、TSLintはdeprecatedになって、現在はESLintを使ったほうがいいとのこと
[Migrate from TSLint to ESLint](https://code.visualstudio.com/api/advanced-topics/tslint-eslint-migration)

1. コマンドでインストールと設定ファイルを作成
    - `eslint.config.js`がプロジェクトルートに生成される （最近設定ファイル名が変わったみたい）

    ```shell
    npm init @eslint/config
    ```

2. package.jsonを編集
   - このままでESLintを実行すると以下のエラーが出た
   ```shell
   SyntaxError: Cannot use import statement outside a module
   ```
   - メッセージに出ている通り、`"type": "module"`を設定する
   ```
   (node:46256) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
   ```

   ```js
    {
    "name": "ts-practice",
    "version": "1.0.0",
    "description": "",
    "type": "module",
    ...
    }
   ```

3. 実行
    ```shell
    npx eslint .
    ```

### VSCodeのESLint拡張

1. ESLintの拡張をインストール
2. 最近ESLintの設定ファイル名が`eslint.config.js`になったせいで、公式リリース版では動かなった。プレスリリース版をインストールしたら正常に動作した
3. 正常に動作していればソース上で指摘される。「問題」からも確認可能
