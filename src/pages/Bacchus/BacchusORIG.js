
import { h } from 'hyperapp'
import './Bacchus.css'
import Page from '../../components/Page/Page'
import ScrambleInput from '../../components/ScrambleInput/ScrambleInput'

// TODO: grab that pic of queta bald and me kissing her head

// Answer for this one: ODDBALL

const answer = 'ODDBALL'

const view = ({ s: { value, focused, correct }, a: { update, reset } }) => (
  <div class="Bacchus">
    <Page pic={''}>
      <h1>
        You did it!
      </h1>
      <h2>
        Now just solve this next puzzle to get one step closer to the final prize:
      </h2>
      <div class="scramble">
        <p>
          This weird sphere event was where we some good buns talk for ahwile, then it was really dark on the way home.
        </p>
        <ScrambleInput
          correct={correct}
          value={value}
          highlights={correct ? '_DDBA__' : ''}
          update={update}
          focused={focused}
          reset={reset}
        />
      </div>
    </Page>
  </div>
)

const state = {
  value: '_______',
  focused: [0, -1],
  correct: false
}

const actions = {
  update: ({ value, l, fw, fl }) => (s) => {
    const ret = { value }
    if(value.toLowerCase() === answer.toLowerCase()) {
      ret.correct = true
    } else if(value !== s.value && l !== '_') {
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

export default { view, state, actions }