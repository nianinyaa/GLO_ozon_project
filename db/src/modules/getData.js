const getData = (str) => {
    return fetch(
        `https://test-95955-default-rtdb.firebaseio.com/goods.json`
    )
        .then((response) => {
            return response.json()
        })
}

export default getData
