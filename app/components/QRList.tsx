import React, { useState } from 'react'
import { View } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { QRListState } from '../redux/reducers/QRListReducer';
import QRListItem from './QRListItem';
import { useDispatch } from 'react-redux'
import { addQR, removeQR } from '../redux/actions/QRListActions';

export default function QRList() {
  const [filterText, setFilterText] = useState("");
  const qrList = useSelector((state: QRListState) => state.qrList);
  const dispatch = useDispatch();

  const onChangeFilterText = (text: string) => {
    setFilterText(text)
  }

  const onRemoveItem = (item: string) => {
    dispatch(removeQR(item));
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{ width: '90%', borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 22 }}
          onChangeText={onChangeFilterText}
          value={filterText}
          placeholder={"Filter"}
        />
      </View>
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={filterText.length > 0 ? qrList.filter(q => q.data.toLowerCase().startsWith(filterText.toLowerCase())) : qrList}
          renderItem={({ item }) => <QRListItem item={item.data} onRemove={() => onRemoveItem(item.id)} />}
          keyExtractor={(item: any, i: number) => `${item}-${i}`}
        />
      </View>
    </View>
  )
}
