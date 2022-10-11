import React, { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import backgroundImg from '../../assets/bgWorldCup.png'

import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import { Sticker } from '../../components/Sticker';
import { getRealm } from '../../database/realm';

export function Stadiums() {
  const [stickers, setStickers] = useState<boolean[]>()
  const [obtainedStickers, setObtainedStickers] = useState<string[]>([])

  useEffect(() => {    
    fetchStickers();    
  }, [])

  async function fetchStickers(){
    const realm = await getRealm();

    try {
      const response = realm.objects("Stickers")
        .filtered(`prefix = 'FWC' && type = 'stadium'`)
        .toJSON()

      for (let i = 0; i < response.length; i++) {
        obtainedStickers.push(response[i]['number']);        
      }     

    } catch (error){
      console.log(error);
      
    } finally{
      realm.close()
    }
    bodyBuilder()
  }

  function bodyBuilder(){    
    let lap = []
    for (let i = 8; i < 19; i++) {
      if (obtainedStickers.includes(i.toString())) {
        lap.push(true)
      } else{
        lap.push(false)
      }
    }
    setStickers(lap)
  }  

  return (
    <Background image={backgroundImg}>
      <ScrollView>
      <View style={styles.container}>
          <View style={[styles.flexBetween, styles.stickerLine]}>
          {
              stickers?.length != 0 ? 
                stickers?.map((item, index: number) => (<Sticker key={index} code={'FWC '+(index+8)} obtained={item} type="stadium" />))
              : null
            }
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}