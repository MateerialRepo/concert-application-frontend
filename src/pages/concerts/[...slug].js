import { useRouter} from 'next/router'


const FilteredConcertPage = () => {

  const router = useRouter()
  console.log(router.query.slug);

  return (
    <div>
      <p>slugRoute for our filtered Concert searches</p>
      <p>The slug in the url is {router.query.slug}</p>
    </div>
  );
}

export default FilteredConcertPage;