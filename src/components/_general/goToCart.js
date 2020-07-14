import React from 'react';
import { Link } from 'react-router-dom';

function goToChart() {
  return (
    <Link to="/cart" data-testid="shopping-cart-button">
      <i className="fas fa-shopping-cart fa-2x" style={{ color: '#3c096c' }} />
    </Link>
  );
}

export default goToChart;
