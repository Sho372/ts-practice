# The Basics

https://www.typescriptlang.org/docs/handbook/2/basic-types.html

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




