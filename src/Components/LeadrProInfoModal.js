import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaInfoCircle } from 'react-icons/fa';

const LeadrProInfoModal = () => {
  return (
    <>
      {/* <div className='modal-overlay'></div> */}
      <Popup
        trigger={
          <a>
            <FaInfoCircle />
          </a>
        }
        position='left bottom'>
        <div style={{ width: 'auto' }}>
          A software marketplace for Saas companies to host video sales demos.
          Full stack, production-level web application built using the PERN
          stack. (I am 1 of the 3 founding engineers)
        </div>
      </Popup>
    </>
  );
};

export default LeadrProInfoModal;
