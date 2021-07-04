import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { numberWithCommas } from "../../helpers";
import { Card, Text, Icon } from "@ui-kitten/components";
import { globalStyles } from "../../shared/globalStyles";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { globalConstants } from "../../constants";
import { connect } from "react-redux";
import { plusIcon } from "../../shared/generalAssets";

const WalletCardComp = ( { navigation, user } ) => {


    return ( <>
        <Card style={[ globalStyles.mt20, globalStyles.bgSecondary, styles.card ]}>
            <TouchableWithoutFeedback style={[
                styles.fundButton,
                globalStyles.centerCenter
            ]} onPress={() => { navigation.navigate( "FundWallet" ) }}>
                <Image source={plusIcon} style={styles.topUpIcon} />

            </TouchableWithoutFeedback>
            <View>
                <Text category="h5" style={[ globalStyles.textWhite, { fontWeight: 'bold' } ]}>Wallet Balance</Text>
                <Text category="h1" style={[ globalStyles.textWhite, globalStyles.textBold ]}> <Text style={globalStyles.textWhite}>&#8358;</Text> {numberWithCommas( user.balance )}</Text>
                <Text category="label" appearance='hint' style={styles.hint}><Icon fill='#fff' name="shield-outline" style={styles.icon} /> secured with flutterwave</Text>
            </View>
        </Card>
    </> )
};

const mapStateToProps = ( state, ownProps ) => {
    return {
        user: state.user
    };
};


export const WalletCard = connect( mapStateToProps )( WalletCardComp );

const styles = StyleSheet.create( {
    card: {
        paddingVertical: 10,
        height: 150,
        borderRadius: 10,
        position: 'relative'
    },
    fundButton: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: globalConstants.PRIMARY_COLOR,
        borderWidth: 1,
        position: 'absolute',
        right: 10
    },
    topUpIcon: {
        height: 30,
        width: 30,
    },
    icon: {
        height: 10,
        width: 10
    },
    hint: {
        fontSize: 10
    }
} );
