import { faker } from '@faker-js/faker'

export default function createCartFragment (doc = document) {
  const fragment = doc.createDocumentFragment()

  const h2 = doc.createElement('h2')
  h2.innerText = 'Cart'

  const p = doc.createElement('p')
  p.innerText = `${faker.name.fullName()}, you have ${faker.datatype.number({ min: 2, max: 10 })} items in your cart`

  fragment.appendChild(h2)
  fragment.appendChild(p)

  return fragment
}
