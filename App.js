import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const[resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");

  let operations = ["DEL", "AC", "+", "-", "*", "/"];
  const onButtonClick = (text) => {
    console.log(text);
    if (text == "=") {
      if (operations.includes(resultText.toString().split("").pop())) {
        return;
      }
      return calculation()
    }
    setResultText(resultText + text);
  }

  const onOperationClick = (text) => {

    if (text == "AC") {
      setResultText("");
      setCalcText("");
      return;
    }

    if (text == "DEL") {
      setResultText(resultText.toString().substring(0, resultText.length-1))
      return;
    }
    console.log(text);

    if (operations.includes(resultText.toString().split("").pop())) {
      return;
    }
    setResultText(resultText + text);
  }

  const calculation = () => {
    setCalcText(eval(resultText));
  };

  return (
    <View style={styles.container} >
      <View style={styles.result}>
        <Text style={styles.resultText} >{calcText}</Text>
      </View>
      <View style={styles.calculation} >
        <Text style={styles.calculationText}>{resultText}</Text>

      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style = {styles.row}>
            <TouchableOpacity onPress={() => {onButtonClick(1)}}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onButtonClick(2)}}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onButtonClick(3)}}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.row}>
            <TouchableOpacity onPress={() => {onButtonClick(4)}}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onButtonClick(5)}}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onButtonClick(6)}}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.row}>
            <TouchableOpacity onPress={() => {onButtonClick(7)}}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onButtonClick(8)}}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onButtonClick(9)}}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.row}>
            <TouchableOpacity onPress={() => {onButtonClick(".")}}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onButtonClick(0)}}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {onButtonClick("=")}}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity onPress={() => {onOperationClick('DEL')}}>
            <Text style={styles.operationButton}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {onOperationClick('AC')}}>
            <Text style={styles.operationButton}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {onOperationClick('+')}}>
            <Text style={styles.operationButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {onOperationClick('-')}}>
            <Text style={styles.operationButton}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {onOperationClick('*')}}>
            <Text style={styles.operationButton}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {onOperationClick('/')}}>
            <Text style={styles.operationButton}>/</Text>
          </TouchableOpacity>
        </View>
      </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  result: {
    backgroundColor: '#808080',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,

  },
  calculation: {
    flex: 1,
    backgroundColor: '#d6d6c2',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    backgroundColor: '#434343',
    flex: 3,
  },
  operations: {
    backgroundColor: '#636363',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  calculationText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    color: 'white',
    fontSize: 30,
  },
  operationButton:{
    color: 'white',
    fontSize: 30,

  },
});
