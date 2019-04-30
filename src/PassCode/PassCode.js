
import { h } from 'hyperapp'
import './PassCode.css'

export default ({ s: { pageInputError, pageInput }, a, go }) => (
  <div class="PassCode">
    <h1>
      Have a great day bb!
    </h1>
    <h2>
      Put in an answer to see if you got it right!
    </h2>
    <div class="form">
      { pageInputError ? <div class="passCodeInputError">{ pageInputError }</div> : '' }
      <div class="passCodeInput">
        <input class="passCodeInput input" onchange={a.pageInputChange} value={pageInput} />
      </div>
      <div class="passCodeSubmit">
        <button class="passCodeSubmit button" onclick={() => a.submitPage(go)}>Try Answer</button>
      </div>
    </div>
  </div>
)
