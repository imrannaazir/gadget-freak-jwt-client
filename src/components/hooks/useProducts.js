import axios from "axios"
import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function loadData() {
            const { data } = await axios.get('https://young-cove-44489.herokuapp.com/products')
            setProducts(data)
        }
        loadData()
    }, [])

    return {
        products
    }
}
export default useProduct;