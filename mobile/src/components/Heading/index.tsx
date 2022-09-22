import React, { Children, useState } from 'react';
import { View, Text, ViewProps, Animated, ScrollView } from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logoCopa.png'

interface Props extends ViewProps {
  title: string,
  subtitle: string,
  children: React.ReactNode,
  showDescription: boolean
}

export function Heading({showDescription ,children, title, subtitle, ...rest}: Props) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))

  return (
    <>
    <Animated.Image 
        source={logoImg}
        resizeMode="contain"
        style={[
          styles.logo,
          {
            height: scrollY.interpolate({
              inputRange: [10, 140],
              outputRange: [140, 60],
              extrapolate: 'clamp'
            })
          }
        ]}
      />
      {
        showDescription?
          <Animated.View 
            style={[
              styles.containerLogo, 
              {
                height: scrollY.interpolate({
                  inputRange: [0, 160, 186],
                  outputRange: [100, 20, 0],
                  extrapolate: 'clamp'
                }),
                paddingVertical: scrollY.interpolate({
                  inputRange: [0, 160],
                  outputRange: [32, 8],
                  extrapolate: 'clamp'
                }),
                opacity: scrollY.interpolate({
                  inputRange: [1, 75, 170],
                  outputRange: [1, 1, 0],
                  extrapolate: 'clamp'
                })
              }
            ]}
          >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </Animated.View>
        : null
      }
      <ScrollView
        scrollEventThrottle={20}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: {y: scrollY}
          },
        }],
        {
          useNativeDriver: false
        }
      )}
      style={{marginBottom: 100}}
      >
      {
        children
      }
      </ScrollView></>
  );
}