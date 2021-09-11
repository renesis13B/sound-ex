## SOUND EX
[SOUND EX](https://sound-ex.vercel.app/)は楽曲のさらに詳細な情報(BPMやキー)を調べたり、好きなアーティストの人気曲を視聴できるサービスです。

[サイトへのリンク](https://sound-ex.vercel.app/)


## 状態管理に関して
### featchしたデータの状態管理
featchしたデータの状態は**react-query**で管理するようにしました。

採用した理由は、
最初はuseStateとuseEffectを用いてfetchを行い、useStateでfetchした結果やisLoadingやisErrorを行なってました。

しかし、これだとマウントするたびにfetchが実行されてfetch回数が増えてしまうのと、

useStateでそれぞれの状態を管理する煩わしさが問題でした。

そこで、**react-query**を使用して、一度fetchしたデータに関してはキャッシュで保存することで、fetchする回数を減らして、
loadingやerrorの状態に関してもreact-queryで管理しているのでコード量が減りシンプルになったので可読性を上げることができました。

## グローバル状態管理
グローバル状態管理には**Redux Toolkit**を使用しました。

採用した理由は、最初はuseContextとuseReducerを用いていたのですが、
useContextを使用したコンポーネントは、stateがどれか変わるたびに、その呼び出したコンポーネントが再レンダリングされるのと
それを修正するために、stateごとにcreateContextでcontextを作成し、Probiderでラップするので可読性が悪くなるのと状態が変わるたびにパフォーマンス改善のための工数がかかるのが問題でした。

そこで**Redux Toolkit**を導入することで、
そのstateがレンダリングに関わっているコンポーネントのみを再レンダリングしてくれるので、他のコンポーネントを気にせずGlobalな状態を使用でき、またパフォーマンス改善にもつながりますし、

シンプルにstateやreducerをかけるので可読性や保守性が上がったかと思います


### 使用した理由
アプリのパフォーマンス改善のため、fetchする回数と再レンダリングを少なくする目的で使用しました。
featchに関しては最初useStateとuseEffectを使用していたのですが、


## コンポーネントに関して
コンポーネントの粒度に関しては、Atomic Designを参考にしました
Pages -> Templates -> Organisms -> molecules -> Atomsの流れに沿ってコンポーネントを組み合わせて実装を行いmした
また以下のルールに沿って作成しました

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
- Organismsコンポーネントをもてる

## Organisms
アプリケーション部分と UI 部分を分離でき、再利用性も上がると思うので、

[この記事](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)のあるように、
UI レンダリングに責務を持つPresentationalとロジックに責務を持つContainer Componentsに分ける
- moleculesやAtomsで構成されたコンポーネント
- 他のOrganismsやmolecules、Atomsをもてる
- 状態やロジックをもてる

## molecules・Atoms
- 汎用性を持たせるため状態は持たない
- 親となるPagesかOrganismsからpropsを通してデータを受け取る
- moleculesは同じmoleculesかAtomsを持つことがでくr
- AtomsはAtomsのみ持つことができる


## がんばったところ

## 使用技術・ライブラリ
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


