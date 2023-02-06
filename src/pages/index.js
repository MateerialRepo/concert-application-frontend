import ConcertList from '@/components/concerts/ConcertList';
import { getFeaturedConcerts } from '@/helpers/concertHelperFns'
import DUMMY_CONCERTS from '@/data/dummy-data'



export default function HomePage() {

  const featuredConcerts = getFeaturedConcerts(DUMMY_CONCERTS);
  console.log(featuredConcerts)

  return (
    <>
      <main>
        <div>
          <h1>This are the Featured Concerts</h1>
        </div>
        <div>
          <ConcertList items = {featuredConcerts}/>
        </div>
      </main>
    </>
  )
}
