import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaInfoCircle } from 'react-icons/fa';

const FlashcardInfoModal = () => {
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
          Full stack flashcard app built using the PERN stack. Demonstrates
          important, commonly used CRUDL operations and ability to implement a
          RESTful API.
        </div>
      </Popup>
    </>
  );
};

export default FlashcardInfoModal;
