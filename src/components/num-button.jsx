import React from 'react';
import PropTypes from 'prop-types';

class NumButton extends React.Component {
  constructor(props) {
    super(props);
    NumButton.displayName = 'NumButton';
    NumButton.propTypes = {
      value: PropTypes.string,
      displayValue: PropTypes.string,
      id: PropTypes.string,
      onClick: PropTypes.func
    };
  }

  render() {
    const { displayValue, value, id, onClick } = this.props;
    return <button
      className="key-val"
      value={value}
      id={id}
      onClick={onClick}
    >
      {displayValue}
    </button>;
  }
}

export default NumButton;
