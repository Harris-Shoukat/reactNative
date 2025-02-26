import { View, Text, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const itemList = [
  {
    title: 'Fruits',
    data: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Mango' },
      { id: 4, name: 'Grapes' },
    ],
  },
  {
    title: 'Vegetables',
    data: [
      { id: 5, name: 'Carrot' },
      { id: 6, name: 'Potato' },
      { id: 7, name: 'Tomato' },
    ],
  },
];

const SectionLists = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (title) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title], // Toggle the visibility
    }));
  };

  const renderItems = ({ item, section }) => {
    if (!expandedSections[section.title]) return null; // Hide items if section is not expanded
    return (
      <View style={{ backgroundColor: '#fae5d3', paddingHorizontal: 20, paddingVertical: 2, marginVertical: 6 }}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  const renderHeader = ({ section }) => {
    return (
      <TouchableOpacity onPress={() => toggleSection(section.title)}>
        <View>
          <Text style={{ backgroundColor: '#d0d3d4', fontSize: 20, textAlign: 'center', padding: 10 }}>
            {section.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Text style={{ marginTop: 60, fontSize: 30, textAlign: 'center' }}>
        SectionLists
      </Text>
      <View>
        <SectionList
          sections={itemList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItems}
          renderSectionHeader={renderHeader}
        />
      </View>
    </SafeAreaView>
  );
};

export default SectionLists;
