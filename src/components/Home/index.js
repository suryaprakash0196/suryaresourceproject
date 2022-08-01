import React, {useState, useEffect} from 'react'
import Header from '../Header'
import Body from '../Body'

export const tabOptions = {
  resource: 'resource',
  request: 'request',
  user: 'user',
}

export const tabsList = [
  {
    id: tabOptions.resource,
    displayName: 'Resources',
  },
  {
    id: tabOptions.request,
    displayName: 'Requests',
  },
  {
    id: tabOptions.user,
    displayName: 'Users',
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabOptions.resource)
  const [data, setData] = useState([])

  const getData = async () => {
    const apiUrl =
      'https://media-content.ccbp.in/website/react-assignment/resources.json'
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    setData(fetchedData)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleTabChange = tabId => {
    setActiveTab(tabId)
  }

  return (
    <div>
      <Header showAddBtn activeTab={activeTab} tabOptions={tabOptions} />
      <Body
        tabsList={tabsList}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        data={data}
        tabOptions={tabOptions}
      />
    </div>
  )
}
