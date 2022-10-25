import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaInfoCircle } from 'react-icons/fa';

const PortfolioInfoModal = () => {
  return (
    <Popup
      trigger={
        <a>
          <FaInfoCircle />
        </a>
      }
      position='right center'>
      <div>Popup content here !!</div>
    </Popup>
  );
};

export default PortfolioInfoModal;
