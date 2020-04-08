import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://mobile.twitter.com/erluxman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/erluxman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://stackoverflow.com/users/2581314/erluxman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stackoverflow
        </a>{' '}
        <br />
        Inspired from :{' '}
        <a
          href="https://overreacted.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          overreacted.io
        </a>
      </footer>
    );
  }
}

export default Footer;
