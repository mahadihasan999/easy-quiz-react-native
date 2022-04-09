import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";

const MainStack = createStackNavigator({

  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Easy Quiz",

    }

  },

  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      // alignContent: 'center',
      // justifyContent: 'center',
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }

});

export default createAppContainer(MainStack);
