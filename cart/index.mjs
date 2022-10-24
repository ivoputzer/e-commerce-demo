
import { faker } from '@faker-js/faker'

export default function createCartFragment (d = document) {
  const fragment = d.createDocumentFragment()
  const randomCartNumber = Math.random()

  const h2 = d.createElement('h2')
  h2.innerText = 'Cart'

  const p = d.createElement('p')
  p.innerText = `${faker.name.firstName()} have ${randomCartNumber} item in your cart`

  fragment.appendChild(h2)
  fragment.appendChild(p)

  return fragment
}
