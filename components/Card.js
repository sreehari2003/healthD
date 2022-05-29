import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./card.module.scss";
import { useRouter } from "next/router";
const Card = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return (
      <>
        <div className="Myflex ">
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
  return (
    <>
      {data?.map((el, index) => {
        return (
          <div
            className="rounded-[15px] m-5 p-[20px] flex justify-center flex-col h-[250px] bg-[#8e9aaf] w-[500px]"
            key={10}
          >
            <div className={styles.box_sub}>
              <h1 className="text-2xl ">{el.date}</h1>
              <p className="text-lg">
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adip
              </p>
            </div>
            <div className={styles.info}>
              <Button
                variant="contained"
                onClick={() => router.push("/user/index")}
                className={styles.btn}
              >
                show Data
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
