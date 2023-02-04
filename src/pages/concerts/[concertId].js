import { useRouter } from "next/router";
import { getConcertById } from "@/helpers/concertHelperFns";
import DUMMY_CONCERTS from "@/data/dummy-data";
import ConcertSummary from "@/components/concert-detail/concert-summary";
import ConcertLogistics from "@/components/concert-detail/concert-logistics";
import ConcertContent from "@/components/concert-detail/concert-content";

const SingleConcert = () => {
  const router = useRouter();
  const concertId = router.query.concertId;
  const item = getConcertById(concertId, DUMMY_CONCERTS);

  if(!item) {
    return <p>Concert not found!</p>
  }

  return (
      <>
        <ConcertSummary title={item.title}/> 
        <ConcertLogistics 
          date={item.date} 
          address={item.location}
          image={item.image}
          imageAlt={item.title}
        />
        <ConcertContent>
          <p>{item.description}</p>
        </ConcertContent>
      </>
  )

  // return (
  //   <div>
  //     <p>Concert Detail Page</p>
  //     <div>
  //       <ConcertItem
  //         key={item.id}
  //         image={item.image}
  //         title={item.title}
  //         description={item.description}
  //         date={item.date}
  //         location={item.location}
  //       />
  //     </div>
  //   </div>
  // );
};

export default SingleConcert;
