import React from "react";
import { Text, Layout, Card, ListItem } from "@ui-kitten/components";
import { connect } from "react-redux";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView
} from "react-native";
import { globalStyles } from "../../shared/globalStyles";
import {
  userAvatar
} from "../../shared/generalAssets";
import { globalConstants } from "../../constants";
import { numberWithCommas } from "../../helpers/functions";

const Profile = ( { navigation, user } ) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={[
          globalStyles.containerPadding,
          globalStyles.screenBg,
          { height: globalConstants.SCREEN_HEIGHT }
        ]}
      >
        <View style={globalStyles.mt30}>
          <ScrollView
            style={{
              height: ( 90 / 100 ) * globalConstants.SCREEN_HEIGHT,
              paddingHorizontal: 10
            }}
          >

            <Card>
              <View style={globalStyles.centerCenter}>
                <Image source={userAvatar} style={styles.profileImage}></Image>
              </View>
              <Text style={styles.item} category="h6">Balance: &#8358; {numberWithCommas( 3000 )}</Text>
              <Text style={styles.item} category="s1">Fullname: {user.fullname}</Text>
              <Text style={styles.item} category="s1">Matric Number: Ismail Obadimu</Text>
              <Text style={[ styles.item, { borderBottomWidth: 0 } ]} category="s1">Phone Number: Ismail Obadimu</Text>
            </Card>
          </ScrollView>
        </View>
      </Layout>
    </SafeAreaView>
  );
};
const mapStateToProps = ( state, ownProps ) => {
  return {
    user: state.user
  };
};


const ProfileScreen = connect( mapStateToProps )( Profile );

export default ProfileScreen;

const styles = StyleSheet.create( {
  itemBox: {
    borderRadius: 5,
    marginVertical: 10,
    minHeight: 80,
    paddingVertical: 10,
    marginHorizontal: 0.5
  },
  thumbArea: {
    width: '30%',
    height: "auto",
  },
  thumb: {
    width: '100%',
    height: 50
  },
  caption: {
    paddingHorizontal: 10
  },
  title: {
    textAlign: "justify"
  },
  small: {
    fontSize: 11
  },
  heading: {
    fontSize: 20
  },
  item: {
    paddingVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
} );
