function createProductFragment() {
  const fragment = document.createDocumentFragment()

  const h2 = document.createElement('h2')
  h2.innerText = 'Products for sale'

  const ul = document.createElement('ul')

  ;['Chair', 'Table', 'Lamp'].forEach(product => {
    const li = document.createElement('li')
    li.innerText = product
    ul.appendChild(li)
  })

  fragment.appendChild(h2)
  fragment.appendChild(ul)

  return fragment
}
