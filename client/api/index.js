import request from 'superagent'

export function getProducts(searchFilter, catFilter) {

    return request.get('/products')
        .then(products => {
            console.log(products);

            console.log(searchFilter)
            let useSearchFilter = true
            let useCatFilter = true
            let productsArray = products.body
            if (searchFilter === undefined || searchFilter[0] === "") {
                useSearchFilter = false



            }
            if (catFilter === undefined || catFilter.length === 0) {
                useCatFilter = false
            }

            console.log(useSearchFilter, useCatFilter);



            let filteredArray = productsArray.filter(product => {
                let match1 = false
                let match2 = false

                if (useSearchFilter === true) {
                    searchFilter.forEach(filter => {
                        if (
                            product.itemName.includes(filter)
                        ) {
                            match1 = true
                        }

                    })
                }
                else {
                    match1 = true
                }
                if (useCatFilter === true) {
                    catFilter.forEach(filter => {
                        if (
                            product.categories.includes(filter)
                        ) {
                            match2 = true
                        }
                    })
                }
                else {
                    match2 = true
                }

                return match1 && match2
            })


            console.log(filteredArray);
            return filteredArray


        })
        .catch(errorHandler('GET', '/products'))
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