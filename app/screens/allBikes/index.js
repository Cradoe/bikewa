import React, { useState, useEffect } from "react";
import { Text, Layout, Icon, Spinner, Card } from "@ui-kitten/components";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";
import { globalStyles } from "../../shared/globalStyles";
import { globalConstants } from "../../constants";
import { fetchAllBikes } from "../../actions/bikes";
import { numberWithCommas } from "../../helpers/functions";


const AllBikes = ( { navigation } ) => {


  const [ isFetchingData, setIsFetchingData ] = useState( true ),
    [ responseMessage, setResponseMessage ] = useState( null ),
    [ bikeList, setBikeList ] = useState( [] ),
    successCallback = ( data ) => {
      setBikeList( data );
      setIsFetchingData( false );
    },
    errorCallback = ( error ) => {
      setResponseMessage( error );
      setIsFetchingData( false );
    },
    emptyCallback = () => {
      setIsFetchingData( false );
    },
    callback = {
      success: successCallback,
      error: errorCallback,
      empty: emptyCallback
    },
    fetchDataFromServer = () => {
      setResponseMessage( null );
      setIsFetchingData( true );
      fetchAllBikes( callback );
    }

  useEffect( () => {
    if ( bikeList.length === 0 ) {
      fetchDataFromServer()
    }
  }, [] );
  const viewBikeDetails = ( bikeId, name ) => {
    navigation.navigate( "BikeDetails", {
      bikeId,
      name
    } );
  };

  return (
    <SafeAreaView>
      {responseMessage ? <Text style={globalStyles.textDanger}>{responseMessage}</Text> : null}
      {isFetchingData ?
        ( <Card style={[ styles.itemBox, globalStyles.centerCenter, styles.loaderCard ]} level="2">
          <Spinner status="primary" size="medium" />
        </Card> )
        :
        <ScrollView
          scrollEventThrottle={200}
          decelerationRate="fast"
        >
          <Layout style={[ globalStyles.screenBg, globalStyles.containerPadding ]}>
            {bikeList.length > 0 ? ( bikeList.map( ( bike, index ) => (
              <TouchableWithoutFeedback onPress={() => {
                viewBikeDetails( bike.id, bike.name )
              }} key={index}>
                <Layout style={[ styles.itemBox, globalStyles.shadowBox ]} level="2">
                  <Image source={{ uri: bike.image }} style={styles.thumb}></Image>

                  <View style={globalStyles.bgSecondary}>
                    <Text
                      style={[ globalStyles.textWhite, styles.title ]}
                    >
                      {bike.name}
                    </Text>
                  </View>
                  <View style={[ styles.caption, globalStyles.flexRow, globalStyles.justifySpaceBetween ]}>
                    <Text style={globalStyles.textSmall}>
                      <Icon
                        style={styles.icon}
                        fill={globalConstants.PRIMARY_COLOR}
                        name='pin-outline'
                      />
                      East Campus
                    </Text>

                    <Text style={globalStyles.textSmall}>&#8358; {numberWithCommas( bike.price_per_minute )}</Text>
                  </View>
                </Layout>
              </TouchableWithoutFeedback>
            ) ) ) :
              <Card>
                <View style={[ styles.caption, globalStyles.justifySpaceBetween ]}>
                  <Text style={[ globalStyles.textGray, styles.title ]}>
                    No Bike available
                  </Text>
                </View>
              </Card>
            }
          </Layout>

        </ScrollView>
      }
    </SafeAreaView>
  );

};
export default AllBikes;


const styles = StyleSheet.create( {
  loaderCard: {
    borderRadius: 5,
    width: ( 100 / 100 ) * globalConstants.SCREEN_WIDTH,
    height: ( 27 / 100 ) * globalConstants.SCREEN_HEIGHT,
    marginVertical: 20
  },
  itemBox: {
    borderRadius: 5,
    marginVertical: 10
  },
  thumb: {
    width: "100%",
    height: 200
  },
  caption: {
    padding: 10
  },
  icon: {
    height: 10,
    width: 10
  },

  heading: {
    fontSize: 15
  },
  title: {
    paddingHorizontal: 20
  }
} );