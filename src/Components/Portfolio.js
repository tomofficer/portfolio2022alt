import React, { Component } from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-reveal';
import { FaLink, FaCode } from 'react-icons/fa';
import { IconBase } from 'react-icons';

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = 'images/portfolio/' + projects.image;

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
              }}>
              {projects.title}
              <a href={projects.url}>
                <FaLink />
              </a>
              <a href={projects.github}>
                <FaCode />
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id='portfolio'>
        <Fade left duration={1000} distance='40px'>
          <div className='row'>
            <div className='twelve columns collapsed'>
              <h1>Check out some of my work</h1>

              <div
                id='portfolio-wrapper'
                className='bgrid-quarters s-bgrid-thirds cf'>
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
