import PropTypes from 'prop-types';
import React from 'react';

const HelloWorld = ({ name, updateName }) => (
  <div>
    <h4>This form element is render from react/redux</h4>
    <h4>
      Hello, {name}!
    </h4>
    <form >
      <label htmlFor="name">
        Say hello to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HelloWorld;
