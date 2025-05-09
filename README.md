# TechTrain Terminal Design Tokens

TechTrainのデザインシステム「Terminal」のデザイントークンを管理します。  
[Style Dictionary](https://amzn.github.io/style-dictionary)を使用して、JSONで定義されたデザイン変数を各プロジェクトで利用可能な形式に変換します。

## Usage

TypeScriptからトークンを利用する場合：

```typescript
// 個別のトークンをインポート
import {
  PrimitiveColorTechtrainBlue40,
  PrimitiveColorCaution50
} from '@techtrain/terminal-design-tokens';

// 使用例
const primaryColor = PrimitiveColorTechtrainBlue40;
```

## Development

TechTrain Terminalのデザイントークンは[Figma Community File](https://www.figma.com/community/file/1472050808130527580)で管理されています。

現在のプランではFigmaのVariables APIが利用ができないため、手動でエクスポートする形を取っています。
そこで、[Design Tokens](https://www.figma.com/community/plugin/888356646278934516/design-tokens) プラグインを使用します。

### トークンのエクスポート手順

1. プラグインが開いたら、`Export` タブを選択します
2. `Exclude extension property` と `Figma Variables` にチェックを入れます
3. 「Export」ボタンをクリックしてJSONファイルをダウンロードします
4. ダウンロードしたJSONファイルを `packages/terminal-design-tokens/tokens/` ディレクトリに配置します

![Design Tokensの設定](image.png)

### 各プラットフォームへの書き出し

```
pnpm build
```

現在はjsとcssをサポートしています。