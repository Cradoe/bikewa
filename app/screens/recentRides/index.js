import React, { useEffect, useState } from "react";
import { Text, Layout, Card } from "@ui-kitten/components";
import { connect } from "react-redux";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView
} from "react-native";
import { globalStyles } from "../../shared/globalStyles";
import { getBookings } from "../../actions/bookings";
import moment from "moment";
import { numberWithCommas } from "../../helpers";


const Rides = ( { user } ) => {
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
      const userId = user.id;
      setResponseMessage( null );
      setIsFetchingData( true );
      getBookings( 1, callback );
    }

  useEffect( () => {
    if ( bikeList.length === 0 ) {
      fetchDataFromServer()
    }
  }, [] )
  return (
    <SafeAreaView>
      <Layout style={[ globalStyles.bgWhite, globalStyles.containerPadding, globalStyles.fullHeight ]}>
        <ScrollView>
          {responseMessage ? <Text style={globalStyles.textDanger}>{responseMessage}</Text> : null}
          {isFetchingData ? <Card>
            <View style={[ styles.caption, globalStyles.justifySpaceBetween ]}>
              <Text style={[ globalStyles.textGray, styles.title ]}>
                Fetching...
              </Text>
            </View>
          </Card> : bikeList.length > 0 ? ( bikeList.map( ( booking, index ) => (
            <Card
              key={index}
              style={globalStyles.mt20}
            >
              <View
                style={[
                  styles.itemBox,
                  globalStyles.flexRow
                ]}>
                <View style={[ styles.thumbArea, globalStyles.centerCenter, globalStyles.bgWhite ]}>
                  <Image source={{ uri: booking.bike.image }} style={styles.thumb}></Image>
                </View>

                <View style={[ styles.caption, globalStyles.justifySpaceBetween ]}>
                  <Text style={[ globalStyles.textGray, styles.title ]}>
                    {booking.bike.name}
                  </Text>
                  <Text style={styles.small}> {moment( booking.start_time ).fromNow()}</Text>

                  <Text style={styles.small}> &#8358;{numberWithCommas( booking.price )} for {booking.minutes} minutes ride</Text>
                </View>
              </View>
            </Card>
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
      </Layout>
    </SafeAreaView>
  );
};

const mapStateToProps = ( state, ownProps ) => {
  return {
    user: state.user
  };
};


const RecentRides = connect( mapStateToProps )( Rides );

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



export default RecentRides;
