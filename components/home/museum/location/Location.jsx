import React from 'react';
import { View, Text, ScrollView } from 'react-native';
// import MapView from 'react-native-maps';
import styles from './location.style';

const Location = () => {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Đến với bảo tàng</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            Vị trí bảo tàng trên bản đồ:
          </Text>
          {/* <MapView
            style={styles.map}
            provider="apple" // Set the provider to 'apple'
            initialRegion={{
              latitude: 21.0406,
              longitude: 105.7987,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            <Marker
              coordinate={{
                latitude: 21.0406,
                longitude: 105.7987,
              }}
              title="Bảo tàng Dân tộc học Việt Nam"
              description="Đường Nguyễn Văn Huyên, Quận Cầu Giấy, Hà Nội, Việt Nam"
            />
          </MapView> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Location;
