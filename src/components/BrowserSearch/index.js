import './index.css'

const BrowserSearch = props => {
  const {detailsList} = props

  const {timeAccessed, logoUrl, title, domainUrl} = detailsList

  return (
    <li>
      <div className="details-container">
        <p className="timeaccessed">{timeAccessed}</p>
        <img src={logoUrl} className="app-icons" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainurl">{domainUrl}</p>
      </div>
      <div className="delete-container">
        <button type="button" testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserSearch
