import React, { Component } from 'react';
import { css } from 'react-emotion';
class NewsletterForm extends Component {
  handleSubmit = () => {
    window.open('https://buttondown.email/skippednote', 'popupwindow');
  };
  render() {
    return (
      <div>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/skippednote"
          method="post"
          target="popupwindow"
          onSubmit={this.handleSubmit}
          className={css`
            text-align: center;
            margin-bottom: 3rem;
          `}
        >
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="Your email (you@domain.com)"
            className={css`
              height: 40px;
              line-height: 40px;
              border: none;
              padding: 0.5rem;
              width: 250px;
            `}
          />
          <input type="hidden" value="1" name="embed" />
          <input
            type="submit"
            value="Subscribe"
            className={css`
              height: 40px;
              lineheight: 40px;
              border: none;
              padding: 0 0.5rem;
              background: #50afe9;
              color: white;
              font-weight: bold;
            `}
          />
        </form>
      </div>
    );
  }
}

export default NewsletterForm;
