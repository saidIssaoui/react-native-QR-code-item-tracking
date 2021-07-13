import React from 'react';
import {View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './index.styles';
import data from './index.data';
import IntroItem from './item';
import NextButton from './buttons/next';
import PreviousButton from './buttons/previous';

const AppIntro = ({onDone}) => (
  <View style={styles.container}>
    <AppIntroSlider
      keyExtractor={({id}) => id}
      renderItem={({item}) => <IntroItem {...item} />}
      data={data}
      renderNextButton={props => (
        <View style={{marginTop: -12}}>
          <NextButton {...props} />
        </View>
      )}
      renderDoneButton={props => (
        <View style={{marginTop: -24}}>
          <NextButton {...props} />
        </View>
      )}
      showPrevButton
      renderPrevButton={props => (
        <View style={{marginTop: -24}}>
          <PreviousButton text="Cancel" {...props} />
        </View>
      )}
      dotStyle={styles.dots}
      onDone={onDone}
    />
  </View>
);

export default AppIntro;
