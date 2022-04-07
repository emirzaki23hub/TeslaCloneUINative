import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyleButton from "../StyleButton";
import styles from "./style";

const CarItem = (props) => {
  const { title, tagLine, tagLineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.images} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.sub}>
          {" "}
          {tagLine} {""}
          <Text style={styles.subCTA}> {tagLineCTA} </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.log("custom order was pressed");
          }}
        />
        <StyleButton
          type="secondary"
          content={"existing Inventory"}
          onPress={() => {
            console.log("EI was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
