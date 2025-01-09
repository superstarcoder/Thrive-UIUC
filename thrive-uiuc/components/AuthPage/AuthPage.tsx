import { StyleSheet, Text, View } from 'react-native'
import React, { startTransition } from 'react'
import ContinueButton from './ContinueButton'
import { StyledH1, StyledH2 } from "../sharedComponents/Text/StyledText";
import sharedStyles from "../../styles/SharedStyles";
import { PageName } from '../../App';

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<PageName>>
}

const AuthPage = ({setCurrentPage}: Props) => {
  return (
    <View style={[sharedStyles.pageContainer, styles.authPage]}>
        <StyledH1 text={"Create Your Profile!"}/>
        <ContinueButton setCurrentPage={setCurrentPage}/>
    </View>
  )
}

export default AuthPage;

const styles = StyleSheet.create({
  authPage: {
    justifyContent: "center",
    paddingTop: "0%",
    gap: 20,
  }
})