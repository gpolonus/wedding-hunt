
import { h } from 'hyperapp'
import './Bacchus.css'
import Page from '../../components/Page/Page'
import ScrambleInput, { state as ScrambleState, actions as ScrambleActions} from '../../components/ScrambleInput/ScrambleInput'

// TODO: grab that pic of queta bald and me kissing her head

const answer = 'ODDBALL'

const view = ({ s: { correct, scramble: scrambleState }, a: { solved, scramble: scrambleActions } }) => (
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
          answer={answer}
          highlights={correct ? '_DDBA__' : ''}
          solved={solved}
          s={scrambleState}
          a={scrambleActions}
        />
      </div>
    </Page>
  </div>
)

const state = {
  correct: false,
  scramble: ScrambleState
}

const actions = {
  solved: (val) => () => ({ correct: val === answer }),
  scramble: ScrambleActions
}

export default { view, state, actions }