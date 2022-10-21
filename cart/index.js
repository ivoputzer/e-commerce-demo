function createCartFragment () {
  const fragment = document.createDocumentFragment()
  const randomCartNumber = Math.random()

  const h2 = document.createElement('h2')
  h2.innerText = 'Cart'

  const p = document.createElement('p')
  p.innerText = `You have ${randomCartNumber} item in your cart`

  fragment.appendChild(h2)
  fragment.appendChild(p)

  return fragment
}
