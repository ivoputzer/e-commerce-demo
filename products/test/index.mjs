import {equal, ok} from 'assert'
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
        createDocumentFragment: sinon.stub().returns({appendChild}),
        createElement: sinon.stub().returns({appendChild})
      }

      createProductFragment(document)

      ok(document.createDocumentFragment.calledOnce)
      ok(document.createElement.calledWith('h2'))
      ok(document.createElement.calledWith('ul'))
      ok(document.createElement.calledWith('li'))
      equal(appendChild.callCount, 5)
    })
  })
})
