import React, { Component } from 'react';
import { css } from 'react-emotion';
import Social from './social';
import Separtor from './separator';
import Hearts from './hearts';

interface State {
  fam: boolean;
  counter: number;
}

class Footer extends Component<{ copyrights: string }, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      fam: false,
      counter: 0,
    };
    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks() {
    this.setState({ counter: this.state.counter + 1 }, () => {
      const { counter } = this.state;
      if (counter === 3) {
        this.setState({ fam: true }, () =>
          window.scrollTo(0, document.body.scrollHeight)
        );
      }
    });
    setTimeout(() => this.setState({ counter: 0 }), 1e3);
  }

  render() {
    const { copyrights } = this.props;
    const { fam } = this.state;

    return (
      <footer
        className={css`
          padding-top: 6rem;

          @media (max-width: 768px) {
            padding-top: 4rem;
          }
        `}
        onClick={this.handleClicks}
      >
        <Separtor />
        <div
          className={css`
            font-size: 90%;
          `}
        >
          {copyrights}
        </div>
        <Social />
        {fam ? <Hearts /> : null}
      </footer>
    );
  }
}

export default Footer;
