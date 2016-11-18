import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import test from './test-utils';

// Component to test
import Year from './../src/Year';

test('----- Year Test -----', (t) => {
  const component = shallow(<Year />);
  const inc = component.find('.datepicker-year button.datepicker-year-inc');
  const value = component.find('.datepicker-year .datepicker-year-value');
  const dec = component.find('.datepicker-year button.datepicker-year-dec');
  t.equal(inc.length, 1, 'Should have increment button');
  t.equal(value.length, 1, 'Should have value button');
  t.equal(dec.length, 1, 'Should have decrement button');

  t.end();
});

test('----- Year Props Test -----', (t) => {
  const incYear = sinon.spy();
  const decYear = sinon.spy();
  const component = shallow(<Year incYear={incYear} decYear={decYear} year={2009}/>);
  const inc = component.find('.datepicker-year button.datepicker-year-inc');
  const dec = component.find('.datepicker-year button.datepicker-year-dec');
  const year = component.find('.datepicker-year-value').text();

  inc.simulate('click');
  dec.simulate('click');

  t.equal(incYear.calledOnce, true, 'incYear should be called when clicked');
  t.equal(decYear.calledOnce, true, 'decYear should be called when clicked');
  t.equal(year, '2009', 'year prop should render in span');

  t.end();
});
