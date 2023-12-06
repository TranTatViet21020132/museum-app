import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './visits.style';

const Visits = () => {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tham quan</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            THAM QUAN THEO ĐOÀN VÀ TRƯỜNG HỌC
          </Text>
          <Text style={styles.content}>
            - 04-3756-2193 (#100 / #101, Bảo tàng mở cửa hàng ngày từ 8h30 đến 17h30. 
            Đóng cửa các ngày thứ Hai và Tết Nguyên đán){"\n"}{"\n"}
            - 04-3756-2193 (#118, trừ thứ Bảy và Chủ nhật hàng tuần){"\n"}{"\n"}
            Một số quy định tham quan theo đoàn:{"\n"}{"\n"}
            Bảo tàng Dân tộc học Việt Nam có các không gian trưng bày trong nhà và không 
            gian vườn với các công trình kiến trúc dân gian. Để đảm bảo chất lượng tham 
            quan, không nên tổ chức các đoàn quá đông. Đối với các đoàn tham quan có 
            thuyết minh, số lượng không quá 30 người/thuyết minh. Đối với các học sinh, 
            để học sinh có thể "vừa học, vừa chơi", các lớp nên tổ chức tham quan rải rác 
            trong năm, tham quan từng lớp một, không nên tổ chức tham quan theo trường. 
            Bảo tàng có các chương trình nhà trường và hoạt động tham quan phù hợp với 
            các độ tuổi khác nhau và với chương trình học, các môn học khác nhau; ngoài 
            ra còn có các chương trình giáo viên hướng dẫn tổ chức tham quan cho học sinh.
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            THAM QUAN CÓ HƯỚNG DẪN
          </Text>
          <Text style={styles.content}>
            - 04-3756-2193 (#100 / #101, Bảo tàng mở cửa hàng ngày từ 8h30 đến 17h30. 
            Đóng cửa các ngày thứ Hai và Tết Nguyên đán){"\n"}{"\n"}
            - 04-3756-2193 (#118, Bảo tàng mở cửa hàng ngày từ 8h30 đến 17h30. 
            Đóng cửa các ngày thứ Hai và Tết Nguyên đán){"\n"}{"\n"}
            Bảo tàng Dân tộc học Việt Nam có các hướng dẫn viên tiếng Việt, Anh, Pháp 
            cho các khu vực khác nhau (Các dân tộc Việt Nam, Văn hoá Đông Nam Á, Vườn 
            Kiến trúc...) Để đảm bảo chất lượng tham quan, không nên tổ chức các đoàn 
            quá đông, số lượng không quá 30 người/hướng dẫn. Bạn có thể yêu cầu hướng 
            dẫn tại chỗ, mua vé trước cổng Bảo tàng; tuy nhiên, để đảm bảo chắc chắn 
            có hướng dẫn (vì số lượng hướng dẫn viên có hạn), bạn nên đăng ký trước 
            khi đến Bảo tàng theo số điện thoại trên.
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            THAM QUAN CÓ THUYẾT MINH TẠI ĐIỂM (TÒA TRỐNG ĐỒNG, VƯỜN KIẾN TRÚC, TÒA CÁNH DIỀU)
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            THAM QUAN CÓ THUYẾT MINH THEO TỪNG CHỦ ĐỀ (ĐỒ VẢI, KIẾN TRÚC, TÔN GIÁO)
          </Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            THAM QUAN CÓ SỬ DỤNG ỨNG DỤNG THUYẾT MINH TỰ ĐỘNG (AUDIOGUIDE, BÀI THUYẾT 
            MINH CÀI SẴN TRONG MOBILE APP)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Visits;