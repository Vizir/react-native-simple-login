/* global describe, it, expect */

import React from 'react'
import { shallow } from 'enzyme'
import { Input } from '../'

describe('Input', () => {
  it('can render correctly', () => {
    expect(shallow(
      <Input label='Sample Label' />
    )).toMatchSnapshot()
  })
})
