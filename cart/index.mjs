import { faker } from '@faker-js/faker'

 function createCartFragment (d = document) {
  const fragment = d.createDocumentFragment()
  const randomCartNumber = Math.random()
  const name = faker.name.firstName();

  const h2 = d.createElement('h2')
  h2.innerText = 'Cart'

  const p = d.createElement('p')
  p.innerText = `${name} have ${randomCartNumber} item in your cart`

  fragment.appendChild(h2)
  fragment.appendChild(p)

  return fragment
}

export default createCartFragment;