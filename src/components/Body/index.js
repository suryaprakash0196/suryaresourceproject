import {useState, useEffect} from 'react'
import './index.css'

export default function Body(props) {
  const {tabsList, activeTab, handleTabChange, data, tabOptions} = props
  const [filteredData, setFilteredData] = useState([])
  const [searchVal, setSearchVal] = useState('')

  useEffect(() => {
    if (activeTab === tabOptions.resource) {
      const list = data.filter(el =>
        el.tag?.toLowerCase().includes(searchVal?.toLowerCase()),
      )
      setFilteredData(list)
    } else {
      let list = data.filter(el => el.tag === activeTab)
      list = list.filter(el =>
        el.tag?.toLowerCase().includes(searchVal?.toLowerCase()),
      )
      setFilteredData(list)
    }
  }, [activeTab, data, searchVal])

  useEffect(() => {
    setSearchVal('')
  }, [activeTab])

  return (
    <div className="body-bg">
      <div className="tabsWrapper">
        {tabsList.map(tab => (
          <span
            className={`tabItem ${activeTab === tab.id ? 'activeTab' : ''}`}
            role="presentation"
            onClick={() => handleTabChange(tab.id)}
            key={tab.id}
          >
            {tab.displayName}
          </span>
        ))}
      </div>
      <div className="searchWrapper">
        <input
          onChange={e => setSearchVal(e.target.value)}
          className="searchInput"
          type="text"
          value={searchVal}
          placeholder="Search"
        />
      </div>
      <div className="resultsWrapper">
        {filteredData.map(item => (
          <div className="box" key={item.title}>
            <div className="itemHeaderWrapper">
              <img src={item.icon_url} width="44" height="44" />
              <div className="titleWrapper">
                <span className="title">{item.title}</span>
                <span className="category">{item.category}</span>
              </div>
            </div>

            <a
              className="link"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.link}
            </a>
            <div className="description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
