import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Home, Scan, User} from 'react-native-iconly';
import ContentHolder from '../../holders/content-holder';
import styles from './index.styles';
import {APP_GRAY, APP_PURPLE} from '../../../constants';
import Tab from './tab';

const home = <Home set="light" color={APP_GRAY} size={24} />;
const scan = <Scan set="light" color={APP_GRAY} size={24} />;
const user = <User set="light" color={APP_GRAY} size={24} />;
const homeBold = <Home set="bold" color={APP_PURPLE} size={24} />;
const scanBold = <Scan set="bold" color={APP_PURPLE} size={24} />;
const userBold = <User set="bold" color={APP_PURPLE} size={24} />;

const TabBar = ({navigation, visible = true}) => {
  const homeTab = useRef();
  const scanTab = useRef();
  const profileTab = useRef();

  useEffect(() => {
    homeTab.current.move();
  }, []);

  const [active, setActive] = useState('Home');
  const handlePress = tab => {
    navigation.navigate(tab);
    setActive(tab);
    if (active === 'Home' || tab === 'Home') {
      homeTab.current.move();
    }
    if (active === 'Scan' || tab === 'Scan') {
      scanTab.current.move();
    }
    if (active === 'Profile' || tab === 'Profile') {
      profileTab.current.move();
    }
  };
  return (
    <View
      style={{
        ...styles.root,
        display: visible ? 'flex' : 'none',
        position: visible ? 'absolute' : 'relative',
      }}>
      <ContentHolder rounded>
        <View style={styles.container}>
          <Tab
            icon={active === 'Home' ? homeBold : home}
            ref={homeTab}
            disabled={active === 'Home'}
            onPress={() => handlePress('Home')}
          />
          <Tab
            icon={active === 'Scan' ? scanBold : scan}
            ref={scanTab}
            disabled={active === 'Scan'}
            onPress={() => handlePress('Scan')}
          />
          <Tab
            icon={active === 'Profile' ? userBold : user}
            ref={profileTab}
            disabled={active === 'Profile'}
            onPress={() => handlePress('Profile')}
          />
        </View>
      </ContentHolder>
    </View>
  );
};

export default TabBar;
