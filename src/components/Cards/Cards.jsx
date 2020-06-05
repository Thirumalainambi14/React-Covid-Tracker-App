import React, { useState, useEffect } from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, lastUpdate, deaths } }) => {
  let [covidData, setCovidData] = useState({});

  useEffect(() => {
    const covidData = { confirmed, recovered, lastUpdate, deaths };
    setCovidData(covidData);
  }, [confirmed, recovered, deaths, lastUpdate]);

  if (!covidData.confirmed) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom variant="h4">
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={covidData.confirmed.value}
                duration={5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(covidData.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        {/* Recovered */}
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom variant="h4">
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={covidData.recovered.value}
                duration={5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(covidData.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        {/* Deaths */}
        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom variant="h4">
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={covidData.deaths.value}
                duration={5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(covidData.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
