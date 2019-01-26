# TextInput

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/text-input.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for entering a single line of text.

## Getting started

````
npm install @cmds/text-input --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String |  | Unique identifier for the field |
| className | String |  | Add a className to the input |
| value | String | | Text to be edited |
| onChange | Function |  | Triggers when the value changes: `({id: string, value: string})` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/text-input.svg
[npm]: https://www.npmjs.org/package/@cmds/text-input
