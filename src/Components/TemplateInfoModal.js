import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaInfoCircle } from 'react-icons/fa';

const TemplateInfoModal = () => {
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
          Portfolio website template built from scratch using React and Chakra
          UI. Displays API fetch calls, conditional rendering, advanced css
          skills + more.
        </div>
      </Popup>
    </>
  );
};

export default TemplateInfoModal;
