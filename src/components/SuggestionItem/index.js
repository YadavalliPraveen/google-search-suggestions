import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateValue} = props
  const {suggestion} = suggestionDetails

  const updateInputValue = () => {
    updateValue(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <img
        onClick={updateInputValue}
        className="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
