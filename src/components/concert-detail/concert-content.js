import classes from "./concert-content.module.css";

function ConcertContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

export default ConcertContent;
