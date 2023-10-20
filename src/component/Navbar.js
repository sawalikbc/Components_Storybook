import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'; // Import your Button component


function Navbar({ buttons }) {
  return (
    <nav>
      {buttons.map((button, index) => (
        <Button
          key={index}
          label={button.label}
          size="lg"
          backgroundColor={button.backgroundColor}
        />
      ))}
    </nav>
  );
}

Navbar.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
    })
  ).isRequired,
};

export default Navbar;
