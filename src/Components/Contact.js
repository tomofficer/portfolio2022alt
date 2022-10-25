import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const country = this.props.data.address.country;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    const email = this.props.data.email;

    return (
      <section id='contact'>
        <Fade bottom duration={1000}>
          <div className='row section-head'>
            <div className='two columns header-col'>
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className='ten columns'>
              <p className='lead'>{message}</p>
            </div>
          </div>
        </Fade>

        <div className='row'>
          <Slide left duration={1000}>
            <div className='eight columns'>
              <div className='contactPic'>
                <img
                  width='600px'
                  src='https://ik.imagekit.io/v66nb6oaq/Portfolio_2022/selfie2_X8ybBe2dt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662508173734'
                  alt=''
                />
              </div>
              {/* <form action='' method='post' id='contactForm' name='contactForm'>
                <fieldset>
                  <div>
                    <label htmlFor='contactName'>
                      Name <span className='required'>*</span>
                    </label>
                    <input
                      type='text'
                      defaultValue=''
                      size='35'
                      id='contactName'
                      name='contactName'
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor='contactEmail'>
                      Email <span className='required'>*</span>
                    </label>
                    <input
                      type='text'
                      defaultValue=''
                      size='35'
                      id='contactEmail'
                      name='contactEmail'
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor='contactSubject'>Subject</label>
                    <input
                      type='text'
                      defaultValue=''
                      size='35'
                      id='contactSubject'
                      name='contactSubject'
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor='contactMessage'>
                      Message <span className='required'>*</span>
                    </label>
                    <textarea
                      cols='50'
                      rows='15'
                      id='contactMessage'
                      name='contactMessage'></textarea>
                  </div>

                  <div>
                    <button className='submit'>Submit</button>
                    <span id='image-loader'>
                      <img alt='' src='images/loader.gif' />
                    </span>
                  </div>
                </fieldset>
              </form> */}

              <div id='message-warning'> Error boy</div>
              <div id='message-success'>
                <i className='fa fa-check'></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className='four columns footer-widgets'>
              <div className='widget widget_contact'>
                <h4>Address</h4>
                <p className='address'>
                  {name}
                  <br />
                  {street} <br />
                  {city} {state}, {country}
                  <br />
                  {zip}
                </p>
              </div>

              <div className='widget widget_contact'>
                <h4>Phone</h4>
                <p className='address'>{phone}</p>
              </div>

              <div className='widget widget_contact'>
                <h4>Email</h4>
                <p className='address'>{email}</p>
              </div>

              <div className='widget widget_contact'>
                <h4>Contact Me</h4>
                <a
                  href='https://us21.list-manage.com/contact-form?u=9064f083c44a027749d2cbcf1&form_id=e9952ffc8a4f3961aa57240528302eb4'
                  target='_blank'
                  rel='noreferrer'>
                  <button className='contactBtn'>Let's Connect!</button>
                </a>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
