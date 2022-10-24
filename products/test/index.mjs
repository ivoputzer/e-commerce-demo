import {equal} from 'assert'

import createProductFragment from '../index.mjs'

describe('products', () => {
  it('exports a function', () => {
    equal(typeof createProductFragment, 'function')
  })
})
