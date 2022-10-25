import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaCode } from 'react-icons/fa';

const PrivateRepoModal = () => {
  return (
    <Popup
      trigger={
        <a>
          <FaCode />
        </a>
      }
      position='right center'>
      <div style={{ width: '250px', color: 'red' }}>
        Sorry, this is a private repo!
      </div>
    </Popup>
  );
};

export default PrivateRepoModal;
