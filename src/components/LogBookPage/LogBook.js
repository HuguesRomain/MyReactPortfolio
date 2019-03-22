import React, { Component } from 'react';
import LogBookCard from './LogBookCards';
import LogBookData from '../../data/logbookData';

class LogBook extends Component {
  state = {
    LogBookDataState: {LogBookData},
  }
  
  render () {
    const StoryCards = Object.keys(this.state.LogBookDataState.LogBookData.MyLogBook).map(key => <LogBookCard key={key} detailsStory={this.state.LogBookDataState.LogBookData.MyLogBook[key]}></LogBookCard>)
    return (
      <div className='LogBook'>
        {StoryCards}
      </div>
    )
  }
}

export default LogBook