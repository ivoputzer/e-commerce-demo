import { equal, ok } from 'assert'
import { JSDOM } from 'jsdom'
import sinon from 'sinon'

import createCartFragment from '../index.mjs'

describe('cart', () => {
  it('exports a function', () => {
    equal(typeof createCartFragment, 'function')
  })
  describe('createCartFragment', () => {
    it('does invoke functions properly', () => {
      const appendChild = sinon.spy()
      const document = {
        createDocumentFragment: sinon.stub().returns({ appendChild }),
        createElement: sinon.stub().returns({ appendChild })
      }

      createCartFragment(document)

      ok(document.createDocumentFragment.calledOnce)
      ok(document.createElement.calledWith('h2'))
      ok(document.createElement.calledWith('p'))
      equal(appendChild.callCount, 2)
    })

    it('returns a document fragment', () => {
      const dom = new JSDOM()
      const fragment = createCartFragment(dom.window.document)

      ok(fragment instanceof dom.window.DocumentFragment)
    })
  })
})
