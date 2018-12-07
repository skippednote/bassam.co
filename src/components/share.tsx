import React from 'react';
import { css } from 'react-emotion';

interface Props {
  active?: boolean;
  title: string;
  location: string;
}

class Share extends React.Component<Props> {
  static defaultProps = {
    active: false,
  };

  handleTwitter = () => {
    const { title, location } = this.props;
    const twitterMessage = `"${title}", by @skippednote.\n\n${location}`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      twitterMessage
    )}`;
  };

  handleFacebook = () => {
    const { location } = this.props;
    return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
      location
    )}`;
  };

  render() {
    const { active } = this.props;

    return (
      <div
        className={css`
          display: flex;
          justify-content: center;
          padding: 1rem;
          align-items: center;

          @media (min-width: 1130px) {
            transform: translateX(-15rem);
            position: sticky;
            top: 150px;
            transition: opacity 1s ease-in-out;
            opacity: ${active ? 1 : 0};
            align-self: flex-start;
            background-color: rgba(255, 255, 255, 0.6);
            flex-direction: column;
            width: 50px;
          }

          svg {
            width: 24px;
            display: block;

            @media (max-width: 1129px) {
              margin: 0 1rem;
            }
          }
        `}
      >
        <a
          href={this.handleTwitter()}
          target="_blank"
          rel="noopener"
          className={css`
            @media (min-width: 1130px) {
              margin-bottom: 1rem;
            }
          `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#1da1f2"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
        </a>
        <br />
        <a href={this.handleFacebook()} target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#3b5998"
              d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
            />
          </svg>
        </a>
      </div>
    );
  }
}

export default Share;
