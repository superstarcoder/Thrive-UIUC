import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import StudySessionPreviewCard from "../HomePage/StudySessionPreviewCard";
import Color from "../../styles/Color";
import { StyledH4 } from "../sharedComponents/Text/StyledText";
import { findTimeUntil } from "../../utils/utils";
import { LocationCategory, Room, Building } from "../../utils/types";
import { ScrollView } from "react-native-gesture-handler";
import { allBuildings } from "../../utils/types";

export type Props = {
  name: string;
  width: number;
  styleOverride?: Object;
  isSelected?: boolean;
};

const LocationCard = (props: Props) => {
  const { name, width, styleOverride = {}, isSelected = false } = props;
  return (
    <View 
      style={[
        styles.studySessionPreviewCard, 
        { width: width * 0.4 - 10 },
        styleOverride,
        isSelected && styles.selectedLocationCard
      ]}
    >
      <Image source={require("../../assets/testing/Grainger.png")} style={styles.locationImage} />
      <StyledH4 style={{ textAlign: "center" }} text={name} ellipsizeMode="clip"></StyledH4>
    </View>
  );
};

type NavigationItem = { type: "category"; data: LocationCategory } | { type: "building"; data: Building };



const LocationSelectField: React.FC = () => {
  const [navigationStack, setNavigationStack] = useState<NavigationItem[]>([
    { type: "category", data: allBuildings },
  ]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const current = navigationStack[navigationStack.length - 1];

  const handleBack = () => {
    if (navigationStack.length > 1) {
      setNavigationStack((prev) => prev.slice(0, -1));
    }
  };

  const handleEnterCategory = (category: LocationCategory) => {
    setNavigationStack((prev) => [...prev, { type: "category", data: category }]);
  };

  const handleEnterBuilding = (building: Building) => {
    setNavigationStack((prev) => [...prev, { type: "building", data: building }]);
  };

  const toggleSelection = (id: string) => {
    setSelectedLocations((prev) => (prev.includes(id) ? [] : [id]));
  };

  const renderCurrentLevel = () => {
    if (current.type === "category") {
      const category = current.data;
      if (category.subCategories) {
        return category.subCategories.map((sub) => (
          <TouchableOpacity key={sub.id} onPress={() => handleEnterCategory(sub)}>
            <LocationCard name={sub.name} width={360} styleOverride={styles.locationCardStyle} />
          </TouchableOpacity>
        ));
      }
      if (category.buildingsInCategory) {
        return category.buildingsInCategory.map((building) => (
          <TouchableOpacity key={building.id} onPress={() => handleEnterBuilding(building)}>
            <LocationCard name={building.name} width={360} styleOverride={styles.locationCardStyle} />
          </TouchableOpacity>
        ));
      }
      if (category.roomsInCategory) {
        return category.roomsInCategory.map((room) => (
          <TouchableOpacity key={room.id} onPress={() => toggleSelection(room.id)}>
            <LocationCard 
              name={room.name} 
              width={360} 
              styleOverride={styles.locationCardStyle}
              isSelected={selectedLocations.includes(room.id)}
            />
          </TouchableOpacity>
        ));
      }
    } else if (current.type === "building") {
      const building = current.data;
      if (building.subCategories) {
        return building.subCategories.map((sub) => (
          <TouchableOpacity key={sub.id} onPress={() => handleEnterCategory(sub)}>
            <LocationCard name={sub.name} width={360} styleOverride={styles.locationCardStyle} />
          </TouchableOpacity>
        ));
      }
      if (building.rooms) {
        return building.rooms.map((room) => (
          <TouchableOpacity key={room.id} onPress={() => toggleSelection(room.id)}>
            <LocationCard 
              name={room.name} 
              width={360} 
              styleOverride={styles.locationCardStyle}
              isSelected={selectedLocations.includes(room.id)}
            />
          </TouchableOpacity>
        ));
      }
    }

    return <Text style={{ color: "gray", marginTop: 20 }}>No data available in this level.</Text>;
  };

  return (
    <View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity onPress={handleBack} disabled={navigationStack.length <= 1}>
          <Text style={[styles.navText, navigationStack.length <= 1 && styles.navDisabled]}>⬅️ Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.studyLocationOptions}>{renderCurrentLevel()}</View>

      <Text style={styles.selectionText}>
        Selected: {selectedLocations.length > 0 ? selectedLocations.join(", ") : "None"}
      </Text>
    </View>
  );
};

export default LocationSelectField;

const styles = StyleSheet.create({
  // LocationCard
  studySessionPreviewCard: {
    backgroundColor: Color.darkBlue,
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 9,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "flex-start",
  },
  locationImage: {
    top: 0,
    marginBottom: 7,
  },
  // Navigationitem
  navigationButtons: {
    marginVertical: 10,
    alignItems: "center",
  },
  navText: {
    fontSize: 16,
    color: Color.blue,
  },
  navDisabled: {
    color: "gray",
  },
  studyLocationOptions: {
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  locationCardStyle: {
    backgroundColor: Color.darkestBlue,
  },
  selectionText: {
    marginTop: 10,
    textAlign: "center",
    color: Color.blue,
  },
  selectedLocationCard: {
    backgroundColor: Color.blue,
  },
});
