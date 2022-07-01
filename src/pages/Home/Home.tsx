import React, { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { Days } from './components/Day/Days';
import ThisDay from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import style from './Home.module.scss';

type Props = {}

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('Bishkek'));
  }, []);

  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}

export default Home;