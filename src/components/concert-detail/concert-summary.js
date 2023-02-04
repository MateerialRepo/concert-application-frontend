import classes from "./concert-summary.module.css";

function ConcertSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default ConcertSummary;
