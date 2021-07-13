// import React in our code
import React from 'react';

// import all the components we are going to use
import {View, Text, Image} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-ionicons';
import styles from './style';
import slides from './slide';
import {ArrowRight} from 'react-native-iconly';
import {WHITE} from '../../constants';
const Tutorial = ({onSkip, onDone}) => {
  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <ArrowRight set="light" color={WHITE} size={48} />
      </View>
    );
  };
  const RenderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      renderDoneButton={RenderDoneButton}
      renderNextButton={RenderNextButton}
      showSkipButton={true}
      onSkip={onSkip}
      onDone={onDone}
    />
  );
};

export default Tutorial;
