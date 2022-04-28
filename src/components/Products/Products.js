import { useNavigate } from 'react-router-dom';
import useProduct from '../hooks/useProducts';

const Products = () => {
    const navigate = useNavigate()
    const { products } = useProduct()


    const handleOrder = (_id) => {
        navigate(`/checkout/${_id}`)

    }

    const handleEdit = (_id) => {
        navigate(`/edit/${_id}`)
    }

    return (
        <div className='container'>
            <h1 className=' text-primary'>Find Your Products!</h1>
            <div className="row gy-4">
                {
                    products.map(product =>

                        <div key={product._id} className='d-flex col-sm-4'>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={product.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <h5 className="card-text">{product.price}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <button onClick={() => handleOrder(product._id)} className="btn btn-primary">Order Now</button>
                                    <button
                                        onClick={() => handleEdit(product._id)}
                                        className='btn btn-warning mx-2'>Edit</button>
                                </div>
                            </div>
                        </div>



                    )
                }
            </div>

        </div>
    );
};

export default Products;
