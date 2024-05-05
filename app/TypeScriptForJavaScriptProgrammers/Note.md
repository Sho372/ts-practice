# TypeScript for JavaScript Programmers

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

## Interface

- TSのみに存在
- TSコンパイラーが型チェックのためだけに利用する
- コンパイル後にはコードに残らない

## Class

- TSには存在しない
- ES6で導入されてClass
- そのため、トンスパイル後のコードにも残る

> [!TIP]
> To learn the type of a variable, use typeof:
> Type	Predicate
> string	typeof s === "string"
> number	typeof n === "number"
> boolean	typeof b === "boolean"
> undefined	typeof undefined === "undefined"
> function	typeof f === "function"
> array	Array.isArray(a)

## declare (アンビエント宣言)

- cypressのカスタムコマンド用意するときのやつ。タイプ定義ファイルとか
1. JSで定義された関数などをTSの型チェック対象に入れる
1. 型定義ファイルで関数を定義する

https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

## Generics

## Structural Type System (構造的型付け)

- 実際は、「構造的部分型」= 構造的型付け + 部分型
    - Javaなどは「名前的部分型」。継承(extends)を通じて型間の親子関係が形成される

以下に型付けのアプローチがまとまっている

https://typescriptbook.jp/reference/values-types-variables/structural-subtyping

## ダックタイピング

- Goなどと同じようにTypeScriptもダックタイピング

> [!TIP]
> ダックタイピングは、オブジェクトの型よりもオブジェクトの持つメソッドやプロパティが何であるかによってオブジェクトを判断するプログラミングスタイルです











