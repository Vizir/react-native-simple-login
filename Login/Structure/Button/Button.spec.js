/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import { Button } from '../'

describe('Button', () => {
  it('can render correctly', () => {
    expect(shallow(
      <Button text='Sample Button' onPress={jest.fn()} />
    )).toMatchSnapshot()
  })
})
