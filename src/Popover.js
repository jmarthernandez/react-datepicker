import React, { PropTypes } from 'react';

import Year from './Year';
import Month from './Month';

const Popover = ({
  showPopover,
  monthChange,
  month,
  year,
  incYear,
  decYear,
}) => {
  const show = { display: '' };
  const hide = { display: 'none' };
  return (
    <div
      className="datepicker-popover"
      style={showPopover ? show : hide}
    >
      <Year incYear={incYear} decYear={decYear} year={year} />
      <Month monthChange={monthChange} month={month} />
    </div>
  );
};

Popover.propTypes = {
  showPopover: PropTypes.bool,
  month: PropTypes.number,
  year: PropTypes.number,
  incYear: PropTypes.func,
  decYear: PropTypes.func,
  monthChange: PropTypes.func,
};

export default Popover;
