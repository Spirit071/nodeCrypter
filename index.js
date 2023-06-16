const crypto = require(`crypto`)

const hasher = () => {
  return Math.random().toString().replace('.', '')
}

const compare = (hash, str) => {
  if (!hash.algorithm === crypto.createHash('sha512').algorithm) return false
  return hash === crypto.createHash('sha512').update(str).digest('hex')
}

const str = hasher().repeat(4)

const hash = crypto.createHash('sha512').update(str).digest('hex')

console.log(compare(hash, str))
