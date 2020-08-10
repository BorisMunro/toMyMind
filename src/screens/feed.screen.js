import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import FilterIcon from "../components/icons/filter";
import Filter from "./feed_views/filter.view";

export default function Feed() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Feed"
        titleAlignment="left"
        rightIcon={<FilterIcon width={24} height={24} fill="black" />}
        rightIconEvent={() => setShowFilter(!showFilter)}
      />
      <Filter showFilter={showFilter} />
      <Text>Feed</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});