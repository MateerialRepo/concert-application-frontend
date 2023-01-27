import Link from "next/link";
import { readableDateTime } from "@/helpers/date-timeHelper";
import classes from "./ConcertItem.module.css";

const ConcertItem = ({ id, image, title, description, date, location }) => {
  const clearDate = readableDateTime(date);
  const address = location.replace(", ", "\n");
  const concertLink = `/concerts/${id}`;

  return (
    <li key={id} className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h3>{title}</h3>
          <div>
            <p>{description}</p>
          </div>
          <div className={classes.date}>
            <time>{clearDate}</time>
          </div>
          <div className={classes.address}>
            <address>{address}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={concertLink}>
            <button>Buy Ticket</button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ConcertItem;
