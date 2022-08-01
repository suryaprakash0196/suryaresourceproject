import {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../Header'
import {tabsList} from '../Home'
import './index.css'

export default function AddResource() {
  const {id} = useParams()
  const history = useHistory()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleBackClick = () => {
    history.push(`/`)
  }

  async function addResource(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json()
  }

  const notify = () => {
    if (!name.trim()) {
      toast.error('Please enter name')
    } else if (name.trim()?.length > 50) {
      toast.error('Name cannot be more than 50 characters')
    } else if (!description.trim()) {
      toast.error('Please enter description')
    } else if (description.trim()?.length > 150) {
      toast.error('Description cannot be more than 150 characters')
    } else {
      addResource(
        'https://media-content.ccbp.in/website/react-assignment/add_resource.json',
        {name, description},
      ).then(data => {
        console.log(data)
      })
      toast.success('Added the resource', {
        onClose: () => handleBackClick(),
      })
    }
  }

  return (
    <div>
      <Header showAddBtn={false} />
      <div className="addResourceWrapper">
        <div>
          <span
            className="backLink"
            role="presentation"
            onClick={handleBackClick}
          >
            {'<'}
          </span>
          <span>{tabsList.find(el => el.id === id).displayName}</span>
        </div>
        <div>
          <h5>Add a Resource</h5>
        </div>
        <div className="formWrapper">
          <div>Name</div>
          <div>
            <input
              onChange={e => setName(e.target.value)}
              value={name}
              className="nameInput"
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div>Description</div>
          <div>
            <input
              onChange={e => setDescription(e.target.value)}
              value={description}
              className="descriptionInput"
              type="text"
              placeholder="Enter description"
            />
          </div>
          <button
            className="createBtn"
            onClick={notify}
            disabled={!name.trim() || !description.trim()}
          >
            CREATE
          </button>
          <ToastContainer position="bottom-left" />
        </div>
      </div>
    </div>
  )
}
