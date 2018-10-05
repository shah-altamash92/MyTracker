import React from "react";
import { View, Text, FlatList } from "react-native";

import TrackerListItem from "./TrackerListItem";

import globalStyles from '../../thems/global/styles/styles';

class YearListItem extends React.Component{

      render(){
        return (
            <View>
                <Text style={globalStyles.listItemYearHeaderStyle}>
                    { this.props.years.year.name}
                </Text>
                <FlatList
                    data={this.props.years.trackers}
                    keyExtractor={(item, index) => item.subject.uuid+'='+index}
                    renderItem={({item}) => <TrackerListItem tracker={item} navigation= {this.props.navigation} />}
                  />
            </View>
          );
      }
}

export default YearListItem;