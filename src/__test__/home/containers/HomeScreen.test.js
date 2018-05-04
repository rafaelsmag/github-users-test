import React from 'react'
import { shallow } from 'enzyme'

import HomeScreen from '../../../modules/home/containers/HomeScreen'

describe('HomeScreen Component', () => {
  const homeScreen = shallow(<HomeScreen />)
  it('should redenders properly', () => {
    expect(homeScreen).toMatchSnapshot()
  })

  it('Initializes the `state` with an empty list of posts', () => {
    expect(homeScreen.state().posts).toEqual([])
  })
})
