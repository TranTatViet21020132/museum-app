import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './regulations.style';

const Regulations = () => {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Nội quy</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.contentTitle}>
            Để đảm bảo an toàn và trải nghiệm tốt nhất cho quý khách tham quan Bảo tàng 
            DTHVN, kính mong quý khách đọc kỹ Nội quy và nghiêm chỉnh tuân thủ. Mọi ý 
            kiến góp ý hay thắc mắc, xin liên hệ đại diện Bảo tàng để được giải đáp 
            và trợ giúp.
          </Text>
          <Text style={styles.content}>
            1. Không mang theo vũ khí, chất dễ cháy, nổ, chất gây khói, các chất độc hại 
            như axit, chất ăn mòn, đồ đạc quá khổ và các vật dụng nguy hiểm khác{"\n"}
            2. Để hành lý tư trang đúng nơi quy định (tiền và những vật phẩm có giá trị 
            cao cần đem theo người){"\n"}
            3. Giữ vệ sinh chung, bỏ rác đúng nơi quy định{"\n"}
            4. Không mang đồ ăn, thức uống vào bảo tàng{"\n"}
            5. Không hút thuốc{"\n"}
            6. Không gây ồn ào{"\n"}
            7. Không cầm, sờ, ngồi lên hiện vật, di chuyển hiện vật{"\n"}
            8. Không dùng đèn flash khi chụp ảnh trong các phòng trưng bày{"\n"}
            9. Không tự ý tổ chức các hoạt động trong bảo tàng{"\n"}
            10. Không mang súc vật vào bảo tàng{"\n"}
            11. Không trèo cây, bẻ cành, ngắt hoa, hái quả... trong vườn bảo tàng{"\n"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Regulations;