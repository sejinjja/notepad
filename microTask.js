
let count = 10000

function limiter () {
  count--
  return !count
}

function promiseTest () {
  return Promise.resolve().then(() => {
    makeElement(count)
    return !limiter() && promiseTest()
  })
}

promiseTest()

function setTimoutTest () {
  setTimeout(() => {
    makeElement(count)
    !limiter() && setTimoutTest()
  })
}

setTimoutTest()
function makeElement (text) {
  const div = document.createElement('div')
  div.innerText = text
  console.log(text)
  document.body.appendChild(div)
}
