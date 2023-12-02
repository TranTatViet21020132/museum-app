import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './fees.style';

const Fees = () => {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Giá vé</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            Mọi thắc mắc về Giá vé và Lệ phí, xin liên hệ đại diện Bảo tàng DTHVN 
            để được giải đáp, hỗ trợ.
          </Text>
          <Text style={styles.content}>     
            <Text style={styles.criteriaTitle}>GIÁ VÉ</Text>: 40.000đ/người/lượt{"\n"}
            - Sinh viên: 20.000 đồng/người/lượt;{"\n"}
            - Học sinh: 10.000 đồng/người/lượt;{"\n"}{"\n"}
            <Text style={styles.criteriaTitle}>GIẢM VÉ</Text>{"\n"}
            - Các đối tượng được hưởng chính sách ưu đãi hưởng thụ văn hóa 
            (Người cao tuổi; Người khuyết tật nặng...): 50%{"\n"}
            - Người dân tộc thiểu số: 50%{"\n"}{"\n"}
            <Text style={styles.criteriaTitle}>MIỄN VÉ</Text>{"\n"}
            - Trẻ em dưới 6 tuổi;{"\n"}
            - Người khuyết tật nặng đặc biệt;{"\n"}
            - Thẻ ICOM;{"\n"}
            - Thẻ Người bạn Bảo tàng của BTDTHVN;{"\n"}
            - Thẻ nhà báo;{"\n"}
            - Nhà tài trợ.{"\n"}{"\n"}
            <Text style={styles.criteriaTitle}>PHÍ THUYẾT MINH</Text>{"\n"}
            - Thuyết minh trong nhà tiếng Việt: 50.000đ{"\n"}
            - Thuyết minh ngoài trời tiếng Việt: 50.000đ{"\n"}
            - Thuyết minh toàn bộ Bảo tàng tiếng Việt: 100.000đ{"\n"}
            - Thuyết minh trong nhà tiếng Anh/Pháp: 100.000đ{"\n"}{"\n"}
            <Text style={styles.criteriaTitle}>PHÍ CHỤP ẢNH</Text>{"\n"}
            - Máy ảnh du lịch: 50.000đ/máy{"\n"}
            - Máy ảnh chuyên nghiệp: 500.000đ/máy{"\n"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Fees;