import request from 'superagent'

export function getProducts(searchFilter, catFilter) {

    return request.get('/products')
        .then(products => {
            // console.log(products);


            // console.log(searchFilter)
            let useSearchFilter = true
            let useCatFilter = true
            let productsArray = products.body
            if (searchFilter === undefined || searchFilter[0] === "") {
                useSearchFilter = false



            }
            if (catFilter === undefined || catFilter.length === 0) {
                useCatFilter = false
            }

            // console.log(useSearchFilter, useCatFilter);



            let filteredArray = productsArray.filter(product => {
                let match1 = false
                let match2 = false

                if (useSearchFilter === true) {
                    searchFilter.forEach(filter => {
                        // console.log(filter);

                        filter = filter.toLowerCase()
                        let productName = product.itemName.toLowerCase()
                        let productCats = product.categories.map(cat => cat.toLowerCase())
                        if (
                            productName.includes(filter) || productCats.includes(filter)
                        ) {
                            match1 = true
                        }
                    })
                }
                else {
                    // console.log("match1 true");
                    match1 = true
                }
                if (useCatFilter === true) {

                    catFilter.forEach(filter => {
                        filter = filter.toLowerCase()
                        let productCats = product.categories.map(cat => cat.toLowerCase())
                        if (
                            productCats.includes(filter)
                        ) {
                            match2 = true
                        }
                    })
                }
                else {
                    match2 = true
                    // console.log("match2 true!");

                }

                return match1 && match2
            })



            return filteredArray


        })
        .catch(errorHandler('GET', '/products'))
}

export function getProduct(id) {
    return request.get(`/product/${id}`)
        .then(product => product)
        .catch(errorHandler('GET', `/product/${id}`))
}
function errorHandler(method, route) {
    return (err) => {
        if (err.message === 'Not Found') {
            throw Error(`Error: You need to implement an API route for ${method} ${route}`)
        } else {
            throw Error(`${err.message} on ${method} ${route}`)
        }
    }
}