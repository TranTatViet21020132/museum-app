import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './history.style';

const History = () => {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lịch sử bảo tàng</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            Trực thuộc Viện Hàn lâm Khoa học xã hội Việt Nam, Bảo tàng Dân tộc học 
            Việt Nam do Nhà nước đầu tư xây dựng và nằm trong hệ thống các bảo tàng 
            quốc gia ở Việt Nam
          </Text>
          <Text style={styles.content}>
          Bảo tàng Dân tộc học Việt Nam có nhiều chức năng: nghiên cứu, sưu tầm, 
          bảo quản, phục chế hiện vật và tư liệu về các dân tộc; tổ chức trưng bày, 
          trình diễn và những hình thức hoạt động khác để giới thiệu, giáo dục về 
          văn hoá của các dân tộc ở Việt Nam cũng như các nước khác...{"\n"}{"\n"}
          Quá trình hình thành Bảo tàng Dân tộc học Việt Nam được xúc tiến từ những 
          năm 80 của thế kỷ XX, khi điều kiện kinh tế - xã hội của đất nước còn vô 
          cùng khó khăn trong thời hậu chiến. Ngày 24/10/1995, Thủ tướng Chính phủ 
          ban hành Quyết định thành lập Bảo tàng Dân tộc học Việt Nam. Ngày 12/11/1997, 
          nhân dịp Hội nghị thượng đỉnh các nước sử dụng tiếng Pháp họp tại Hà Nội, 
          Bảo tàng tổ chức lễ khánh thành, với sự có mặt của Phó chủ tịch nước 
          Nguyễn Thị Bình và Tổng thống Cộng hoà Pháp Jacques Chirac.
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            Bảo tàng tọa lạc trong khuôn viên rộng gần 4,5ha, bao gồm ba khu trưng bày:
          </Text>
          <Text style={styles.content}>
            - Thứ nhất, tòa nhà 2 tầng có tên gọi Trống đồng, trưng bày về các dân tộc 
            ở Việt Nam, bắt đầu mở cửa phục vụ công chúng từ ngày 13/11/1997.{"\n"}{"\n"}
            - Thứ hai, khu trưng bày ngoài trời, được gọi là Vườn kiến trúc, rộng khoảng 
            2ha, xây dựng từ năm 1998 đến 2006, giới thiệu chủ yếu 10 công trình kiến 
            trúc dân gian của 10 dân tộc ở Việt Nam.{"\n"}{"\n"}
            - Thứ ba, tòa nhà 4 tầng có tên gọi Cánh diều, khởi công xây dựng tháng 
            6/2007 và khai trương trưng bày đầu tiên vào cuối năm 2013, là khu trưng 
            bày về các cư dân ngoài Việt Nam, trước hết là các dân tộc ở Đông Nam Á.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default History;