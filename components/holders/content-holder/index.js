import React from 'react';
import ShadowView from 'react-native-simple-shadow-view';
import {WHITE} from '../../../constants';
import styles from './index.styles';

const ContentHolder = ({rounded, backgroundColor, children}) => (
  <ShadowView
    style={{
      ...styles.container,
      shadowRadius: rounded ? 4 : 0,
      borderRadius: rounded ? 16 : 1,
      backgroundColor: backgroundColor || WHITE,
    }}>
    {children}
  </ShadowView>
);

export default ContentHolder;
