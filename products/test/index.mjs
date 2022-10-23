import { equal, ok } from 'assert'
import { JSDOM } from 'jsdom'
import sinon from 'sinon'
import createProductFragment from '../index.mjs'

describe('products', () => {
  describe('.createProductFragment', () => {
    it('is callable', () => {
      equal(typeof createProductFragment, 'function')
    })

    it('does invoke functions properly', () => {
      const appendChild = sinon.spy()
      const document = {
        createDocumentFragment: sinon.stub().returns({appendChild}),
        createElement: sinon.stub().returns({appendChild}),
      }

      createProductFragment(document)

      ok(document.createDocumentFragment.calledOnce)
      ok(document.createElement.calledWith('h2'))
      ok(document.createElement.calledWith('ul'))
      ok(document.createElement.calledWith('li'))
    })

    it('does product dom manipulations', () => {
      const dom = new JSDOM()
      const fragment = createProductFragment(dom.window.document)
      ok(fragment instanceof dom.window.DocumentFragment)
    })
  })
})
