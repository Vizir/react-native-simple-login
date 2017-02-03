/* global describe, it, expect */

import React from 'react'
import { shallow } from 'enzyme'
import { Logo } from '../'

describe('Logo', () => {
  it('can render correctly', () => {
    expect(shallow(
      <Logo logoImage='fakeImage' />
    )).toMatchSnapshot()
  })
})
