import React, { useState } from "react";
import {
  Button,
  Input,
  Layout,
  Text,
  Icon,
  Spinner,
  Card
} from "@ui-kitten/components";
import { globalStyles } from "../../shared/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  Image
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { globalConstants } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { register } from "../../actions/users/";
import { primaryLogo } from "../../shared/generalAssets";


const Register = ( { navigation } ) => {
  const [ secureTextEntry, setSecureTextEntry ] = useState( true ),
    [ responseMessage, setResponseMessage ] = useState( null ),
    [ isSubmitting, setIsSubmitting ] = useState( false ),
    toggleSecureEntry = () => {
      setSecureTextEntry( !secureTextEntry );
    },
    renderIcon = ( props ) => (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon  {...props} name={secureTextEntry ? "eye-off" : "eye"} />
      </TouchableWithoutFeedback>
    ),
    formSchema = yup.object( {
      phone: yup
        .string( "Phone Numver must be valid." )
        .required( "Phone Numver is required." ),
      matricNo: yup
        .string( "Matric Number must be valid." )
        .required( "Matric Number is required." ),
      fullname: yup
        .string( "Fullname must be valid." )
        .required( "Fullname is required." ),
      password: yup
        .string()
        .min( 3, "Password must more than 3 characters." )
        .required( "Password is required." )
    } ),
    dispatch = useDispatch(),
    successCallback = () => {
      setIsSubmitting( false );
      navigation.navigate( "HomeScreen" );
    },
    errorCallback = ( error ) => {
      setIsSubmitting( false );
      setResponseMessage( error );
    },
    callback = {
      success: successCallback,
      error: errorCallback
    },
    onSubmit = ( data ) => {
      setIsSubmitting( true );
      setResponseMessage( null );
      dispatch( register( data, callback ) );
    },
    LoadingIndicator = ( props ) => (
      <View style={[ props.style, styles.indicator ]}>
        {isSubmitting === true ? <Spinner status="control" size="small" /> : null}
      </View>
    );

  return (
    <SafeAreaView style={[ globalStyles.root, globalStyles.bgSecondary ]}>
      <Layout>
        <ScrollView style={globalStyles.bgSecondary}>
          <View style={[ globalStyles.containerPadding ]}>
            <View style={[ styles.heading ]}>
              <Image source={primaryLogo} style={styles.logo}></Image>
              <Text
                style={[ globalStyles.textPrimary, globalStyles.fontRegular ]}
              >
                Glad to have you here!
              </Text>
            </View>

            <Card style={{ backgroundColor: 'transparent' }}>
              <Formik
                validationSchema={formSchema}
                initialValues={{
                  fullname: "",
                  phone: "",
                  matricNo: "",
                  password: ""
                }}
                onSubmit={( details ) => {
                  onSubmit( details );
                }}
              >
                {( props ) => (
                  <>
                    <View style={[ globalStyles.formGroup ]}>
                      <Input
                        label="Fullname"
                        onChangeText={props.handleChange( "fullname" )}
                        value={props.values.fullname}
                        textStyle={globalStyles.textSecondary}
                        status={
                          props.values.fullname == "" && props.errors.fullname
                            ? "danger"
                            : "warning"
                        }
                      />
                    </View>

                    <View style={[ globalStyles.formGroup ]}>
                      <Input
                        label="Matric No"
                        onChangeText={props.handleChange( "matricNo" )}
                        value={props.values.matricNo}
                        textStyle={globalStyles.textSecondary}
                        status={
                          props.values.matricNo == "" && props.errors.matricNo
                            ? "danger"
                            : "warning"
                        }
                      />
                    </View>

                    <View style={[ globalStyles.formGroup ]}>
                      <Input
                        label="Phone Number"
                        keyboardType="phone-pad"
                        onChangeText={props.handleChange( "phone" )}
                        value={props.values.phone}
                        textStyle={globalStyles.textSecondary}
                        status={
                          props.values.phone == "" && props.errors.phone
                            ? "danger"
                            : "warning"
                        }
                      />
                    </View>


                    <View style={[ globalStyles.formGroup ]}>
                      <Input
                        label="Password"
                        placeholder="***"
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={props.handleChange( "password" )}
                        value={props.values.password}
                        status={
                          props.values.password == "" && props.errors.password
                            ? "danger"
                            : "warning"
                        }
                        textStyle={globalStyles.textSecondary}
                      />
                    </View>
                    <View style={[ globalStyles.formGroup ]}>
                      <Button
                        disabled={isSubmitting ? true : false}
                        onPress={props.handleSubmit}
                        style={[
                          globalStyles.btn,
                          globalStyles.bgPrimary,
                          globalStyles.noBorder
                        ]}
                        accessoryLeft={
                          isSubmitting === true ? LoadingIndicator : null
                        }
                      >
                        <Text style={globalStyles.textWhite}>Register</Text>
                      </Button>
                      {responseMessage ? <Text style={globalStyles.textWhite}>{responseMessage}</Text> : null

                      }
                    </View>
                    <View style={[ globalStyles.formGroup ]}>
                      <Button
                        size="tiny"
                        style={[
                          globalStyles.borderPrimary,
                          globalStyles.bgTransparent,
                          styles.round
                        ]}
                        onPress={() => navigation.navigate( "LoginScreen" )}
                      >
                        <Text style={globalStyles.textPrimary}>
                          Already a member? login now
                        </Text>
                      </Button>
                    </View>
                  </>
                )}
              </Formik>
            </Card>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};
export default Register;

const styles = StyleSheet.create( {
  heading: {
    marginVertical: ( globalConstants.SCREEN_HEIGHT * 4 ) / 100
  },
  round: {
    borderRadius: 50
  },
  logo: {
    height: 40,
    width: 150
  }
} );
