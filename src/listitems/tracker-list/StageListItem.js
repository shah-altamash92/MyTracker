import React from "react";
import { View, Text, FlatList } from "react-native";

import YearListItem from "./YearListItem";

import globalStyles from '../../thems/global/styles/styles';

class StageListItem extends React.Component {

      render(){
        return (
            <View style={ [globalStyles.margin20, globalStyles.marginBottom20]}>
                <View style={globalStyles.listItemDarkHeaderStyle}>
                    <Text style={globalStyles.listItemStageHeaderTextStyle}>
                        { this.props.stage.curriculum_type.name }
                    </Text>
                </View>
                
                <FlatList
                    data={this.props.stage.years}
                    keyExtractor={(item, index) => item.year.uuid+'='+index}
                    renderItem={({item}) => <YearListItem years={item} navigation= {this.props.navigation} />}
                  />
            </View>
          )
      }
}

export default StageListItem;