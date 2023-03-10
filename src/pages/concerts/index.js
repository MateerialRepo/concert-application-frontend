import DUMMY_CONCERTS from "@/data/dummy-data";
import ConcertList from "@/components/concerts/ConcertList";

const Concerts = () => {
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
};
 
export default Concerts;
