module.exports = async function (src, scriptElement) {
  if (!scriptElement) {
    scriptElement = document.createElement('script')
    scriptElement.type = 'text/javascript'
  }

  scriptElement.src = src
  document.head.appendChild(scriptElement)

  return new Promise((resolve, reject) => {
    scriptElement.onload = () => resolve(scriptElement)
    scriptElement.onerror = () => reject(new Error(`Failure loading url: ${src}`))
  })
}
