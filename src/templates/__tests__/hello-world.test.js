import React from 'react';
import { shallow } from 'enzyme';

import HelloWorld from '../hello-world';

const setup = newProps => {
  const props = {
    ...newProps
  };

  const enzymeWrapper = shallow(<HelloWorld {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('<HelloWorld />', () => {
  it('renders as expected', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
