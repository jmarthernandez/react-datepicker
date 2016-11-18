import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import test, { hasMethod } from './test-utils';
// Component to test
import Datepicker from './../src/Datepicker';
import Popover from './../src/Popover';

test('----- Datepicker Test -----', (t) => {
  const component = shallow(<Datepicker />);
  const button = component.find('button.datepicker');

  t.equal(button.length, 1, 'Should have one button');
  t.equal(button.text(), '', 'Should have empty button');
  t.equal(component.find(Popover).length, 1, 'Should contain popover');


  t.end();
});


test('----- Datepicker Prop Tests -----', (t) => {
  const onSelect = sinon.spy();
  const monthChange = () => {};
  const incYear = () => {};
  const decYear = () => {};
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const component = shallow(
    <Datepicker
      value="10/2001"
      onSelect={onSelect}
      showPopover={true}
      monthChange={monthChange}
      incYear={incYear}
      decYear={decYear}
      year={year}
      month={month}
    />
  );

  const button = component.find('button.datepicker');

  t.equal(button.text(), '10/2001', 'value prop should render to button');

  button.simulate('click');
  t.equal(onSelect.callCount, 1, 'onSelect should be triggered on click');

  t.equal(
    component.contains(
      <Popover
        showPopover={true}
        monthChange={monthChange}
        incYear={incYear}
        decYear={decYear}
        year={year}
        month={month}
      />
    ),
    true,
    'Datepicker should pass props to Popover'
  );

  t.end();
});
