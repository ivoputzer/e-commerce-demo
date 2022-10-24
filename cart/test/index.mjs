import { ok } from 'assert'
import { JSDOM } from 'jsdom'

import createCartFragment from '../index.mjs'

describe('cart', () => {
  it('should write random name', () => {
    const dom = new JSDOM()
    const fragment = createCartFragment(dom.window.document)

    ok(fragment instanceof dom.window.DocumentFragment)
  })
})
