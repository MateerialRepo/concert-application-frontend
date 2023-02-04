import ConcertItem from './ConcertItem'
import classes from './ConcertList.module.css'

const ConcertList = (props) => {
    const { items } = props;
    // console.log(props)

  return (
    <>
      <ul className={classes.list}>
         {items.map((item)=> {
           return (
            <ConcertItem
                id={item.id}
                image={item.image}
                title={item.title}
                // description={item.description}
                date={item.date}
                location={item.location}
            />
           )})}     
      </ul>
    </>
  );
}

export default ConcertList