
import { h } from 'hyperapp'
import './ScrambleInput.css'
import ScrambleLetter from './ScrambleLetter/ScrambleLetter'

const makeWordsArray = (words, thing) => Array(words.length).fill().map((_, i) => Array(words[i].length).fill(thing).join(''))
const splitValue = (val) => val.split(' ').map(valWord => valWord.split('').map(valLetter => valLetter !== '_'))
const correctAnswer = (v, a) => v.toLowerCase() === a.toLowerCase()

export const state = {
  focused: [0, -1],
  value: ''
}

export const actions = {
  update: ({ value, l, fw, fl, answer }) => (s) => {
    const ret = { value }
    if(!correctAnswer(value, answer) && value !== s.value && l !== '_') {
      const words = value.split(' ')
      if(fl + 1 > words[fw].length) {
        ret.focused = [fw + 1, 0]
      } else {
        ret.focused = [fw, fl + 1]
      }
    } else {
      ret.focused = [fw, fl]
    }

    return ret
  },
  reset: () => () => state
}

export default ({
    // static props
    answer,
    highlights,

    // styling props
    className,
    style = {},

    // action prop for parent
    solved,

    // sliced state and actions
    s: { focused = [-1, -1], value },
    a: { update, reset }
}) => {

  let words
  if(!value) {
    words = makeWordsArray(answer.split(' '), '_')
  } else {
    words = value.split(' ')
  }

  if(highlights) {
    highlights = splitValue(highlights)
  } else {
    highlights = makeWordsArray(words)
  }

  const [ focusedWord, focusedLetter ] = focused

  const updateScramble = (letter, wordNum, letterNum) => {
    if(letter.length === 1) {
      letter = letter.replace(/[^a-zA-Z]/g, '_')
      letter = letter || '_'
      const brokenWord = words[wordNum].split('')
      brokenWord[letterNum] = letter
      words[wordNum] = brokenWord.join('')
      update({value: words.join(' '), l: letter, fw: wordNum, fl: letterNum, answer})
    }
  }

  const renderInputs = words.map((word, wordNum) => {
    const letters = word.split('')
    return (
      <div class="ScrambleWord">
        {
          letters.map((letter, letterNum) => (
            <ScrambleLetter
              disabled={correctAnswer(value, answer)}
              update={({ target: { value: letter } }) => updateScramble(letter, wordNum, letterNum)}
              value={letter}
              focused={focusedWord === wordNum && focusedLetter === letterNum}
              highlighted={highlights[wordNum][letterNum]}
            />
          ))
        }
      </div>
    )
  })

  return (
    <div class={`ScrambleInput ${className}`} style={style}>
      { renderInputs }
      {
        value === answer ? null :
          <button onclick={reset}>Clear</button>
      }
    </div>
  )
}
