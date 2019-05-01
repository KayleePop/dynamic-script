const test = require('muggle-test')
const assert = require('muggle-assert')
const loadScript = require('../index.js')

test('simple script should load', async () => {
  delete window.string

  await loadScript('/fixtures/windowString.js')

  assert.equal(window.string, 'penguin')
})

test('custom script element should be appended if passed', async () => {
  const elem = document.createElement('script')
  elem.id = 'customTag'
  elem.prop = 'penguin'

  await loadScript('/fixtures/windowString.js', elem)

  const appendedScript = document.getElementById('customTag')

  assert.equal(appendedScript.prop, 'penguin')
})

test('should resolve with script element', async () => {
  const elem = await loadScript('/fixtures/windowString.js')

  assert.equal(elem.constructor.name, 'HTMLScriptElement')
  assert.equal(elem.tagName, 'SCRIPT')
})

test('should resolve with custom script element', async () => {
  const scriptElement = document.createElement('script')
  scriptElement.prop = 'penguin'

  const elem = await loadScript('/fixtures/windowString.js', scriptElement)
  assert.equal(elem.prop, 'penguin')
})

test('loading nonexistant script should reject', async () => {
  await assert.rejects(
    loadScript('nonexistant.js'),
    new Error('Failure loading url: nonexistant.js')
  )
})
