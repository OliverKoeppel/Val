import React from 'react';
import { View, FlatList, Text } from 'react-native';
import './CSS/ProjectListComponent.css';

const data = ["a","b","c","d"];

export class ProjectListComponent extends React.Component{



   render() {
        return (
           <FlatList id ="projectView"
               dataSource={data}
               renderItem={(data) => <View><Text>{data}</Text></View>}
           />
           );
    }
}