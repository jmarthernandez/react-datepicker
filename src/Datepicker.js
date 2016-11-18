import React, { PropTypes } from 'react';

import Popover from './Popover';

const Datepicker = ({
  value,
  onSelect,
  showPopover,
  monthChange,
  incYear,
  decYear,
  year,
  month,
}) => (
  <div>
    <button
      className="datepicker"
      onClick={onSelect}
    >
      {value}
    </button>
    <Popover
      showPopover={showPopover}
      month={month}
      monthChange={monthChange}
      incYear={incYear}
      decYear={decYear}
      year={year}
    />
  </div>
);

Datepicker.propTypes = {
  value: PropTypes.string,
  showPopover: PropTypes.bool,
  onSelect: PropTypes.func,
  monthChange: PropTypes.func,
  incYear: PropTypes.func,
  decYear: PropTypes.func,
  month: PropTypes.number,
  year: PropTypes.number,
};

export default Datepicker;
