import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./card.module.scss";
const Card = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <>
        <div className="Myflex">
          <div
            className={`${styles.box} Myflex bg-white`}
            style={{ width: 300 }}
          >
            <CircularProgress disableShrink />
          </div>
          <div
            className={`${styles.box} Myflex bg-white`}
            style={{ width: 300 }}
          >
            <CircularProgress disableShrink />
          </div>
          <div
            className={`${styles.box} Myflex bg-white`}
            style={{ width: 300 }}
          >
            <CircularProgress disableShrink />
          </div>
          <div
            className={`${styles.box} Myflex bg-white`}
            style={{ width: 300 }}
          >
            <CircularProgress disableShrink />
          </div>
        </div>
      </>
    );
  }
  if (loading || empty) {
    return (
      <>
        <div className={`flex`} style={{ textAlign: "center" }}>
          <h2>You dont have any diary to show</h2>
        </div>
      </>
    );
  }
  return (
    <>
      {data?.map((el, index) => {
        const dateObj = new Date(el.date);
        const date = moment(dateObj).format("DD-MMM-YYYY");
        return (
          <div className={styles.box} key={10}>
            <Image
              src={`https://source.unsplash.com/random/${index * 10}`}
              width={300}
              height={450}
              key={10}
              alt={"a pic of diary"}
              className={styles.img}
            />
            <div className={styles.box_sub}>
              <h2>{el.heading}</h2>
              <h2>{date}</h2>
            </div>
            <div className={styles.info}>
              <Button
                variant="contained"
                onClick={() => route(el._id)}
                className={styles.btn}
              >
                Read Diary
              </Button>
              <Button
                variant="contained"
                className={styles.i}
                onClick={() => deleteDiary(el._id)}
              ></Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
