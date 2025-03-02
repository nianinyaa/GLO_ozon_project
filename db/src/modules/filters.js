export const searchFilter = (goods, value) => {
    console.log(goods)
    return goods.filter((goodsItem)  => {
        return goodsItem.title.toLowerСase().includes(value.toLowerСase())  
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem)  => {
        return goodsItem.category === value
    })
}