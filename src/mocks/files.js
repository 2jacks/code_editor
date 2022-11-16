export const files = {
   'test.json': `{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": true
  },
  "exclude": [
    "node_modules"
  ]
}
`,
   'test.css': `.test {
    width: 10px;
    height: 15px;
    transition: min-width .2s linear;
}
`,
   'test.js': `function test() {
   console.log('hello')
}
`
}
