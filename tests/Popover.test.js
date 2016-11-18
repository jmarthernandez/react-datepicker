import React from 'react';
import test, { hasMethod } from './test-utils';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

// Component to test
import Popover from './../src/Popover';
import Year from './../src/Year';
import Month from './../src/Month';


test('----- Popover Test -----', (t) => {
  const component = shallow(<Popover />);
  const popover = component.find('.datepicker-popover');

  t.equal(popover.length, 1, 'Should have one popover div');
  t.equal(component.find(Year).length, 1, 'Should contain year selector');
  t.equal(component.find(Month).length, 1, 'Should contain month selector');

  t.end();
});

test('----- Popover Props Test -----', (t) => {
  let component = mount(<Popover showPopover={true} />);
  let popover = component.find('.datepicker-popover');
  let style = popover.props().style;
  t.deepEqual(style, { display: '' }, 'Should display when showPopover is true');

  component = mount(<Popover showPopover={false} />);
  popover = component.find('.datepicker-popover');
  style = popover.props().style;
  t.deepEqual(style, { display: 'none' }, 'Should display when showPopover is false');

  const noop = () => {};
  component = mount(
    <Popover
      incYear={noop}
      decYear={noop}
      monthChange={noop}
      month={1}
      year={2009}
    />
  );

  t.equal(
    component.contains([
      <Year incYear={noop} decYear={noop} year={2009} />,
      <Month month={1} monthChange={noop} />,
    ]),
    true,
    'Should pass props to Year and Month'
  );

  t.end();
});
