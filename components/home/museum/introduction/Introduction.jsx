import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './introduction.style';

const Introduction = () => {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Giới Thiệu</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            Bảo tàng Dân tộc học Việt Nam
          </Text>
          <Text style={styles.content}>
            Ngày 12 tháng 11 năm 1997, tại Hà Nội diễn ra một sự kiện quan trọng: 
            Phó Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam Nguyễn Thị Bình 
            và Tổng thống Cộng hòa Pháp Jacques Chirac cắt băng khai trương Bảo 
            tàng Dân tộc học Việt Nam.{"\n"}
            Từ tòa Trống đồng giới thiệu 54 dân tộc Việt Nam, Bảo tàng Dân tộc học 
            Việt Nam đã từng bước hoàn thiện khu Vườn Kiến trúc với 10 công trình 
            dân gian đại diện cho các loại hình khác nhau của nhiều dân tộc và vùng 
            văn hóa. Không dừng lại ở giới thiệu về Việt Nam, Bảo tàng xây dựng tòa 
            Cánh diều, trưng bày kết nối với các tộc người ở Đông Nam Á. Và xa hơn 
            thế, các trưng bày vươn ra châu Á, châu Đại Dương, châu Phi và Mỹ Latin, 
            nhờ những sưu tập hiện vật được hiến tặng. Trải qua hành trình hơn 20 năm, 
            cùng với các trưng bày thường xuyên là hàng loạt trưng bày nhất thời, 
            những hoạt động trình diễn văn hóa phi vật thể, các chương trình hoạt 
            động giáo dục trải nghiệm… đã làm cho Bảo tàng Dân tộc học Việt Nam 
            sống động và trở thành một điểm sáng, một điểm tham quan thu hút đông 
            đảo du khách trong nước và quốc tế, được công chúng mến mộ. {"\n"}{"\n"}Trong 
            ba năm liền (2012, 2013, 2014), Bảo tàng Dân tộc học Việt Nam được TripAdvisor, 
            trang web du lịch nổi tiếng thế giới, bình chọn là Bảo tàng 
            xuất sắc, xếp thứ tư trong 25 bảo tàng hấp dẫn nhất châu Á. Ba năm 
            tiếp theo (2015, 2016, 2017), Bảo tàng Dân tộc học Việt Nam được 
            vinh danh là Điểm tham quan du lịch hàng đầu Việt Nam, do Bộ Văn hóa, 
            Thể thao và Du lịch, Tổng cục Du lịch và Hiệp hội Du lịch Việt Nam trao 
            tặng. Thậm chí, ngay trong thời kỳ dịch bệnh Covid-19 ảnh hưởng nặng 
            nề đến Việt Nam và các nước trên thế giới (2020-2021), Bảo tàng Dân tộc 
            học Việt Nam vẫn không ngừng sáng tạo để đưa đến cho công chúng những sản 
            phẩm văn hóa đa dạng, đặc sắc và thích ứng linh hoạt với nhu cầu thay đổi 
            của xã hội, cũng như tình hình “bình thường mới”. Bảo tàng Dân tộc học 
            Việt Nam đã vinh hạnh và tự hào khi là bảo tàng duy nhất ở Việt Nam được 
            Bộ Văn hóa, Thể thao và Du lịch trao tặng Bằng khen vì đã có thành tích 
            xuất sắc trong xây dựng và tổ chức hoạt động du lịch tại địa phương năm 2021.{"\n"}{"\n"}
            Để đạt được các kết quả đó, trong suốt quá trình hình thành và phát triển, 
            đội ngũ nhân viên của Bảo tàng Dân tộc học Việt Nam luôn hướng theo các quan 
            niệm, tiếp cận phương thức hoạt động mới. Bảo tàng Dân tộc học Việt Nam 
            cũng luôn nhận được sự hỗ trợ có hiệu quả của nhiều chuyên gia, tổ chức 
            trong nước và quốc tế. Quá trình làm việc không mệt mỏi ấy là quá trình cán 
            bộ, nhân viên Bảo tàng tích lũy kiến thức và những trải nghiệm chuyên nghiệp 
            quý báu.
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            Tầm nhìn
          </Text>
          <Text style={styles.content}>
            Sứ mệnh của Bảo tàng Dân tộc học Việt Nam là từng bước nghiên cứu khoa học, 
            sưu tầm, kiểm kê, bảo quản, trưng bày, trình diễn, tổ chức Hoạt động giáo dục, 
            nhằm góp phần vào công cuộc bảo tồn sự đa dạng văn hóa của các dân tộc ở Việt Nam, 
            ở khu vực Đông Nam Á và trên toàn thế giới.
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            Những con số
          </Text>
          <Text style={styles.content}>
            - 12-11-1997: Là thời điểm Bảo tàng Dân tộc học Việt Nam mở cửa đón công chúng{"\n"}
            - 500.000: Là số lượt khách tham quan Bảo tàng mỗi năm{"\n"}
            - 14.000: Là số lượt khách tham quan bảo tàng và tham gia sự kiện Trung Thu{"\n"}
            - 43.799m²: Là diện tích toàn bộ khuôn viên BTDTHVN{"\n"}
            - 20.000m²: Là diện tích khu vườn Kiến trúc của BTDTHVN{"\n"}
            - 2000m²: Là diện tích mặt bằng trưng bày thường xuyên về văn hóa các dân tộc Việt Nam{"\n"}
            - 30.000: Là số lượng đơn vị hiện vật mà BTDTHVN đang trưng bày hoặc bảo quản trong kho{"\n"}
            - 130.000: Là số lượng đơn vị tư liệu ảnh, và Phim mà BTDTHVN đang sử dụng hoặc và bảo quản{"\n"}
            - 1646: Là số lượng đơn vị hiện vật về văn hóa của các dân tộc ở Việt Nam đang được trưng bày thường xuyên trong tòa Trống đồng{"\n"}
            - 280: Là số đơn vị hiện vật đang được trưng bày trong nhà dài Êđê{"\n"}
            - 10: Là số công trình kiến trúc dân gian đặc sắc của các dân tộc ở Việt Nam đang được trưng bày trong Vườn Kiến trúc của BTDTHVN{"\n"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Introduction;