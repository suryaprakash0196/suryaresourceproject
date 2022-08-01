import React from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

export default function Header(props) {
  const {showAddBtn, activeTab, tabOptions} = props
  const history = useHistory()

  const handleAddClick = () => {
    history.push(`/${activeTab}/addResource`)
  }

  return (
    <div className="headerWrapper">
      <div>Image </div>
      {showAddBtn && tabOptions.resource !== activeTab && (
        <button className="addBtn" onClick={handleAddClick}>
          + Add
        </button>
      )}
    </div>
  )
}
