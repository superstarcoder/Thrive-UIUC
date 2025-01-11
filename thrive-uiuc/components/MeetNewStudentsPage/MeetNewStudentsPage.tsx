import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileCard from '../sharedComponents/ProfileCard'
import { ProfileSettings } from '../../utils/types'
import sharedStyles from '../../styles/SharedStyles'

type Props = {
    setCurrentPage: any
}

const profileSettings1: ProfileSettings = {
    id: "test",
    name: "William Lei",
    year: "Freshman",
    major: "Biotechnology and Molecular Biosciences",
    introduction: "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis massa ultrices donec at nisl vehicula maecenas ex amet varius maximus integer massa urna finibus gravida lacinia dapibus vulputate lacinia eleifend blandit venenatis elementum nulla placerat tortor dignissim risus vel nam vestibulum rhoncus consequat metus himenaeos class maximus vitae fusce imperdiet quisque convallis leo et class consequat montes dictum fames vulputate augue scelerisque justo porta etiam ultricies platea mus sit aenean posuere libero consectetur scelerisque primis nibh maximus congue egestas mauris hac dolor amet congue pretium fusce tempus quisque taciti dictum nascetur tincidunt pellentesque id turpis habitasse ligula felis volutpat rutrum rhoncus cursus semper vitae malesuada ultricies natoque est consequat potenti laoreet erat habitasse eros ex duis dignissim molestie posuere interdum potenti.",
    hobbies: ["biking", "badminton", "boxing"],
    classes: ["CS 233", "MATH 257", "ENG 199", "ENG 201", "CS 225"]
}

const MeetNewStudentsPage = (props: Props) => {
  return (
    <View style={sharedStyles.pageContainer}>
      <ProfileCard profileSettings={profileSettings1} />
    </View>
  )
}

export default MeetNewStudentsPage

const styles = StyleSheet.create({})