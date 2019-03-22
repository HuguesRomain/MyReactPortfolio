import React from 'react'

const LogBookCard = ({detailsStory}) => {
  return (
  <div className='LogBookCards'>
      <div className="LogBook__elements">
      <div className="LogBook__date">
          {detailsStory.Date}
      </div>
      <div className="LogBook__story">
          {detailsStory.descritpion}
      </div>
      </div>
    </div>
  )
}

export default LogBookCard