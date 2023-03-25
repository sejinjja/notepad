

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const a = 1
const b = 2
const text =  'a: ' + a +' \n' +
  'b: ' + b +' \n' +
  '합: ' + ( a + b)
const template = `a: ${a}
b: ${b}
합: ${a + b}`

console.log(text)
console.log(template)

const name = 'sejiwork'
const email = 'sejinjja@gmail.com'

console.log(`이름: ${name}
email: ${email}`)


const name = 'sejiwork'
const email = 'sejinjja@gmail.com'

function introduce(name, email) {
  const [_, domain] = email.split('@')
  return `이름: ${name}
email: *****@${domain}`
}

console.log(introduce(name, email))

const name = 'sejiwork'
const email = 'sejinjja@gmail.com'

function taggedIntroduce(strings, name, email) {
  const [_, domain] = email.split('@')
  email = `*****@${domain}`
  return String.raw(strings, name, email)
}

console.log(taggedIntroduce`닉네임: ${name}
email: ${email}`)

console.log(taggedIntroduce`이름: ${name}
email: ${email}`)

const text1 = `이름: ${name}`
const text2 = String.raw`이름: ${name}`

const name = 'sejiwork'
const email = 'sejinjja@gmail.com'
console.log`닉네임: ${name}
email: ${email}`

function mergeTaggedTemplate(strings, ...values) {
  const res = []
  for(let i = 0; i < strings.length; i++) {
    res.push(strings[i])
    res.push(values[i])
  }

  return res.join('')
}

mergeTaggedTemplate(['닉네임: ', '\nemail: ', ''], 'sejiwork', 'sejinjja@gmail.com')


const styled = {}
styled.h1 = (style, ...values) => {
  const elm = document.createElement('h1')
  elm.style = String.raw(style, ...values)
  return elm
}


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const highlight = {
  'fontSize': '2.5em',
  'color': 'red'
}

const HighlightTitle = styled.h1`
  font-size: ${highlight.fontSize};
  text-align: center;
  color: ${highlight.color};
`






