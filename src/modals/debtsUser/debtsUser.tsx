import {MyModal} from "../../components/myModal/myModal";
import React, {FC} from "react";
import {Debt} from "../../store/users-slice";
import {StyleSheet, Text, View} from "react-native";
import {colors, mediumFontSize} from "../../styles/global-styles";

type Props = {
  debts: Debt[]
  modalVisible: boolean
  closeModal: (v:boolean)=>void
}

export const DebtsUser: FC<Props> = (
  {
    debts,
    closeModal,
    modalVisible,
  }
) => {
  let hasNonZeroDebts = false;


  const debtsList = debts.map(d => {
    if (d.debt !== 0) {
      hasNonZeroDebts = true
    }
    return (
      <View key={d.id} style={s.row}>
        <Text style={s.text}>{transformName(d.name)}</Text>
        <Text style={s.text}>{d.debt}</Text>
      </View>)
  })

  function transformName(name: string) {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']; // Гласные буквы кириллицы

    const lastChar = name[name.length - 1].toLowerCase()
    const isVowel = vowels.includes(lastChar)

    if (isVowel) {
      return name.slice(0, -1) + 'е:'
    } else {
      return name + 'у:'
    }
  }

  return (
    <MyModal modalVisible={modalVisible} closeModal={closeModal} title={'Список долгов'}>
      {hasNonZeroDebts ? debtsList : <Text style={s.text}>У вас нет долгов</Text>}
    </MyModal>
  )}


const s = StyleSheet.create({
  row:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: colors.white,
    fontSize: mediumFontSize,
  }
})