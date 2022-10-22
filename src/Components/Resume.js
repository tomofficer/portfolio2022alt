import React, { Component } from 'react';
import Slide from 'react-reveal';

class Resume extends Component {
  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const employment = this.props.data.employment.map(function (employment) {
      return (
        <div key={employment.company}>
          <h3>{employment.role}</h3>
          <p className='info'>
            {employment.company}
            <span>&bull;</span>
            <em className='date'>{employment.duration}</em>
          </p>
          <p>{employment.description}</p>
        </div>
      );
    });

    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.degree}</h3>
          <p className='info'>
            {education.school} <span>&bull;</span>
            <em className='date'>{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const experience = this.props.data.experience.map(function (experience) {
      return (
        <div key={experience.project}>
          <h3>{experience.project}</h3>
          <p className='info'>
            {experience.role}
            <span>&bull;</span> <em className='date'>{experience.duration}</em>
          </p>
          <p>{experience.description}</p>
        </div>
      );
    });

    const certificates = this.props.data.certificates.map(function (
      certificates
    ) {
      return (
        <div key={certificates.title}>
          <h3>{certificates.title}</h3>
          <p className='info'>
            {certificates.school}
            <span>&bull;</span>{' '}
            <em className='date'>{certificates.duration}</em>
          </p>
          <p>{certificates.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map(function (skills) {
      return (
        <div key={skills.title}>
          <h3>{skills.title}</h3>

          <p>{skills.skills}</p>
        </div>
      );
    });

    return (
      <section id='resume'>
        <Slide left duration={1300}>
          <div className='row work'>
            <div className='three columns header-col'>
              <h1>
                <span>Technical Skills</span>
              </h1>
            </div>

            <div className='nine columns main-col'>{skills}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className='row work'>
            <div className='three columns header-col'>
              <h1>
                <span>Employment</span>
              </h1>
            </div>

            <div className='nine columns main-col'>{employment}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className='row education'>
            <div className='three columns header-col'>
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className='nine columns main-col'>
              <div className='row item'>
                <div className='twelve columns'>{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className='row work'>
            <div className='three columns header-col'>
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className='nine columns main-col'>{experience}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className='row work'>
            <div className='three columns header-col'>
              <h1>
                <span>Certificates</span>
              </h1>
            </div>

            <div className='nine columns main-col'>{certificates}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
