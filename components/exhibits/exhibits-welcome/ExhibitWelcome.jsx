import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import {
  JobAbout,
  JobTabs,
  Specifics,
} from "../../../components";
import { useEffect, useState } from "react";
import { COLORS, icons, images, SIZES } from "../../../constants";
import styles from "./exhibitwelcome.style";
import axios from "axios";

const tabs = ["Contents", "Images", "Related Articles"];

const ExhibitWelcome = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://192.168.1.128:5000/gallery/trung-bay-thuong-xuyen-p1");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  const paragraphs = data?.paragraph?.map((item, index, array) => {
    const newText = (item.text.startsWith('-') || /^\d/.test(item.text))
      ? `\n${item.text}`
      : item.text;

    // Add a newline if the current and next items don't start with a dash or a number
    const nextItem = array[index + 1];
    const addNewline = !nextItem || !(nextItem.text.startsWith('-') || /^\d/.test(nextItem.text));

    return (
      <Text key={index} style={styles.text}>
        {newText}{addNewline ? '\n' : ' '}
      </Text>
    );
  });


  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Contents":
        return (
          <>
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : <Specifics
            title='Contents'
            points={paragraphs ?? ["N/A"]}
            />
          }
          </>
          
        );

      case "Images":
        return (
          <>
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : <JobAbout info={data?.images ?? "No data provided"} />
          }
          </>
        );

      case "Related Articles":
        return (
          <>
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : <Specifics
            title='Related Articles'
            points={error ? ["N/A"] : data?.navigator }
            />
          }
          </>  
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
        
        <View style={{ padding: SIZES.medium }}>
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExhibitWelcome;
