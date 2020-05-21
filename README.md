### rollup-plugin-vue css modules bug

#### Problem description:
Compilation of CSS Module results in different css class names in SSR (`optimizeSSR: true`) and client (`optimizeSSR: false`) build when production mode is on.

#### Step to reproduce:
Correct behaviour (non production mode)
```
1. npm run build
2. Open dist indes.cjs.css and index.esm.css
3. both files contains the same class names 
```

Incorrect behaviour (production mode)
```
1. npm run build:prod
2. Open dist indes.cjs.css and index.esm.css
3. both files contains different class names
```
