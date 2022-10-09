import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'
import Breadcrumbs from '../components/breadcrumbs'
import ContentGrid from '../components/content-grid'
import { getNavigationWithDesc } from '../lib/content'

export async function getStaticProps(context) {
  const navigation = await getNavigationWithDesc('specs', '/specs')
  return { props: { navigation } }
}

export default function Specs({ navigation }) {
  const pages = [{ name: 'Specs', href: '/specs', current: true }]
  return (
    <div>
      <Meta title="Specifications" />
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-4">
        <Breadcrumbs pages={pages} />
      </div>
      <div className="flex max-w-4xl mx-auto">
        <div className="flex-1 px-4">
          <ContentGrid
            pages={navigation.filter((page) => page.href !== '/specs')}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
