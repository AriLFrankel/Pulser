// component for display user's summary
import React, { Component } from 'react';
import SummaryMainPane from './SummaryMainPane';
import SummaryComment from './SummaryComment';

class SummaryUser extends Component {
  render () {
    return (

      <div>
        <SummaryMainPane userId={this.props.userId}/>
        <SummaryComment/>
      </div>
    );
  }
}

export default SummaryUser;
