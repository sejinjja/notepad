
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

for (let i = 0; i < 50000; i++) {
  Promise.resolve.then(() => {
    const div = document.createElement('div')
    div.textContent = `Div ${i}`
    document.body.appendChild(div)
  }, 0)
}

///

console.log('start')
setTimeout(() => { console.log('setTimout') })

const pr = Promise.resolve()

pr.then(() => {
  pr.then(() => console.log('promise then in promise then prev start'))
  console.log('promise then start')
  const cur = new Date()
  while (new Date() - cur < 1000) {}
  console.log('promise then end')
  pr.then(() => console.log('promise then in promise then after end'))
})
console.log('end')
