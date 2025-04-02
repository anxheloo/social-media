import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarActiveTintColor: "red",
        // tabBarInactiveBackgroundColor: "black",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          backgroundColor: "black",
          height: 40,
          // paddingBottom: 8,
          paddingTop: 8,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Ionicons
              name="home"
              size={size}
              // color={color}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Ionicons
              name="heart"
              size={size}
              // color={color}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Ionicons
              name="add"
              size={size}
              // color={color}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Ionicons
              name="bookmarks"
              size={size}
              // color={color}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <Ionicons
              name="person"
              size={size}
              // color={color}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
