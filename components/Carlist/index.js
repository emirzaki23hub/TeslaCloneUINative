import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";

import styles from "./styles";
import car from "./car";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({ item }) => <CarItem key={item.id} car={item} />}
        data={car}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
