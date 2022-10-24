import {faker} from '@faker-js/faker'

export default function createProductFragment({createDocumentFragment, createElement} = document) {

  const fragment = createDocumentFragment()

  const h2 = createElement('h2')
  h2.innerText = 'Products for sale'

  const ul = createElement('ul')

  ;[
    faker.commerce.product(),
    faker.commerce.product(),
    faker.commerce.product()
  ].forEach(product => {
    const li = createElement('li')
    li.innerText = product
    ul.appendChild(li)
  })

  fragment.appendChild(h2)
  fragment.appendChild(ul)

  return fragment
}
