import React from 'react';
import {connect} from 'react-redux';

import {restartGame, auralUpdate} from '../actions';

import './top-nav.css';

export class TopNav extends React.Component {
  restartGame() {
    this.props.dispatch(restartGame());
  } //restartGame()

  auralUpdate() {
    this.props.dispatch(auralUpdate());
  } //auralUpdate()
  
  render() {
    return (
      <div>
          <ul className="clearfix">
            <li><a 
                href="#what" 
                className="what" 
                aria-label="How to play">
                What?</a>
            </li> {/*href="#what"*/}
            <li><a 
                href="#feedback" 
                className="new" 
                aria-label="Start a new game"
                onClick={() => this.onRestartGame()}>
                + New Game</a>
            </li> {/*href="#feedback"*/}
            <li><a                         
                href="#get-status" 
                className="visuallyhidden focusable status-link"
                onClick={() => this.onGenerateAuralUpdate()}>
                Hear state of game</a>
            </li> {/*href="#get-status"*/}
          </ul>
      </div>
    ); 
  } 
  
    
} //export class TopNav

export default connect()(TopNav);

  
