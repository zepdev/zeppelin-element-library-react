import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';

function NumberInput({ label, count, onChange, onPlus, onMinus, ...other }) {
  const handleChange = event => {
    let value = parseInt(event.target.value, 10);
    let count = isNaN(value) ? 0 : value;
    onChange(count);
  };

  return (
    <div className="zep-numberinput" {...other}>
      <IconButton onClick={onMinus}>
        <svg
          class="zep-button__icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>{{ minustitle }}</title>
          <path fill="currentColor" d="M25.333 17.333h-18.667v-2.667h18.667z" />
        </svg>
      </IconButton>
      <label className="zep-visually-hidden" htmlFor={`numberInput_${label}`}>
        {label}
      </label>
      <input
        type="text"
        id={`numberInput_${label}`}
        className="zep-input zep-input--number"
        value={count}
        onChange={handleChange}
      />
      <IconButton onClick={onPlus}>
        <svg
          class="zep-button__icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>{{ plustitle }}</title>
          <path fill="currentColor" d="M25.333 17.333h-8v8h-2.667v-8h-8v-2.667h8v-8h2.667v8h8z" />
        </svg>
      </IconButton>
    </div>
  );
}

NumberInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPlus: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default NumberInput;
