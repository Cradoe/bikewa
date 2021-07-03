import React, { useState, useEffect } from "react";
import { Text, Layout, Icon, Button, Spinner, Card } from "@ui-kitten/components";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { globalStyles } from "../../shared/globalStyles";
import { fetchAllBikes } from "../../actions/bikes";
import { globalConstants } from "../../constants";
import { numberWithCommas } from "../../helpers/functions";

export const TopBikes = ( { navigation } ) => {

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
  const viewBikeDetails = ( bikeId ) => {
    console.log( "ff" );
    navigation.navigate( "BikeDetails", {
      bikeId
    } );
  };

  const arrowIcon = ( props ) => (
    <Icon {...props} name="arrowhead-right-outline" />
  );

  return (
    <View>
      <View style={[ globalStyles.flexRow, globalStyles.justifySpaceBetween ]}>
        <Text
          style={[
            globalStyles.fontAltBold,
            globalStyles.textBold,
            styles.heading
          ]}
        >
          Top Bikes
        </Text>
        <Button accessoryRight={arrowIcon} size="tiny" appearance="ghost" onPress={() => navigation.navigate( "AllBikes" )}>More</Button>
      </View>


      {responseMessage ? <Text style={globalStyles.textDanger}>{responseMessage}</Text> : null}



      {isFetchingData ?
        ( <Card style={[ styles.itemBox, globalStyles.centerCenter, styles.loaderCard ]} level="2">
          <Spinner status="primary" size="medium" />
        </Card> )
        :
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
        >
          {bikeList.length > 0 ? ( bikeList.map( ( bike, index ) => (
            <TouchableWithoutFeedback onPress={() => { viewBikeDetails( bike.id ) }} key={index}>
              <Layout style={[ styles.itemBox, globalStyles.shadowBox ]} level="2">
                <Image source={{ uri: bike.image }} style={styles.thumb}></Image>
                <View
                  style={[
                    globalStyles.flexRow,
                    globalStyles.justifySpaceBetween,
                    styles.location,
                    globalStyles.shadowBox
                  ]}                >
                  <Text style={globalStyles.textSmall}>
                    <Icon
                      style={styles.icon}
                      fill={globalConstants.PRIMARY_COLOR}
                      name='pin-outline'
                    />
                    East Campus
                  </Text>
                </View>
                <View style={[ styles.caption, globalStyles.flexRow, globalStyles.justifySpaceBetween ]}>
                  <Text
                    style={[ globalStyles.textSecondary, styles.title ]}
                  >
                    {bike.name}
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

        </ScrollView>
      }
    </View>
  );
};

const styles = StyleSheet.create( {
  loaderCard: {
    borderRadius: 5,
    width: ( 90 / 100 ) * globalConstants.SCREEN_WIDTH,
    marginRight: 20,
    height: ( 27 / 100 ) * globalConstants.SCREEN_HEIGHT,
    marginVertical: 10
  },
  itemBox: {
    borderRadius: 5,
    width: ( 75 / 100 ) * globalConstants.SCREEN_WIDTH,
    marginRight: 20,
    marginVertical: 10
  },
  thumb: {
    marginTop: 30,
    width: "100%",
    height: 130
  },
  caption: {
    padding: 10
  },
  icon: {
    height: 10,
    width: 10
  },
  location: {
    position: "absolute",
    top: 10,
    width: "50%",
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  heading: {
    fontSize: 20
  }
} );
