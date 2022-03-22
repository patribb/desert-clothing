import { createContext, useState, useEffect } from "react";
import { getcategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesPovider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getcategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        };
        getCategoriesMap();
    }, [])

    // useEffect(() => {
    //   addCollectionAndDocument('categories', SHOP_DATA)
    // }, [])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
};