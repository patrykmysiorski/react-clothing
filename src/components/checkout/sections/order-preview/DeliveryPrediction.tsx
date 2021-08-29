import React, { FunctionComponent } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

interface OwnProps {}

type Props = OwnProps;

const DeliveryPrediction: FunctionComponent<Props> = (props) => {
  return <SimpleCard />;
};

const useStyles = makeStyles({
  root: {
    minWidth: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  date: {
    color: "#8ede8e",
  },
  pos: { margin: 10 },
});

function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Estimated shipping time
        </Typography>
        <Typography variant="h5" component="h2" className={classes.date}>
          {"tomorrow".toLocaleUpperCase()}
          {bull}29.08.2021{bull}5-7 PM
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Don't worry - you'll be notified if estimation changes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Change shipping company</Button>
      </CardActions>
    </Card>
  );
}

export default DeliveryPrediction;
