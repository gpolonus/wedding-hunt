
import { h, app } from 'hyperapp'
import './index.css'
import { views, states, actions } from './stuff'
import PassCode from './PassCode/PassCode'

const initState = (error = null) => ({
  page: '',
  home: {
    pageInput: '',
    pageInputError: error,
  },
  ...states
})

const allActions = {
  goToPage: (page) => () => ({ ...initState(views[page] ? null : 'The redirected page does not exist.' ), page }),
  home: {
    pageInputChange: ({ target: { value: pageInput } }) => () => ({ pageInput }),
    submitPage: (go) => ({ pageInput }) => {
      const fixedPageInput = pageInput.replace(/[^a-zA-Z]/g, '').toLowerCase()
      if(views[fixedPageInput]) {
        go(fixedPageInput)
      } else {
        return { pageInputError: 'Wrong passcode! Try again!' }
      }
    }
  },
  ...actions
}

const view = (s, a) => {
  const V = views[s.page]
  return (
    <div>
      <div class="main">
        {
          V ?
            <V s={s[s.page]} a={a[s.page]} go={a.goToPage} /> :
            <PassCode s={s.home} a={a.home} go={a.goToPage} />
        }
      </div>
    </div>
  )
}

app(initState(), allActions, view, document.body)
