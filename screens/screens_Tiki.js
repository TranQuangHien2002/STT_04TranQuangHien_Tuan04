import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function tiki() {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.viewInfo}>
                    <Image
                        style={styles.img}
                        source={require("../assets/book.png")}
                    />
                    <View style={styles.info}>
                        <Text style={styles.txtTitle}>
                            Nguyên hàm tích phân và ứng dụng
                        </Text>
                        <Text style={styles.txtTitle}>
                            Cung cấp bởi Tiki Trading
                        </Text>
                        <Text style={styles.txtPrice}>
                            141.800 đ
                        </Text>
                        <Text style={styles.txtPriceBig}>
                            141.800 đ
                        </Text>
                        <View style={styles.buy}>
                            <View style={styles.price}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "gray",
                                        height: 30,
                                        width: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>-</Text>
                                </TouchableOpacity>
                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>1</Text>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "gray",
                                        height: 30,
                                        width: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ color: "blue", fontWeight: "bold" }}>
                                Mua ngay
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <Text style={{ fontWeight: "700" }}>Mã giảm giá đã lưu</Text>
                        <Text style={{ fontWeight: "700", color: "blue", marginLeft: 30 }}>
                            Xem tại đây
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", height: 110, marginTop: 30 }}>
                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: "black",
                                height: 50,
                                width: "60%",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                paddingLeft: 20,
                                flexDirection: "row",
                            }}
                        >
                            <View
                                style={{ backgroundColor: "yellow", height: 20, width: 50 }}
                            ></View>
                            <Text
                                style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}
                            >
                                Mã giảm giá
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                marginLeft: 20,
                                height: 50,
                                backgroundColor: "#0A5EB7",
                                width: 140,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{ fontWeight: "bold", fontSize: 20, color: "white" }}
                            >
                                Áp dụng
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.containerBody}>
                <View
                    style={{
                        backgroundColor: "white",
                        flexDirection: "row",
                        height: 50,
                        alignItems: "center",
                        paddingLeft: 10,
                    }}
                >
                    <Text style={{ fontWeight: "bold" }}>
                        Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                    </Text>
                    <Text style={{ fontWeight: "bold", color: "blue", marginLeft: 5 }}>
                        Nhập tại đây?
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: "white",
                        flexDirection: "row",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: 10,
                        paddingRight: 50,
                        marginTop: 15,
                    }}
                >
                    <Text style={{ fontWeight: "bold", fontSize: 25 }}>Tạm Tính</Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: "red",
                            fontSize: 25,
                            marginLeft: 5,
                        }}
                    >
                        141.800 đ
                    </Text>
                </View>
                <View></View>
            </View>
            <View style={styles.containerFooter}>
                <View style={{ paddingVertical: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "gray" }}>Thành Tiền</Text>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "red" }}>141.800 đ</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: "#E53935", height: 50, justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25, textAlign: "center", color: "white" }}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
let styles = StyleSheet.create({
    container: { flex: 1 },
    containerHeader: { flex: 4, padding: 10 },
    containerBody: { flex: 4, paddingTop: 10, backgroundColor: "#C4C4C4" },
    containerFooter: { flex: 2, padding: 20 },
    info: { flexDirection: "column", marginLeft: 20 },
    viewInfo: {
        flexDirection: "row",
    },
    price: {
        flexDirection: "row",
        width: 100,
        justifyContent: "space-between",
        marginTop: 15,
    },
    buy: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    img: {
        height: 150,
        width: 120
    },
    txtTitle: {
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 10
    },
    txtPrice: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10,
        color: "red",
    },
    txtPriceBig: {
        fontWeight: "bold",
        fontSize: 15,
        color: "gray",
        textDecorationLine: "line-through",
    }
});