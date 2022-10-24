import { equal, ok } from 'assert'
import { JSDOM } from 'jsdom'
import sinon from 'sinon'

import createProductFragment from '../index.mjs'

describe('products', () => {
  it('exports a function', () => {
    equal(typeof createProductFragment, 'function')
  })
  describe('createProductFragment', () => {
    it('does invoke functions properly', () => {
      const appendChild = sinon.spy()
      const document = {
        createDocumentFragment: sinon.stub().returns({ appendChild }),
        createElement: sinon.stub().returns({ appendChild })
      }

      createProductFragment(document)

      ok(document.createDocumentFragment.calledOnce)
      ok(document.createElement.calledWith('h2'))
      ok(document.createElement.calledWith('ul'))
      ok(document.createElement.calledWith('li'))
      equal(appendChild.callCount, 5)
    })

    it('returns a document fragment', () => {
      const dom = new JSDOM()
      const fragment = createProductFragment(dom.window.document)

      ok(fragment instanceof dom.window.DocumentFragment)
    })

    it('returns a document fragment with markup', () => {
      const dom = new JSDOM()
      const fragment = createProductFragment(dom.window.document)

      const h2 = fragment.querySelector('h2')
      equal(h2.innerText, 'Products for sale')
    })
  })
})
