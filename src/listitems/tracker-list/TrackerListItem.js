import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import globalStyles from '../../thems/global/styles/styles';

class TrackerListItem extends React.Component {

    openObjectiveView = () => {
        this.props.navigation.navigate('Objectives', {
            tracker: this.props.tracker
        });
    }

    render() {
      return (
        <TouchableOpacity onPress={() => this.openObjectiveView()}>
            <View style={[globalStyles.listItemTrackerStyle, globalStyles.listThreeSidedBorderStyle]}>
                <View>
                    <Text style={globalStyles.listItemTrackerTitleStyle}>
                        { this.props.tracker.subject.name} - { this.props.tracker.group.name}
                    </Text>
                    <Text style={globalStyles.listItemTrackerSubTitleStyle}>
                        { this.props.tracker.curriculum.name}
                    </Text>
                </View>
                    {/* <Icon name='chevron-right-box' style={globalStyles.listClickIcon}  /> */}
            </View>
        </TouchableOpacity>
      );
    };
}

export default TrackerListItem;
