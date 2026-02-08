import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState()

    // API base URL - uses proxy in dev, direct URL in production
    const API_URL = import.meta.env.VITE_API_URL;

    // fetching all products from api
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get(`${API_URL}/products?limit=150`)
            console.log(res);
            const productsData = res.data

            // Duplicate products to create more pages (5x = ~100 products = 13 pages)
            const multipliedData = []
            for (let i = 0; i < 5; i++) {
                productsData.forEach((product, index) => {
                    multipliedData.push({
                        ...product,
                        id: product.id + (i * 1000) // Unique ID for each duplicate
                    })
                })
            }
            setData(multipliedData)

        } catch (error) {
            console.log(error);

        }
    }

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property]
        }).filter((item) => item)
        newVal = ["All", ...new Set(newVal)]
        return newVal
    }

    const categoryOnlyData = getUniqueCategory(data, "category")
    const brandOnlyData = getUniqueCategory(data, "brand")
    return <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext)
