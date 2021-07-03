import React, { useEffect, useState } from "react";
import { Text, Layout, Card } from "@ui-kitten/components";
import { connect } from "react-redux";
import {
  Image,
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import { globalStyles } from "../../shared/globalStyles";
import { globalConstants } from "../../constants";
import { getBookings } from "../../actions/bookings";
import { timeSince } from "../../helpers"; import moment from "moment";


const Rides = ( { user } ) => {
  const [ isFetchingData, setIsFetchingData ] = useState( true ),
    [ responseMessage, setResponseMessage ] = useState( null ),
    [ bikeList, setBikeList ] = useState( [] );
  const successCallback = ( data ) => {
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
      const userId = user.id;
      setResponseMessage( null );
      setIsFetchingData( true );
      getBookings( userId, callback );
    }

  useEffect( () => {
    if ( bikeList.length === 0 ) {
      fetchDataFromServer()
    }
  }
    , [] )
  return (
    <View style={globalStyles.mt30}>
      <Text
        style={[
          globalStyles.fontAltBold,
          globalStyles.textBold,
          styles.heading
        ]}
      >
        Recent Rides
      </Text>
      <ScrollView
        style={{
          height: ( 30 / 100 ) * globalConstants.SCREEN_HEIGHT,
          paddingHorizontal: 10
        }}
      >
        {responseMessage ? <Text style={globalStyles.textDanger}>{responseMessage}</Text> : null}
        {isFetchingData ? <Card>
          <View style={[ styles.caption, globalStyles.justifySpaceBetween ]}>
            <Text style={[ globalStyles.textGray, styles.title ]}>
              Fetching...
            </Text>
          </View>
        </Card> : bikeList.length > 0 ? ( bikeList.map( ( booking, index ) => (
          <Layout
            key={index}
            style={[
              styles.itemBox,
              globalStyles.shadowBox,
              globalStyles.flexRow
            ]}
            level="1"
          >
            <View style={[ styles.thumbArea, globalStyles.centerCenter, globalStyles.bgWhite ]}>
              <Image source={{ uri: booking.bike.image }} style={styles.thumb}></Image>
            </View>

            <View style={[ styles.caption, globalStyles.justifySpaceBetween ]}>
              <Text style={[ globalStyles.textGray, styles.title ]}>
                {booking.bike.name}
              </Text>
              <Text style={styles.small}> {moment( booking.start_time ).fromNow()}</Text>
              <Text style={styles.small}> {booking.minutes} ride</Text>
            </View>
          </Layout>
        ) ) ) : (
          <Card>
            <View style={[ styles.caption, globalStyles.justifySpaceBetween ]}>
              <Text style={[ globalStyles.textGray, styles.title ]}>
                You recent rides will appear here
              </Text>
            </View>
          </Card>
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ( state, ownProps ) => {
  console.log( "user", state.user );
  return {
    user: state.user
  };
};
export const RecentRides = connect( mapStateToProps )( Rides );

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
  }
} );
