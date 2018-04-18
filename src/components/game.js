import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export class Game extends React.Component {
  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

const mapStateProps = state => ({
  feedback: state.feedback || '',
  guesses: state.guesses || '',
  auralStatus: state.auralStatus || ''
})

export default connect(mapStateProps)(Game);