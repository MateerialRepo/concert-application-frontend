import { useRouter } from "next/router";
import { getConcertById } from "@/helpers/concertHelperFns";
import ConcertItem from "@/components/ConcertItem";
import DUMMY_CONCERTS from "@/data/dummy-data";

const SingleConcert = () => {
  const router = useRouter();
  const concertId = router.query.concertId;
  const item = getConcertById(concertId, DUMMY_CONCERTS);
  console.log(item)

  return (
    <div>
      <p>SingleConcert Page</p>
      <div>
        <ConcertItem
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          date={item.date}
          location={item.location}
        />
      </div>
    </div>
  );
};

export default SingleConcert;
