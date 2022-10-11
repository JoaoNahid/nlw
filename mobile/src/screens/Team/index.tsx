import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { Sticker } from '../../components/Sticker';
import { styles } from './styles';
import backgroundImg from '../../assets/bgWorldCup.png'
import { useRoute } from '@react-navigation/native';
import { TeamParams } from '../../@types/navigation';
import {  useEffect, useState } from 'react';
import { getRealm } from '../../database/realm';



export function Team() {
  const [stickers, setStickers] = useState<boolean[]>()
  const [obtainedStickers, setObtainedStickers] = useState<string[]>([])

  const route = useRoute()
  const team = route.params as TeamParams

  useEffect(() => {    
    fetchStickers();    
  }, [])

  async function fetchStickers(){
    const realm = await getRealm();

    try {
      const response = realm.objects("Stickers")
        .filtered(`prefix = '${team.prefix}'`)
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
    for (let i = 1; i < 21; i++) {
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
      <Heading showDescription={true} title={team.country} subtitle="Brazil">
        <View style={styles.container}>
          <View style={[styles.flexBetween, styles.stickerLine]}>
            {
              stickers?.length != 0 ? 
                stickers?.map((item, index: number) => (<Sticker key={index} code={team.prefix+' '+(index+1)} obtained={item} type="team" />))
              : null
            }
          </View>
        </View>
      </Heading>
    </Background>
  );
}