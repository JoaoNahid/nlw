import { useEffect, useState } from 'react';
import { Alert, Button, Modal, Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';
import uuid from 'react-native-uuid';

import { getRealm } from '../../database/realm'

interface Props{
  code: string,
  obtained: boolean,
  type: string
}

export function Sticker({code, obtained, type}: Props) {
  const [stickerObtained, setStickerObtained] = useState<boolean>(obtained)
  const [prefix, setPrefix] = useState<string>()
  const [stickerNumber, setStickerNumber] = useState<string>()
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    setPrefix(code.split(' ')[0])
    setStickerNumber(code.split(' ')[1])
  }, [])

  async function handlePasteSticker(){
    if(stickerObtained === false){
      const realm = await getRealm()

      try {
        realm.write(() => {
          const created = realm.create("Stickers", {
            _id: uuid.v4(),
            prefix: prefix,
            number: stickerNumber,
            type: type,
            pasted_at: new Date()
          })
          console.log('Item criado ==> ', created);
          
        })
        setStickerObtained(true)

      } catch {
        Alert.alert("Error:", "falha na base de dados da aplicação")
        setStickerObtained(false)
      } finally {
        realm.close()
        
      }
    } else{
      setOpenModal(true)
    }
  }

  async function handleUnpaste(){
    const realm = await getRealm()

    try {
      realm.write(() => {
        const deleted = realm.delete(
          realm.objects("Stickers")
          .filtered(`prefix = '${prefix}' && number = '${stickerNumber}'`)
        )  
        console.log('Item deletado ==> ', deleted);      
      })
      
    } catch (error) {
      console.log(error);
      
    } finally{
      realm.close()
      setStickerObtained(false)
      setOpenModal(false)
    }
    
  }

  return (
    <>
      <TouchableOpacity
        style={[styles.stickerArea, stickerObtained? {backgroundColor: '#52c2b0'}:null]}
        activeOpacity={0.8}
        onPress={handlePasteSticker}
      >
        <Text style={[styles.stickerCode, stickerObtained? {backgroundColor: '#52c2b0'}:null]}>{code}</Text>
        {stickerObtained? <Text style={styles.stickerCode}>Colada!</Text> : null}
        
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={styles.modalTxt}
            >
              Descolar figurinha?
            </Text>
            
            <View style={styles.btnArea}>
              <TouchableOpacity
                onPress={() => handleUnpaste()}
                style={[styles.btnModal, {backgroundColor: THEME.COLORS.PRIMARY}]}
              >
                <Text 
                  style={[styles.btnTxt, {color: '#fff'}]}
                >
                  Sim
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => setOpenModal(false)}
                style={[styles.btnModal, {backgroundColor: THEME.COLORS.SHAPE}]}
              >
                <Text
                  style={[styles.btnTxt]}
                >
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </Modal>
    </>
  );
}