import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import GlobalSelectorSvg from '../../assets/icons/shared/GlobalSelectorSvg';
import { Theme } from '../../context/ThemeContext';
import { useTheme } from '../../hooks/useTheme';
import styles from './Header.module.scss';  

type Props = {}

const Header = (props: Props) => {
  const theme = useTheme();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'coconut', label: 'Coconut' }
  ];

  const colorStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: 'rgba(71,147,255,0.2)',
      width: 194,
      height: 37,
      border: 'none',
      borderRadius:'10px',
      zIndex: 100,
    }),
    control: () => ({
      width: 200,
      height: 37,
      zIndex: 100, 
      borderRadius: 10
    }),
  }

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }


  return (
    <header className={styles.header}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
              <GlobalSelectorSvg id="header-logo"/>
            </div>
            <div className={styles.title}>React Weather</div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.change_theme} onClick={changeTheme}>
              <GlobalSelectorSvg id="change_theme"/>
            </div>
            <Select styles={colorStyles} defaultValue={options[0]} options={options}/>
        </div>
    </header>
  )
}

export default Header;