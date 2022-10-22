import React, { Component } from 'react';
import Fade from 'react-reveal';

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target='_blank' rel='noreferrer'>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className='row'>
          <Fade bottom>
            <div className='twelve columns'>
              <ul className='social-links'>{networks}</ul>

              <ul className='copyright'>
                <li>&copy; Copyright 2022 Tom Officer Web Dev</li>
              </ul>
            </div>
          </Fade>

          <div id='go-top'>
            <a className='smoothscroll' title='Back to Top' href='#home'>
              <i className='icon-up-open'></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

/* extra network data 
 {
        "name":"facebook",
        "url":"https://github.com/nordicgiant2/react-nice-resume",
        "className":"fa fa-facebook"
      },
      {
        "name":"twitter",
        "url":"http://twitter.com",
        "className":"fa fa-twitter"
      },
       {
        "name":"instagram",
        "url":"http://instagram.com/tbaker_x",
        "className":"fa fa-instagram"
      },

*/
