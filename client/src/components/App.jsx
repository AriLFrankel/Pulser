/*    App structure

                                                    +-------+
                                                    |  App  |
                                                    +---+---+
                                                        |
                +------------------------------+--------+-----------+-----------------------------------------------------------------------
                |                              |                    |                                                                      |
        +-------+-----------------+  +---------+-----------+  +-----+------------------------+  +------+--+                     +----------+------+
        |    DashboardView        |  |     AudienceView    |  |    PresenterViewContainer    |  ||     |  |                     |  GuestView      |
        +-------------------------+  +---------------------+  +------------------------------+ --------+--+                     +-----------------+
        | +LogoutButton           |  | +LogoutButton       |  |                              |            |                     | |JoinPresBox    |
        |                         |  |                     |  | +--------------------------+ |  --------+ |                     | |LogoutButton   |
        | +NewPresButton          |  | +Slides             |  | |    PresenterView         | |ftPane    | |                     +-----------------+
        |                         |  |                     |  | +--------------------------+ | ---------+ |
        | +SearchBar              |  | +-----------------+ |  | |    +LogoutButton         |i|ksTable   | |
        |                         |  | |  FeedbackBox    | |  | |                          | |          | |
        | +UserInfo               |  | +-----------------+ |  | |    +TitleBar             | |          | |
        |                         |  | | +FeedbackButton | |  | |                          | |          | |
        | +---------------------+ |  | |                 | |  | |    +Slides               | |          | |
        | |   DashMainContent   | |  | +-----------------| |  | |                          | +----------+ |
        | +---------------------+ |  |                     |  | |    +SideBar              | |            |
        | |                     | |  | +-----------------+ |  | |                          | | ---------+ |
        | | +-----------------+ | |  | |  QuestionBox    | |  | | +----------------------+ |R|ghtPane   | |
        | | |  PresPreviews   | | |  | +-----------------+ |  | | |  PresenterView       | | +----------+ |
        | | +-----------------+ | |  | |  +Question      | |  | | +----------------------+ | |MainPane  | |
        | | | +RecentPresMenu | | |  | |                 | |  | | |  |LineChart          | |r|Comment   | |
        | | |                 | | |  | +-----------------+ |  | | +----------------------+ |h|rt        | |
        | | | +PresThumbnail  | | |  |                     |  | |                          | +----------- |
        | | |    (many)       | | |  |    +AudThumbs       |  | | +----------------------+ | |            |
        | | |                 | | |  |                     |  | | |  QuestionBox         | | |            |
        | | +-----------------| | |  +---------------------|  | | +----------------------+ | |            |
        | |                     | |                           | | |  |Question           | | +------------+
        | |   ......OR......    | |                           | | |                      | | |
        | |                     | |                           | | +----------------------+ | |
        | | +-----------------+ | |                           | |                          | |
        | | |  SearchResults  | | |                           | | +PresThumbs              | |
        | | +-----------------+ | |                           | |                          | |
        | | | +PresThumbNail  | | |                           | +--------------------------+ |
        | | |    (many)       | | |                           |                              |
        | | |                 | | |                           +------------------------------+
        | | +-----------------| | |
        | |                     | |
        | +---------------------| |
        |                         |
        | +JoinPresBox            |
        |                         |
        +-------------------------+


Courtesy of http://asciiflow.com/
*/


import React, { Component } from 'react';
import $ from 'jquery';
import DashboardView from './DashboardView';
import getUserData from '../util/getUserData';
import { connect } from 'react-redux';
import GuestView from './GuestView';
import '../css/Button.css';
import '../css/Auth.css';
import '../css/body.css';

// Primary App component.
class App extends Component {
  componentWillMount () {
    // store user data when App loads.
    getUserData((user) => {
      this.props.dispatch({
        type: 'STORE_USER',
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        id: user.id
      });
    });
  }

  render () {
    if (this.props.user.name === 'guest') {
      return (
        <GuestView/>
      );
    } else {
      return (
        <DashboardView/>
      );
    }
  };
};

const mapStateToProps = (state) => {
  return { dispatch: state.dispatch, user: state.user };
};

export default connect(mapStateToProps)(App);
