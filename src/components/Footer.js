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
          href="https://stackoverflow.com/users/2581314/erluxmanhttps://stackoverflow.com/users/458193/dan-abramov"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stackoverflow
        </a>
      </footer>
    );
  }
}

export default Footer;
