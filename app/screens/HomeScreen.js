import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { icons, images } from "../constants";
import { Books, bookTabs } from "../data";

const Header = ({ bookTxt, groupIcon, notificatonIcon, profileIMG }) => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ width: "50%" }}>
                <Text
                    style={{ marginLeft: 30, marginTop: 8, color: "#313A5A", fontWeight: "700", fontSize: 20 }}>
                    {bookTxt}
                </Text>
            </View>
            <View style={{ width: "50%", flexDirection: "row", marginLeft: 20 }}>
                <Image source={groupIcon} style={{ width: 45, height: 45, marginRight: 8 }} resizeMode="contain" />
                <Image source={notificatonIcon} style={{ width: 45, height: 45, marginRight: 8 }} resizeMode="contain" />
                <Image source={profileIMG} style={{ width: 45, height: 45, marginRight: 8 }} resizeMode="contain" />
            </View>
        </View>
    )
}

const BookfilterTabs = ({ bookTabs, selectBookCategory, onHandleBookCategory }) => {
    return (
        <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 26, marginBottom: 26 }}>
            {
                bookTabs.map((item, index) => (
                    <TouchableOpacity
                        onPress={() => {
                            onHandleBookCategory(item.id, item.bookCategory)
                        }}
                        key={index}
                        activeOpacity={.9}
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: 129,
                            height: 50,
                            backgroundColor: (selectBookCategory == item.id) ? "#fff" : "#F2F3F6",
                            borderRadius: 10,
                        }}
                    >
                        <Text style={{ color: (selectBookCategory == item.id) ? "#2176FF" : "#000", fontWeight: "600" }}>{item.bookCategory}({item.id == 0 ? 10 : 5})</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const BookItemComponent = ({ itemId, bookImg, bookTitle, bookAuthor }) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: "center",
                justifyContent: "center",
                width: 170,
                height: 289,
                borderRadius: 20,
                backgroundColor: "#fff",
                marginRight: 11,
                marginBottom: 11,
                flexDirection: "column"
            }}
            activeOpacity={.9}
            key={itemId}
        >
            <View>
                <Image
                    source={bookImg}
                    style={{ width: 138, height: 206, borderRadius: 10 }}
                />
            </View>
            <View style={{ justifyContent: "flex-end", marginTop: 10 }}>
                <Text style={{ fontWeight: "700", fontSize: 17, lineHeight: 26, fontStyle: "normal", color: "#313A5A" }}>{bookTitle}</Text>
                <Text style={{ fontWeight: "600", fontSize: 12, lineHeight: 20, fontStyle: "normal", color: "#989CAC" }}>{bookAuthor}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const HomeScreen = () => {
    const [renderBooks, setRenderBooks] = useState(Books)
    const [selectBookCategory, setSelectBookCategory] = useState((null || undefined) ?? 0)
    const [filterBookslist, setFilterbookslist] = useState([])

    const handleBookCategory = (id, category) => {
        setSelectBookCategory(id)
        const filterCategory = renderBooks.filter((item) => item.category == category)
        if (id == 0) setFilterbookslist(renderBooks)
        else setFilterbookslist(filterCategory)
    }

    useEffect(() => {
        setSelectBookCategory(0)
        setFilterbookslist(Books)
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F3F6" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    bookTxt={"Books"}
                    groupIcon={icons.group}
                    notificatonIcon={icons.notification}
                    profileIMG={images.profile}
                />
                <BookfilterTabs
                    bookTabs={bookTabs}
                    selectBookCategory={selectBookCategory}
                    onHandleBookCategory={handleBookCategory}
                />
                <View style={{ marginLeft: 20 }}>
                    <FlatList
                        data={filterBookslist}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: "40%" }}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <BookItemComponent
                                itemId={item.id}
                                bookImg={item.bookImg}
                                bookTitle={item.bookTitle}
                                bookAuthor={item.bookAuthor}
                            />
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}