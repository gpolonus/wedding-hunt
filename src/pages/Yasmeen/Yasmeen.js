
import { h } from 'hyperapp'
import Page from '../../components/Page/Page';

const view = ({ go }) => (
  <div class="Yasmeen">
    <Page pic="https://honcompany.atlassian.net/secure/projectavatar?pid=10108&avatarId=10200&size=xxlarge">
      <h1>
        Did you mean to put in Ms. DooDooHead?
      </h1>
      <h2>
        I think you meant to put in Ms. DooDooHead!
      </h2>
      <h2>
        <span class="msdoodooheadlink" onclick={() => go('msdoodoohead')}>
          Go there right now!
        </span>
      </h2>
    </Page>
  </div>
)

export default { view }
