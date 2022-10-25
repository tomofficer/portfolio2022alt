import React, { Component } from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-reveal';
import { FaLink, FaCode, FaInfoCircle } from 'react-icons/fa';

import LeadrProInfoModal from './LeadrProInfoModal';
import GithubInfoModal from './GithubInfoModal';
import TemplateInfoModal from './TemplateInfoModal';
import FlashcardInfoModal from './FlashcardInfoModal';
import PrivateRepoModal from './PrivateRepoModal';

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = projects.image;

      // 'images/portfolio/' +  (OG path for default images)

      return (
        <div key={id++} className='columns portfolio-item'>
          <div className='item-wrap'>
            <Zmage alt={projects.title} src={projectImage} />
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#e0e0de',
              }}>
              {projects.title}
              <a href={projects.url} target='_blank' rel='noreferrer'>
                <FaLink />
              </a>
              {projects.title === 'LeadrPro' && (
                <>
                  <PrivateRepoModal />
                </>
              )}
              {projects.title !== 'LeadrPro' && (
                <a href={projects.github} target='_blank' rel='noreferrer'>
                  <FaCode />
                </a>
              )}

              {projects.title === 'LeadrPro' && <LeadrProInfoModal />}
              {projects.title === 'Portfolio Website Template' && (
                <TemplateInfoModal />
              )}
              {projects.title === 'Flashcard Study App' && (
                <FlashcardInfoModal />
              )}
              {projects.title === 'GitHub Explorer App' && <GithubInfoModal />}
              {/* <a href={projects.github} target='_blank' rel='noreferrer'>
                <FaInfoCircle />
              </a> */}
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <section id='portfolio'>
          <Fade left duration={1000} distance='40px'>
            <div className='row'>
              <div className='twelve columns collapsed'>
                <h1>Check out some of my work!</h1>

                <div
                  id='portfolio-wrapper'
                  className='bgrid-quarters s-bgrid-thirds cf'>
                  {projects}
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </>
    );
  }
}

export default Portfolio;
