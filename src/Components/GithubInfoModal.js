import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaInfoCircle } from 'react-icons/fa';

const GithubInfoModal = () => {
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
          Front end web application built from scratch that fetches and
          conditionally renders data from the GitHub API based on the user's
          search queries.
        </div>
      </Popup>
    </>
  );
};

export default GithubInfoModal;
