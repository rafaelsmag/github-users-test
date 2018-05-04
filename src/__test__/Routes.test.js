import React from 'react'
import { shallow } from 'enzyme'

import Routes from '../modules/Routes'

describe('Routes Component', () => {
  const routes = shallow(<Routes />)
  it('should redenders properly', () => {
    expect(routes).toMatchSnapshot()
  })
})
