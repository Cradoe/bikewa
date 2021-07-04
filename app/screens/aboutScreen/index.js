import React from "react";
import { Text, Layout, Card } from "@ui-kitten/components";
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { globalStyles } from "../../shared/globalStyles";

const About = () => {
  return (
    <SafeAreaView style={[ globalStyles.root, globalStyles.screenBg ]}>
      <Layout style={globalStyles.containerPadding}>
        <StatusBar />
        <Text
          style={[
            globalStyles.fontAltBold,
            globalStyles.textBold,
            styles.heading
          ]}
        >
          BikeWa
        </Text>
        <ScrollView style={globalStyles.mt20}>
          <Card>
            <Text style={[ globalStyles.textJustify ]}>
              BikeWa is designed in such a way that it enables users to access available bikes from it's station seamlessly.
              It makes movement of riders very interesting and effortless.
            </Text>
            <Text style={[ globalStyles.textJustify ]}>
              The system allow users to borrow a bike from a "dock" and return it to the same "dock" belonging to the system. The user enters  payment information and the system unlocks a bike.</Text>
          </Card>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create( {
  heading: {
    fontSize: 20,
    marginTop: 30
  }
} );

export default About;
