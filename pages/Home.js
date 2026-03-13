import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const history = [
  { id: "1", course: "Mobile Programming", date: "2026-03-01", status: "Present" },
  { id: "2", course: "Database System", date: "2026-03-02", status: "Present" },
  { id: "3", course: "Operating System", date: "2026-03-03", status: "Absent" },
  { id: "4", course: "Computer Network", date: "2026-03-04", status: "Present" },
  { id: "5", course: "Web Programming", date: "2026-03-05", status: "Present" },
  { id: "6", course: "Software Engineering", date: "2026-03-06", status: "Absent" },
  { id: "7", course: "Database System", date: "2026-03-07", status: "Present" },
  { id: "8", course: "Mobile Programming", date: "2026-03-08", status: "Present" },
  { id: "9", course: "Operating System", date: "2026-03-09", status: "Present" },
  { id: "10", course: "Computer Network", date: "2026-03-10", status: "Absent" },
  { id: "11", course: "Web Programming", date: "2026-03-11", status: "Present" },
  { id: "12", course: "Software Engineering", date: "2026-03-12", status: "Present" },
  { id: "13", course: "Database System", date: "2026-03-13", status: "Present" },
  { id: "14", course: "Mobile Programming", date: "2026-03-14", status: "Absent" },
  { id: "15", course: "Operating System", date: "2026-03-15", status: "Present" },
  { id: "16", course: "Computer Network", date: "2026-03-16", status: "Present" },
  { id: "17", course: "Web Programming", date: "2026-03-17", status: "Absent" },
  { id: "18", course: "Software Engineering", date: "2026-03-18", status: "Present" },
  { id: "19", course: "Database System", date: "2026-03-19", status: "Present" },
  { id: "20", course: "Mobile Programming", date: "2026-03-20", status: "Absent" }
];

export default function Home() {

  const renderItem = ({ item }) => (
    <View style={styles.historyCard}>

      <View>
        <Text style={styles.course}>{item.course}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <Text
        style={[
          styles.status,
          { color: item.status === "Present" ? "green" : "red" }
        ]}
      >
        {item.status}
      </Text>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.title}>Attendance App</Text>

        {/* Student Card */}
        <View style={styles.studentCard}>

          <MaterialIcons name="person" size={40} color="gray" />

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>Nazla Nurul 'Aini</Text>
            <Text>NIM : 0320240053</Text>
            <Text>Class : Manajemen Informatika - 2A</Text>
          </View>

        </View>

        {/* Today's Class */}
        <View style={styles.card}>

          <Text style={styles.section}>Today's Class</Text>

          <Text style={styles.course}>Mobile Programming</Text>
          <Text style={styles.date}>08:00 - 10:00</Text>
          <Text style={styles.date}>Lab 3</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CHECK IN</Text>
          </TouchableOpacity>

        </View>

        {/* Attendance History */}
        <Text style={styles.section}>Attendance History</Text>

        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e9e9e9",
    padding: 20
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15
  },

  studentCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center"
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },

  section: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },

  name: {
    fontSize: 16,
    fontWeight: "bold"
  },

  button: {
    marginTop: 10,
    backgroundColor: "#1976D2",
    padding: 12,
    borderRadius: 5,
    width: "100%"
  },

  buttonText: {
    color: "white",
    textAlign: "center"
  },

  historyCard: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  course: {
    fontWeight: "bold"
  },

  date: {
    color: "gray",
    fontSize: 12
  },

  status: {
    fontWeight: "bold"
  }

});