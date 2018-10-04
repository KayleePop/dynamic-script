# dynamic-script

[![Greenkeeper badge](https://badges.greenkeeper.io/KayleePop/dynamic-script.svg)](https://greenkeeper.io/) [![Travis badge](https://travis-ci.org/KayleePop/dynamic-script.svg?branch=master)](https://travis-ci.org/KayleePop/dynamic-script) [![standard badge](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm](https://img.shields.io/npm/v/dynamic-script.svg)](https://www.npmjs.com/package/dynamic-script)

Extremely simple dynamic script loader with promise API

Companion to [dynamic-style](https://github.com/kayleepop/dynamic-style)

## Goals
- Simple and readable source code
- Small API
- Fully tested

## Install

`$ npm install dynamic-script`

## Usage

```js
const loadScript = require('dynamic-script')

// url is set as <script src="${url}">
loadScript('https://url.com/script.js')
  .then(() => console.log('loaded successfully'))
  .catch(() => console.log('script failed to load'))

// resolves with the appended script element
const elem = await loadScript('https://url.com/script.js')
elem.src // https://url.com/script.js
```

Configure by passing a script element. It will be used instead of creating a new element.

```js
const scriptTag = document.createElement('script')
scriptTag.async = false

await loadScript('https://url.com/script.js', scriptTag)
```
