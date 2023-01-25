import Link from "next/link";
import { readableDateTime } from "@/helpers/date-timeHelper";

const ConcertItem = ({ key, image, title, description, date, location }) => {
  const clearDate = readableDateTime(date);
  const address = location.replace(", ", "\n");
  const concertLink = `/concerts/${key}`;

  return (
    <>
      <li key={key}>
        <div>
          <img src={"/" + image} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <time>{clearDate}</time>
        </div>
        <div>
          <address>{address}</address>
        </div>
        <div>
          <Link href={concertLink}>
            <button>Buy Ticket</button>
          </Link>
        </div>
      </li>
    </>
  );
};

export default ConcertItem;
