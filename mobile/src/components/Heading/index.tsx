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
              inputRange: [10, 230],
              outputRange: [140, 60],
              extrapolate: 'clamp'
            }),
            marginLeft: scrollY.interpolate({
              inputRange: [10, 230],
              outputRange: [0, -150],
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
                  inputRange: [0,110,230, 230],
                  outputRange: [50,0,0, 50],
                  extrapolate: 'clamp'
                }),
                marginBottom: scrollY.interpolate({
                  inputRange: [230, 230],
                  outputRange: [24, -35],
                  extrapolate: 'clamp'
                }),
                opacity: scrollY.interpolate({
                  inputRange: [0, 160, 215, 230],
                  outputRange: [100, 8, 30, 100],
                  extrapolate: 'clamp'
                }),
                top: scrollY.interpolate({
                  inputRange: [0, 230],
                  outputRange: [0, -60],
                  extrapolate: 'clamp'
                }),
                left: scrollY.interpolate({
                  inputRange: [0, 230, 230],
                  outputRange: [0, 0, 60],
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
      style={{paddingBottom: 160}}
      >
      {
        children
      }
      </ScrollView>
    </>
  );
}