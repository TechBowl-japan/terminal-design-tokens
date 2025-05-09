# TechTrain Terminal Design Tokens

TechTrainのデザインシステム「Terminal」のデザイントークンを管理します。  
[Style Dictionary](https://amzn.github.io/style-dictionary)を使用して、JSONで定義されたデザイン変数を各プロジェクトで利用可能な形式に変換します。

## インストール

```bash
npm i @techtrain/terminal-design-tokens
```

## 使い方

```typescript
import DesignToken from '@techtrain/terminal-design-tokens'
```

## 開発

TechTrain Terminalのデザイントークンは[Figma Community File](https://www.figma.com/community/file/1472050808130527580)で管理されています。

現在のプランではFigmaのVariables APIを利用できないため、手動でエクスポートする形を取っています。
そこで、[Design Tokens](https://www.figma.com/community/plugin/888356646278934516/design-tokens) プラグインを使用します。

### トークンの更新

1. プラグインが開いたら、`Export` タブを選択します
2. `Exclude extension property` と `Figma Variables` にチェックを入れます
3. 「Export」ボタンをクリックしてJSONファイルをダウンロードします
4. ダウンロードしたJSONファイルを `tokens/` ディレクトリに配置します
5. `npm run build` を実行して、各プラットフォーム用のトークンを生成します

![Design Tokensの設定](image.png)
