## SOUND EX

[SOUND EX](https://sound-ex.vercel.app/)は気軽に楽曲の詳細な情報(BPMやキー)を調べたり、好きなアーティストの人気曲を視聴できるサービスです。


(サービスの主な内容)
![iMac - 1](https://user-images.githubusercontent.com/27562468/132991495-cfaa8efb-b4f8-4588-a70b-fa06ea0e65bb.png)

[サイトへのリンクはこちら](https://sound-ex.vercel.app/)

## 開発に関して

以下のテーマで今回の個人開発を行いました。

- Vue.jsは仕事で使っていたので、これまで全く触ったことのないReact.js・Next.jsを用いて開発すること
- 仕事ではないので、完全に趣味で自分が欲しいと思ったサービスを作ること

制作期間はだいたい１カ月程

## 主な使用技術・ライブラリ

```
React.js
Next.js
Vercel
TypeScript
spotify-api
react-query
Redux Toolkit
tailwindcss
prettier
eslint
```

## アプリの状態管理に関して

アプリの状態管理は、責務を以下の2つに分けて実装をおこないました。

1. **Sever data management**: クライアントから外部のサーバーを通してfetchしたデータとfetch状況(isLoading、isError)の管理
2. **App Global state management：**: アプリ内全体で使用するstateの管理

最初はHocksを使って状態管理をおこなっていたのですが、いろいろと考えた末現在は以下のような構成に落ち着きました。

1. **Sever data management**： 過去 useState, useEffect -> 現在 React Query
2. **App Global state management：**: 過去 useContext, useReducer -> 現在 Redux Toolkit

### Sever data management

現在はクライアントfetchに関しては [React Query](https://react-query.tanstack.com/) を使って、外部サーバーから取得したデータやfetch状況の管理をおこなっております。

#### 採用した理由

当初おこなっていたuseStateとuseEffectを使ったfetch管理だと以下のような問題が発生しました。

1. マウントするたびに毎回fetchが発生してしまう（今回はサーバー側のデータはほぼ変わらないので無駄なfetchになってしまう）
2. 上記の理由でfetchがたびたび発生するので、loading状態が毎回ユーザーに表示されてしまいUXが悪くなる
3. 別のfetchを行う関数を作成するたびに、useStateを使ったerror、loading状態やグローバル化などコード量が多いのでもっとシンプルにしたい

React Queryを導入することで以下のように問題をある程度解決できました。

1. fetch回数の削減：一度fetchしたデータは一定期間キャッシュに保管され、そのデータを再利用できるので、マウントするたびに実行されていたfetchをなくせた
2. loading状態の削減：fetchせずにキャッシュしたデータを再利用できるので、即座にユーザーにデータを表示できる
3.

コード量の削減してシンプルに：用意されているuseQueryを使うことで、error、loadingのstatusが返って来るのでこちらで用意しなくても良い。またキャッシュ化されたデータは専用のメソッドを使うことでどのコンポーネントからも呼び出せるのでuseContextなどを利用してグローバル化しなくてもよくなった

### App Global state management

現在はアプリ内全体で使用するstateの管理には [Redux Toolkit](https://redux-toolkit.js.org/) を使用しております。

#### 採用した理由

当初おこなっていたuseContextとuseReducerを使ったグローバルなstateの管理だと以下のような問題が発生しました。

1. Providerのvalueが更新される度に全てのuseContextを使っているコンポーネントが再レンダリングされるので不要なレンダリングが起こってパフォーマンス低下にツンがる
2. 上記を避けるために、createContextをstateごとや参照用、更新用に細かく分割するなどしないといけないのでの工数が増える
3. createContextを細かく分割した場合、さらにProviderも多重にラップしないといけないのでコードがみずらくなる

Redux Toolkitを導入することで以下のように問題をある程度解決できました。

1. 再レンダリングの最適化：Redux Toolkitがレンダリングを最適化してくれて、stateが更新されてレンダリングが変更になるコンポーネントだけを再レンダリングしてくれる
2. 保守性、可読性の向上：上記のおかげで、細かく分けずにシンプルに実装をおこなえる、また不要な再レンダリングを気にせず実装に集中できる

## コンポーネントに関して

コンポーネントの粒度に関しては、Atomic Designを参考

基本的には「Pages -> Templates -> Organisms -> molecules -> Atoms」の階層構造をもち、 さらに以下のルールに沿って作成しました。

### Pages

- ルーティングの基準となるコンポーネント
- 状態やロジックをもてる
- getStaticPropsやgetStaticPathsを使いpre-fetchやSSGを行える
- fetchを行い、その結果の状態に応じてローディングやエラー時の表示操作をおこなう
- TemplatesかOrganismsをもてる

## Templates

- 全てのPagesで共通して使うコンポーネント
- 構成する大きな要素(Header、Main、Footer)とそれらをまとめたLayoutコンポーネントとする
- 状態やロジックを持たない
- 基本的にはprops.childrenのみでデータを受け取る
- スタイルは、大枠の最大横幅や共通したtextのcolorなどを持つ
- Organisms・moleculesをもてる

## Organisms

[この記事](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)のあるように、
ロジックを持つ場合は、UI レンダリングに責務を持つPresentationalとロジックに責務を持つContainer Componentsと責務を分けるようにしました。

- moleculesやAtomsで構成されたコンポーネント
- 他のOrganismsやmolecules、Atomsをもてる
- カスタムフック

## molecules・Atoms

- 汎用性を持たせるため個別のstateは持たない
- 親となるPagesかOrganismsからpropsを通してデータを受け取る
- moleculesは同じmoleculesかAtomsを持つことができる
- AtomsはAtomsのみ持つことができる

## 開発で工夫したところ

機能的にはシンプルなアプリになったので、パフォーマンスやUX部分を意識した実装や技術選定をするように工夫しました。

具体的には、Chrome DevToolsのLighthouseを使って計測し、指標が悪いところの実装を変えたりライブラリの導入をおこないました。

### 具体的にやったこと

- 表示を高速化するために、Next.jsの**getStaticProps**, **getStaticPaths**を用いて動的ルートを使ったページを静的にプリレンダリングするようにした
- 再レンダリング回数を減らすために、メモ化をおこないpropsの内容が異なる場合のみ再レンダリングするようにした
- FirstMeaningfulPaintを上げてUXを高めるために、**react-query**を導入してレンダリングと同時にfetchするようにした
- next/imageを用いて画像の最適化を行い表示の高速化をおこなった
- LargestContentfulPaintを高速化するために、コンポーネント分割と表示の切替を工夫した
- 「Cumulative Layout Shift」を軽減するために横縦を指定したり、react-loading-skeletonを導入してレイアウトの大きな変化を直した
