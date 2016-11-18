import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import 'jsdom-global/register';

const test = addAssertions(tape, { jsxEquals });

export const hasMethod = (t, method, name) => {
  t.equal(
    typeof method,
    'function',
    `should have ${name} method`
  );
};

export default test;
