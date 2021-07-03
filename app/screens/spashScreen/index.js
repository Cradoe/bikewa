import React from "react";
import { StyleSheet, View, SafeAreaView, Image, ScrollView } from "react-native";
import { globalStyles } from "../../shared/globalStyles";
import { globalConstants } from "../../constants";
import { animBikeOne, pagerBikeOne, pagerBikeThree, pagerBikeTwo } from "../../shared/generalAssets";
import { Layout, Text, Button, Icon, Card, ViewPager } from "@ui-kitten/components";

const arrowIcon = ( props ) => <Icon {...props} name="arrowhead-right-outline" />;

const SplashScreen = ( { navigation } ) => {
  const [ selectedIndex, setSelectedIndex ] = React.useState( 0 );

  const shouldLoadComponent = ( index ) => index === selectedIndex;

  return (
    <SafeAreaView
      style={globalStyles.root}
    >
      <Layout
        style={[
          globalStyles.bgSecondary,
          globalStyles.containerPadding,
          globalStyles.fullHeight
        ]}
      >
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex( index )}
          style={styles.pager}
        >
          <Card style={[ styles.itemBox ]}>
            <Image source={pagerBikeOne} style={styles.animBikeOne} />

            <Text
              style={[
                globalStyles.textDark,
                globalStyles.textCenter,
                globalStyles.textWhite
              ]}
            >
              Your campus ride got easier
            </Text>
            <View style={[ styles.dotContainer, globalStyles.flexRow ]}>
              <View style={[ styles.dot, styles.activeDot ]}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
            </View>
          </Card>

          <Card style={[ styles.itemBox ]}>
            <Image source={pagerBikeTwo} style={styles.animBikeOne} />
            <Text
              style={[
                globalStyles.textDark,
                globalStyles.textCenter,
                globalStyles.textWhite
              ]}
            >
              Your campus ride got easier
            </Text>
            <View style={[ styles.dotContainer, globalStyles.flexRow ]}>
              <View style={styles.dot}></View>
              <View style={[ styles.dot, styles.activeDot ]}></View>
              <View style={styles.dot}></View>
            </View>
          </Card>

          <Card style={[ styles.itemBox ]}>
            <Image source={pagerBikeThree} style={styles.animBikeOne} />
            <Text
              style={[
                globalStyles.textDark,
                globalStyles.textCenter,
                globalStyles.textWhite
              ]}
            >
              Your campus ride got easier
            </Text>
            <View style={[ styles.dotContainer, globalStyles.flexRow ]}>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={[ styles.dot, styles.activeDot ]}></View>
            </View>

          </Card>

        </ViewPager>



        <View style={[ globalStyles.fullWidth ]}>

          <Button
            onPress={() => {
              navigation.navigate( "LoginScreen" );
            }}
            size="medium"
            style={[
              globalStyles.fullWidth,
              globalStyles.mt30,
              globalStyles.bgPrimary,
              globalStyles.noBorder,
            ]}
          >
            <Text style={globalStyles.textWhite}>Continue</Text>
          </Button>


        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create( {
  animBikeOne: {
    maxWidth: ( globalConstants.SCREEN_WIDTH * 70 ) / 100,
    height: 200,
    marginBottom: 30
  },
  itemBox: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: ( globalConstants.SCREEN_HEIGHT * 55 ) / 100,
    borderRadius: 5,
    width: ( 85 / 100 ) * globalConstants.SCREEN_WIDTH,
    marginRight: 20,
    marginVertical: 10
  },
  pager: {
    marginTop: ( globalConstants.SCREEN_HEIGHT * 20 ) / 100,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70
  },
  dot: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 50
  },
  activeDot: {
    backgroundColor: globalConstants.PRIMARY_COLOR
  }
} );
