import React from "react";
import { ScrollView, StatusBar } from "react-native";

import compilerDesignQuestions from "../data/compilerDesign";
import oopQuestions from "../data/oop";
import pervasiveQuestions from "../data/pervasive";
import CprogrammingQuestions from "../data/cProgramming";
import CPPprogrammingQuestions from "../data/cpp";
import DataAnalysisQuestions from "../data/dataAnalysis";
import MlQuestions from "../data/ml";
import CCQuestions from "../data/cloudComputing";
import CNQuestions from "../data/computerNetworks";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Pervasive Computing    50+"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Pervasive Computing",
          questions: pervasiveQuestions,
          color: "#49475B"
        })
      }
    />
    <RowItem
      name="Compiler Design      60+"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Compiler Design",
          questions: compilerDesignQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Object Oriented Programming    25+"
      color="#0093AB"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Object Oriented Programming",
          questions: oopQuestions,
          color: "#0093AB"
        })
      }
    />
    <RowItem
      name="C+ Programming Basic    35+"
      color="#00AFC1"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "C+ Programming Basic",
          questions: CprogrammingQuestions,
          color: "#00AFC1"
        })
      }
    />
    <RowItem
      name="C++  (Basic)    50+"
      color="#006778"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "C++  (Basic)",
          questions: CPPprogrammingQuestions,
          color: "#006778"
        })
      }
    />
    <RowItem
      name="Data Analysis   40+"
      color="#799296"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Data Analysis",
          questions: DataAnalysisQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Machine Learning (ML)    35+"
      color="#00AFC1"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Machine Learning (ML) ",
          questions: MlQuestions,
          color: "#00AFC1"
        })
      }
    />
    <RowItem
      name="Cloud Computing    50+"
      color="#006778"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Cloud Computing ",
          questions: CCQuestions,
          color: "#006778"
        })
      }
    />
    <RowItem
      name="Computer Networking   40+"
      color="#799296"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computer Networking",
          questions: CNQuestions,
          color: "#799496"
        })
      }
    />

  </ScrollView>
);
