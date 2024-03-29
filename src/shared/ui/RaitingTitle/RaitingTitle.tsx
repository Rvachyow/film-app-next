import styles from "./styles.module.scss";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import { Rating } from "~/pages/HomePage/types";

interface IRaitingTitle {
  rating: Rating;
  top250?: number;
}

export const RaitingTitle = ({ rating, top250 }: IRaitingTitle) => {
  return (
    <section className={styles.container}>
      <Card
        style={{ display: "flex", alignItems: "center" }}
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={400}
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/bccc2f0a-9419-4abd-92d6-66cf880e7a0f/1200x630"
          width={200}
        />
        <div className={styles.card__footer}>
          <div className={styles.text}>
            <h4>{rating.kp.toFixed(1)}</h4>
            {top250 ? (
              <span className={styles.text__container}>
                <p>ТОП 250</p>
                <p>{top250} МЕСТО</p>
              </span>
            ) : null}
          </div>
        </div>
      </Card>
      <Card
        style={{ display: "flex", alignItems: "center" }}
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_bXIwR1CupP12GVQpMOfNPJpKVxwNU56I7jn-sNg9gKzSqzH6AVT8vzWnoCl5nUEfCo&usqp=CAU"
          width={200}
        />
        <div className={styles.card__footer}>
          <div className={styles.text}>
            <h4>{rating.imdb}</h4>
            {/* <span className={styles.text__container}>
              <p>ТОП 250</p>
              <p>58 МЕСТО</p>
            </span> */}
          </div>
        </div>
      </Card>
    </section>
  );
};
