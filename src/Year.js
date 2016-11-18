import React, { PropTypes } from 'react';

const Year = ({ incYear, decYear, year }) => (
  <div className="datepicker-year">
    <button onClick={decYear} className="datepicker-year-dec">
      &lt;
    </button>
    <span className="datepicker-year-value">
      {year}
    </span>
    <button onClick={incYear} className="datepicker-year-inc">
      &gt;
    </button>
  </div>
);

Year.propTypes = {
  year: PropTypes.number,
  incYear: PropTypes.func,
  decYear: PropTypes.func,
};

export default Year;
