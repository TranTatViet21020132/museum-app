import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "./searchlistcard.style";

const FavouriteListCard = ({ item, handleNavigate, handleDelete }) => {
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity style={styles.container} onPress={handleNavigate}>
                <TouchableOpacity style={styles.logoContainer}>
                    <Image
                        source={{
                            uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                        }}
                        resizeMode='contain'
                        style={styles.logImage}
                    />
                </TouchableOpacity>

                <View style={styles.textContainer}>
                    <Text style={styles.jobName} numberOfLines={1}>
                        {item}
                    </Text>

                    {/* <Text style={styles.jobType}>{job?.job_employment_type}</Text> */}
                </View>
                <TouchableOpacity onPress={handleDelete}>
                    <View>
                        <Ionicons name="trash-outline" size={25} color="white" />
                    </View>
                </TouchableOpacity>

            </TouchableOpacity>

        </View>
    );
};

export default FavouriteListCard;
