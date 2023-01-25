import ConcertItem from './ConcertItem'

const ConcertList = (props) => {
    const { items } = props;
    console.log(props)

  return (
    <>
      <ul>

         {items.map((item)=>{
            return(
                    <ConcertItem
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    location={item.location}
                    />
            )
         })}   
        
      </ul>
    </>
  );
}

export default ConcertList