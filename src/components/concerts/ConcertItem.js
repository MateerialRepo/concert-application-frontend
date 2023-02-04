import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
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
            <DateIcon />
            <time>{clearDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{address}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={concertLink}>
            <span>Buy Ticket</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default ConcertItem;
