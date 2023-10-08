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
                                <TouchableOpacity style={styles.wap}>
                                    <Text style={styles.text}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.text}>1</Text>
                                <TouchableOpacity style={styles.wap}>
                                    <Text style={styles.text}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.buyText}>
                                Mua ngay
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.discountHeader}>
                        <Text style={styles.discountHeaderText}>Mã giảm giá đã lưu</Text>
                        <Text style={styles.discountHeaderTextBlue}>
                            Xem tại đây
                        </Text>
                    </View>
                    <View style={styles.discountContainer}>
                        <View style={styles.discountInputContainer}>
                            <View
                                style={styles.discountCodeIndicator}
                            ></View>
                            <Text
                                style={styles.discountCodeText}
                            >
                                Mã giảm giá
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.discountApplyButton}
                        >
                            <Text
                                style={styles.discountApplyButtonText}
                            >
                                Áp dụng
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.containerBody}>
                <View
                    style={styles.giftCardContainer}
                >
                    <Text style={styles.giftCardText}>
                        Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                    </Text>
                    <Text style={styles.giftCardTextBlue}>
                        Nhập tại đây?
                    </Text>
                </View>
                <View
                    style={styles.subtotalContainer}
                >
                    <Text style={styles.subtotalText}>
                        Tạm Tính
                    </Text>
                    <Text
                        style={styles.subtotalPrice}
                    >
                        141.800 đ
                    </Text>
                </View>
            </View>
            <View style={styles.containerFooter}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Thành Tiền</Text>
                    <Text style={styles.totalPrice}>141.800 đ</Text>
                </View>
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHeader: {
        flex: 4,
        padding: 10,
    },
    containerBody: {
        flex: 4,
        paddingTop: 10,
        backgroundColor: "#C4C4C4",
    },
    containerFooter: {
        flex: 2,
        padding: 20,
    },
    info: {
        flexDirection: "column",
        marginLeft: 20,
    },
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
        width: 120,
    },
    txtTitle: {
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 10,
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
    },
    wap: {
        backgroundColor: "gray",
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
    discountHeader: {
        flexDirection: "row",
        marginTop: 20,
    },
    discountHeaderText: {
        fontWeight: "700",
    },
    discountHeaderTextBlue: {
        fontWeight: "700",
        color: "blue",
        marginLeft: 30,
    },
    discountContainer: {
        flexDirection: "row",
        height: 110,
        marginTop: 30,
    },
    discountInputContainer: {
        borderWidth: 1,
        borderColor: "black",
        height: 50,
        width: "60%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 20,
        flexDirection: "row",
    },
    discountCodeIndicator: {
        backgroundColor: "yellow",
        height: 20,
        width: 50,
    },
    discountCodeText: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10,
    },
    discountApplyButton: {
        marginLeft: 20,
        height: 50,
        backgroundColor: "#0A5EB7",
        width: 140,
        alignItems: "center",
        justifyContent: "center",
    },
    discountApplyButtonText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },
    giftCardContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        paddingLeft: 10,
    },
    giftCardText: {
        fontWeight: "bold",
    },
    giftCardTextBlue: {
        fontWeight: "bold",
        color: "blue",
        marginLeft: 5,
    },
    subtotalContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingRight: 50,
        marginTop: 15,
    },
    subtotalText: {
        fontWeight: "bold",
        fontSize: 25,
    },
    subtotalPrice: {
        fontWeight: "bold",
        color: "red",
        fontSize: 25,
        marginLeft: 5,
    },
    totalContainer: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    totalText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "gray",
    },
    totalPrice: {
        fontSize: 25,
        fontWeight: "bold",
        color: "red",
    },
    orderButton: {
        backgroundColor: "#E53935",
        height: 50,
        justifyContent: "center",
    },
    orderButtonText: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        color: "white",
    },
});
