import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import ZepcionsMinus from '@zlab-de/zel-react-icons/ZepiconsMinus';
import ZepiconsPlus from '@zlab-de/zel-react-icons/ZepiconsPlus';

function NumberInput({ label, count, onChange, onPlus, onMinus, ...other }) {
  const handleChange = event => {
    let value = parseInt(event.target.value, 10);
    let count = isNaN(value) ? 0 : value;
    onChange(count);
  };

  return (
    <div className="zep-numberinput" {...other}>
      <IconButton onClick={onMinus}>
        <ZepcionsMinus />
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
        <ZepiconsPlus />
      </IconButton>
    </div>
  );
}

NumberInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPlus: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default NumberInput;
