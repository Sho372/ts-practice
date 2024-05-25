# The Basics

## コンパイル＆実行

https://www.typescriptlang.org/docs/handbook/2/basic-types.html

1. ルートディレクトリでtsc
2. カレントをout配下のjsファイルがあるディレクトリにして、実行
    - カレントのパスによっては、ロードエラーが出たことがある

```
mizunoshohei@MizunonoMacBook-Air TypeScriptHandbook % pwd
/Users/mizunoshohei/go/src/ts-practice/out/TypeScriptHandbook
mizunoshohei@MizunonoMacBook-Air TypeScriptHandbook % node 2_everyday_types.js
```

## ファイル監視で自動コンパイル

1. `tsc -w`でコンパイルを実行
2. ソースを更新するたびにコンパイルが実行される

[TypeScript: Documentation - Configuring Watch](https://www.typescriptlang.org/docs/handbook/configuring-watch.html#configuring-file-watching-using-a-tsconfigjson)

## Static type-checking

https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking

- TSの静的型チェックの必要性について説明
- JSだと実行時まで型によるエラーを検知できない
- 以下のサンプルコードをJSとTSで書いてみると、必要性がわかる

```JS
var message = "hello";
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();
```

- JSの場合 `1_basics_typeerro.js`
    - 実行時に「TypeError」が出る

```JS
message();
^

TypeError: message is not a function
```

- TSの場合 `1_basics.ts`
    - linterなり、コンパイラーなりが型チェックで怒ってくれる

## Non-exception Failures

>[!Note]
>Exceptions are expected failures, which we should recover from.
>Errors are unexpected failures. By definition, we cannot recover elegantly from unexpected failures.

- JSだと実行時にエラーが出るまでわからない。TSは静的型システムで、JS的に有効ですぐにエラーを投げないものでも、TSの型システムはエラーとする。
- unexpected failureはTSはエラーとする

## Types for Tooling

## `tsc`, the TypeScript compiler

tscはTSのコンパイラーでtype checker

1. `.ts`のファイルを作成する
2. `tsc`でコンパイル
    ```shell
    tsc hello.ts
    ```

## Emitting with Errors

- `--noEmitOnError`をつけると型チェックでエラーが出る場合は、JSファイルなどのアウトプットファイルを作成しない

```
tsc --noEmitOnError hello.ts
```

## Explicit Types

- typeを明示的に指定できる、指定しなくても型推測してくれる

## Erased Types

- tscでjsにすると型アノテーションなどがなくなる

before

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
```

after

```js
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
```

# Everyday Types

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

## The primitives: string, number, and boolean

- tsのprimivieはこの3つしかない
- また、int,floatなどはなく数値はnumber `everything is simply number`


## any

- tscの型チェックスルーしたい場合に使える
- tscが型類推できないときは`any`にしちゃうらしい。
    - `noImplicitAny`オプションでこれを回避できる

## Functions

- 関数の入力値と出力値の型を指定できる
- Promise返す場合も、returnするのはpromiseではなく実際の値

```ts
// Function Which Return Promises
async function getFavoriteNumberPromise(): Promise<Number> {
	return 26;
}
```

## tsconfigのプロパティ一覧

### include

- tscの対象に含めるファイル名を指定する
- `tsconfig.json`ファイルを含んでいるディレクトリからの相対パスで指定

[TypeScript: TSConfig Reference - Docs on every TSConfig option](https://www.typescriptlang.org/tsconfig/#include)

## nodeでjs実行したら`Error: Cannot find module loader:1145`が出た

[javascript - "internal/modules/cjs/loader.js:582 throw err" - Stack Overflow](https://stackoverflow.com/questions/53545800/internal-modules-cjs-loader-js582-throw-err)




