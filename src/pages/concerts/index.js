import ConcertList from '@/components/ConcertList';
import DUMMY_CONCERTS from '@/data/dummy-data';

const Concerts = () => {
  console.log(DUMMY_CONCERTS)

  return (
    <>
      <div>
        <h1>All Concerts</h1>
        <div>
            <ConcertList items={DUMMY_CONCERTS} />
        </div>
      </div>
    </>
  );
}

export default Concerts