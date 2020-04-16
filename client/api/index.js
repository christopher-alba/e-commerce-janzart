import request from 'superagent'

export function getProducts(searchFilter) {
    return request.get('/products')
        .then(products => {
            console.log(products.body);
            return products.body
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