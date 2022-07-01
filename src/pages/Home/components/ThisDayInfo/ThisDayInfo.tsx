import React from "react";
import { ThisDayItem } from "./ThisDayItem";
import cloud from '../../../../assets/images/image 1.png';
import styles from "./ThisDayInfo.module.scss";

type Props = {};

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];

  return (
    <div className={styles.this__day_info}>
      <div className={styles.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={styles.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};
