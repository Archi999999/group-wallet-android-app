import React, {FC, useState} from 'react';
import {StyleSheet, TextInput} from "react-native";
import {globalStyles, smallFontSize} from "../styles/global-styles";
import {MyButton} from "../components/myButton/myButton";

type Props = {
  showInput: boolean
  saveNameButton: string
  addNameButton: string
  setShowInput: (value: boolean)=> void
  addItemHandler: (title: string)=>void
  // перенести в редакс!!!!!!
  keyboardHeight?: number
}

export const AddItemForm: FC<Props> = (
  {
    showInput,
    addNameButton,
    saveNameButton,
    setShowInput,
    addItemHandler,
    keyboardHeight,
  }
) => {
  const [value, setValue] = useState('')

  const addItemHandler_ = (value: string) => {
    addItemHandler(value)
    setValue('')
  }

  return (
    <>
      {showInput
        ? <>
          <TextInput value={value} onChangeText={setValue}
                     style={[globalStyles.border, styles.input]} autoFocus
                     onSubmitEditing={() => addItemHandler(value)}/>
          <MyButton onPress={() => addItemHandler_(value)}>{saveNameButton}</MyButton>
        </>
        : <MyButton onPress={() => setShowInput(
          // prevState => !prevState
          true
        )}
                    style={{marginBottom: keyboardHeight}}>
          {addNameButton}
        </MyButton>
      }
    </>
  )
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: 200,
    fontSize: smallFontSize,
    padding: 8,
    margin: 10,
  },
});