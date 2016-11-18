import React from 'react';
import test, { hasMethod } from './test-utils';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

// Component to test
import Month from './../src/Month';


test('----- Month Test -----', (t) => {
  const component = shallow(<Month />);
  const monthRows = component.find('.datepicker-month tr');
  const monthButtons = component.find('.datepicker-month button');

  t.equal(monthRows.length, 4, 'Should have 4 month rows');
  t.equal(monthButtons.length, 12, 'Should have 12 month buttons');

  t.end();
});

test('----- Month Props Test -----', (t) => {
  const monthChange = sinon.spy();
  const component = mount(<Month monthChange={monthChange} />);
  const monthButtons = component.find('.datepicker-month button');

  monthButtons.forEach(b => b.simulate('click'));
  t.equal(monthChange.callCount, 12, 'monthButtons should be triggered 12 times');

  t.end();
});