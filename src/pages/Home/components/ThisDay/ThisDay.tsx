import React from 'react';
import GlobalSelectorSvg from '../../../../assets/icons/shared/GlobalSelectorSvg';
import { Weather } from '../../../../store/types/types';
import styles from './ThisDay.module.scss';

type Props = {
    weather: Weather;
}

const ThisDay = ({ weather }: Props) => {
  return (
    <header className={styles.this__days}>
        <div className={styles.top__block}>
            <div className={styles.top__block_wrapper}>
                <div className={styles.this__temp}>{Math.floor(weather.main.temp)}°</div>
                <div className={styles.this__day_name}>Cегодня</div>
            </div>
            <GlobalSelectorSvg id="sun" />
        </div>
        <div className={styles.bottom__block}>
            <div className={styles.this__time}>
                Время: <span>14:45</span>
            </div>
            <div className={styles.this__city}>
                Город: <span>Бишкек</span>
            </div>
        </div>
    </header>
  )
}

export default ThisDay