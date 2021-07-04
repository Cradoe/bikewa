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
              This method registers a function that will get called whenver the
              cursor position changes or a change is made to the styling of the
              editor at the cursor's position., The callback will be called with
              an array of actions that are active at the cusor position,
              allowing a toolbar to respond to changes.l consequuntur asperiores
              laudantium tenetur iste sed maiores? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Autem eaque doloribus, quo adipisci
              rem numquam vel labore repudiandae iusto odit aspernatur
              recusandae laudantium? Assumenda vero corporis delectus sequi
              necessitatibus animi.lorem Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Temporibus possimus velit aliquam nemo ea,
              asperiores blanditiis eaque corrupti fugit facilis. Unde expedita
              quod, architecto quia iure magni amet aut sapiente.
            </Text>
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
