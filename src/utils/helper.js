export const filterData = (searchValue, cocktails) => {
    const filteredData = cocktails.filter((cocktail) => {
        return cocktail.strDrink
            .toLowerCase()
            .includes(searchValue.toLowerCase());
    });

    return filteredData;
};
