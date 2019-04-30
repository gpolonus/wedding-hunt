
import { h } from 'hyperapp'
import './ScrambleLetter.css'

export default ({ update, value, focused, highlighted, disabled}) => (
  <span class={`ScrambleLetter ${highlighted ? 'highlighted' : ''}`}>
    <input
      disabled={disabled}
      type="text"
      oninput={update}
      value={value === '_' ? '' : value[0]}
      maxlength="1"
      onclick={() => update({target: {value: '_'}})}
      onupdate={ref => (focused && value === '_') ? ref.focus() : ref.blur()}
    />
  </span>
)
