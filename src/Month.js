import React, { PropTypes } from 'react';


const Month = ({ monthChange }) => {
  const months = [
    [
      { display: 'Jan', numeric: 1 },
      { display: 'Feb', numeric: 2 },
      { display: 'Mar', numeric: 3 },
    ],
    [
      { display: 'Apr', numeric: 4 },
      { display: 'May', numeric: 5 },
      { display: 'Jun', numeric: 6 },
    ],
    [
      { display: 'Jul', numeric: 7 },
      { display: 'Aug', numeric: 8 },
      { display: 'Sep', numeric: 9 },
    ],
    [
      { display: 'Oct', numeric: 10 },
      { display: 'Nov', numeric: 11 },
      { display: 'Dec', numeric: 12 },
    ],
  ];

  return (
    <table className="datepicker-month">
      <tbody>
        {months.map((row, i) => (
          <tr key={i}>
            {row.map((m, j) => (
              <td key={j}>
                <button onClick={monthChange} data-month={m.numeric}>
                  {m.display}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Month.propTypes = {
  monthChange: PropTypes.func,
};

export default Month;
