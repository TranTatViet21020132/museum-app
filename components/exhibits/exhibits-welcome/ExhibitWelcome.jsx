import {
  View,
  Text,
  ScrollView,
  SafeAreaView
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
  const data = [{
    "parentURL": "",
    "_id": "65464aece4b83096258dff92",
    "url": "http://vme.org.vn/vi/c/category-67/cac-dan-toc-viet-nam-p1.html",
    "parentUrl": "",
    "title": [
        "Các dân tộc Việt Nam"
    ],
    "titleParam": "cac-dan-toc-viet-nam-p1",
    "paragraph": [
        {
            "text": "Việt Nam có dân số hơn 96,2 triệu người (2019) gồm 54 dân tộc: Kinh (Việt) - dân tộc đa số và 53 dân tộc thiểu số. Nhiều dân tộc lại bao gồm một số nhóm địa phương. Bức tranh ngôn ngữ của các dân tộc ở Việt Nam rất phong phú, gồm 5 ngữ hệ:"
        },
        {
            "text": "-    Ngữ hệ Nam Á: gồm hai nhóm ngôn ngữ Việt-Mường và Môn-Khơme"
        },
        {
            "text": "-    Ngữ hệ Thái-Kađai: gồm nhóm Tày-Thái và Kađai"
        },
        {
            "text": "-    Ngữ hệ Hmông-Dao"
        },
        {
            "text": "-    Ngữ hệ Hán-Tạng : gồm nhóm Tạng-Miến và Hán"
        },
        {
            "text": "-    Ngữ hệ Nam Đảo"
        },
        {
            "text": "Mỗi dân tộc có những sắc thái văn hoá riêng, đồng thời giữa các dân tộc cũng có những nét tương đồng. Văn hoá của các dân tộc vừa có sự tiếp nối truyền thống, vừa có sự giao lưu lẫn nhau ở cấp vùng, quốc gia và quốc tế, đặc biệt là quan hệ lâu đời với Trung Quốc, Ấn Độ và Đông Nam Á, sau đó là quá trình tiếp thu những yếu tố văn hoá phương Tây."
        },
        {
            "text": "Lối sống cổ truyền phổ biến của các dân tộc đều dựa trên nông nghiệp trồng lúa nước hoặc lúa rẫy là chính, kết hợp với chăn nuôi gia đình, hái lượm, săn bắt, đánh bắt cá; nghề thủ công (dệt vải, đan lát, rèn, làm gốm, làm mộc…) và kinh tế hàng hoá ở những trình độ khác nhau. Các dân tộc đều lấy làng làm tổ chức xã hội quan trọng, nhưng đa dạng về hình thức quần cư, kiểu dáng nhà cửa, truyền thống gia đình, xã hội và tôn giáo. Tín ngưỡng vạn vật hữu linh, đến nay vẫn phổ biến, là cơ sở cho những sinh hoạt lễ tục nhiều vẻ của phần đông nhân dân các dân tộc. Hiện nay, các dân tộc, ở những mức độ khác nhau, chịu ảnh hưởng của quá trình công nghiệp hóa, hiện đại hóa và hội nhập quốc tế. "
        },
        {
            "text": "Tất cả 54 dân tộc của Việt Nam đều được giới thiệu trong trưng bày thường xuyên ở toà nhà “Trống đồng”, theo lộ trình gồm 12 không gian nối tiếp nhau:"
        },
        {
            "text": "1.     Giới thiệu chung"
        },
        {
            "text": "2.     Việt"
        },
        {
            "text": "3.     Mường, Thổ, Chứt"
        },
        {
            "text": "4.     nhóm Tày-Thái"
        },
        {
            "text": "5.     nhóm Kađai"
        },
        {
            "text": "6.     Hmông-Dao"
        },
        {
            "text": "7.     Tạng-Miến"
        },
        {
            "text": "8.     Môn-Khơme miền Bắc"
        },
        {
            "text": "9.     Môn-Khơme Trường Sơn - Tây Nguyên"
        },
        {
            "text": "10.  Nam Đảo"
        },
        {
            "text": "11.  Chăm, Hoa, Khơme"
        },
        {
            "text": "12.  Giao lưu văn hóa"
        }
    ],
    "images": [
        {
            "image": "http://vme.org.vn/content/uploads/cms/2021/12/29/setwidth625-trung-bay-nha-trong-dong-1.jpg"
        },
        {
            "image": "http://vme.org.vn/content/uploads/cms/2021/12/29/setwidth625-trung-bay-nha-trong-dong-2.jpg"
        }
    ],
    "navigator": [
        {
            "avatar": "http://vme.org.vn/modules/frontend/themes/vme.org.vn/assets/images/vme1.jpg",
            "title": "Nhóm ngôn ngữ Việt - Mường",
            "url": "http://vme.org.vn/vi/c/category-74/nhom-ngon-ngu-viet-muong-p1.html",
            "titleParam": "nhom-ngon-ngu-viet-muong-p1"
        },
        {
            "avatar": "http://vme.org.vn/modules/frontend/themes/vme.org.vn/assets/images/vme1.jpg",
            "title": "Nhóm ngôn ngữ Tày - Thái",
            "url": "http://vme.org.vn/vi/c/category-75/nhom-ngon-ngu-tay-thai-p1.html",
            "titleParam": "nhom-ngon-ngu-tay-thai-p1"
        },
        {
            "avatar": "http://vme.org.vn/modules/frontend/themes/vme.org.vn/assets/images/vme1.jpg",
            "title": "Nhóm ngôn ngữ Kađai",
            "url": "http://vme.org.vn/vi/c/category-76/nhom-ngon-ngu-kadai-p1.html",
            "titleParam": "nhom-ngon-ngu-kadai-p1"
        },
        {
            "avatar": "http://vme.org.vn/modules/frontend/themes/vme.org.vn/assets/images/vme1.jpg",
            "title": "Nhóm ngôn ngữ Hmông - Dao",
            "url": "http://vme.org.vn/vi/c/category-77/nhom-ngon-ngu-hmong-dao-p1.html",
            "titleParam": "nhom-ngon-ngu-hmong-dao-p1"
        },
        {
            "avatar": "http://vme.org.vn/modules/frontend/themes/vme.org.vn/assets/images/vme1.jpg",
            "title": " Nhóm ngôn ngữ Hán",
            "url": "http://vme.org.vn/vi/c/category-78/nhom-ngon-ngu-han-p1.html",
            "titleParam": "nhom-ngon-ngu-han-p1"
        },
        {
            "avatar": "http://vme.org.vn/modules/frontend/themes/vme.org.vn/assets/images/vme1.jpg",
            "title": "Nhóm ngôn ngữ Tạng - Miến",
            "url": "http://vme.org.vn/vi/c/category-79/nhom-ngon-ngu-tang-mien-p1.html",
            "titleParam": "nhom-ngon-ngu-tang-mien-p1"
        },
        {
            "avatar": "http://vme.org.vn/modules/frontend/themes/vme.org.vn/assets/images/vme1.jpg",
            "title": "Nhóm ngôn ngữ Môn - Khơme",
            "url": "http://vme.org.vn/vi/c/category-80/nhom-ngon-ngu-mon-khome-p1.html",
            "titleParam": "nhom-ngon-ngu-mon-khome-p1"
        },
        {
            "avatar": "http://vme.org.vn/modules/frontend/themes/vme.org.vn/assets/images/vme1.jpg",
            "title": "Nhóm ngôn ngữ Nam Đảo",
            "url": "http://vme.org.vn/vi/c/category-81/nhom-ngon-ngu-nam-dao-p1.html",
            "titleParam": "nhom-ngon-ngu-nam-dao-p1"
        }
    ],
    "__v": 0
}]
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get("http://localhost:5000/gallery/cac-dan-toc-viet-nam-p1");
  //     setData(response.data);
  //     console.log(response);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  const paragraphs = data[0].paragraph.map((item, index, array) => {
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
          <Specifics
            title='Contents'
            points={paragraphs ?? ["N/A"]}
          />
        );

      case "Images":
        return (
          <JobAbout info={data[0].images ?? "No data provided"} />
        );

      case "Related Articles":
        return (
          <Specifics
            title='Related Articles'
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
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
