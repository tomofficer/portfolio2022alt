import React, { Component, useState } from 'react';
import Fade from 'react-reveal';
import { FaNewspaper } from 'react-icons/fa';

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic =
      'https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/selfie1_g2mRpUuHe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662507998685';
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;
    const indeedResults = this.props.data.indeedResults;

    //todo ==> modal logic below, needs to be converted to class based component
    // const [showModal, setShowModal] = useState(false);

    // const modalClick = () => {
    //   setShowModal(true);
    // };

    // const closeModalClick = () => {
    //   setShowModal(false);
    // };

    return (
      <section id='about'>
        <Fade duration={1000}>
          <div className='row'>
            <div className='nine columns main-col'>
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className='row'>
                <div className='columns contact-details'>
                  <h2>Let's Connect!</h2>
                  <p className='address'>
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className='columns download'>
                  <p>
                    <a
                      href={resumeDownload}
                      className='button'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='fa fa-download'></i>Download Resume
                    </a>
                    <a
                      style={{ marginLeft: '10px', background: 'red' }}
                      href={indeedResults}
                      className='button btn indeed-btn'
                      target='_blank'
                      rel='noreferrer'>
                      <FaNewspaper style={{ marginRight: '10px' }} /> Indeed
                      Test Results
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='three columns'>
              <img className='profile-pic' src={profilepic} />
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

/* {showModal && (
          <>
            <div className='modal-overlay'></div>
            <div className='modal'>
              <h3>Indeed Test Results</h3>
            </div>
          </>
        )} */
