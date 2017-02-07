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

  it('only displays the icon when an icon is passed', () => {
    const wrapper = shallow(
      <Input label='Sample Label' />
    )

    expect(wrapper.find('Image').length).toEqual(0)

    wrapper.setProps({icon: 'fakeIcon'})

    expect(wrapper.find('Image').length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
