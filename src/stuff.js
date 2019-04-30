
import Yasmeen from './pages/Yasmeen/Yasmeen'
import MsDooDooHead from './pages/MsDooDooHead/MsDooDooHead'
// import Denzel from './page/Denzel/Denzel'
// import Audrey from './page/Audrey/Audrey'
// import Aurora from './page/Aurora/Aurora'
// import Queta from './page/Queta/Queta'
// import Carolyn from './page/Carolyn/Carolyn'
import Bacchus from './pages/Bacchus/Bacchus'
// import Brady from './page/Brady/Brady'
// import Shoehorn from './page/Shoehorn/Shoehorn'
// import MyAlwaysAndForever from './page/MyAlwaysAndForever/MyAlwaysAndForever'
// import Bjtabhaa from './page/Bjtabhaa/Bjtabhaa'

const pages = {

  // Pages for the end where the peeps put their phones together
  yasmeen: Yasmeen,
  msdoodoohead: MsDooDooHead,
  // denzel: Denzel,
  // audrey: Audrey,
  // aurora: Aurora,
  // queta: Queta,
  // enriqueta: Queta,
  // caroline: Carolyn,
  // carol: Carolyn,
  // carolyn: Carolyn,
  // carollyn: Carolyn,

  // Pages for the scrambles
  bacchus: Bacchus,
  // brady: Brady,
  // shoehorn: Shoehorn,
  // myalwaysandforever: MyAlwaysAndForever,
  // bjtabhaa: Bjtabhaa,
}

const { views, states, actions } = Object.entries(pages).reduce((ac, [name, { view, state, actions }]) => ({
  views: { ...ac.views, [name]: view ? view : {} },
  states: { ...ac.states, [name]: state ? state : {} },
  actions: { ...ac.actions, [name]: actions ? actions : {} },
}), {})

export { views, states, actions }
