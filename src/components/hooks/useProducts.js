import axios from "axios"
import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function loadData() {
            const { data } = await axios.get('http://localhost:5000/products')
            setProducts(data)
        }
        loadData()
    }, [])

    return {
        products
    }
}
export default useProduct;