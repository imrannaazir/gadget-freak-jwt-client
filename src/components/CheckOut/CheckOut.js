import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase-init';
import useProduct from '../hooks/useProducts';

const CheckOut = () => {
    const navigate = useNavigate()
    const { _id } = useParams()
    const [user] = useAuthState(auth)
    const { products } = useProduct()
    const selectedProduct = products.find(product => product._id === _id)



    const handleOrder = async e => {
        e.preventDefault()


        const newOrder = {
            name: user.displayName,
            email: user.email,
            phone: e.target.phone.value,
            address: e.target.address.value,
            product: selectedProduct.name
        }
        const proceed = window.confirm(`Are you sure to order ${selectedProduct.name}`)
        if (proceed) {
            const { data } = await axios.post(`https://young-cove-44489.herokuapp.com/orders`, newOrder)
            e.target.reset()
            navigate('/orders')
        }

    }

    return (
        <div>
            <h1>Check out : {selectedProduct?.name}</h1>


            <form
                onSubmit={handleOrder}
                className=' w-50 mx-auto text-start'>


                {/*  name- field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                    <input
                        value={user?.displayName}
                        readOnly
                        disabled
                        name='name'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>


                {/* email field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Email</label>

                    <input
                        value={user?.email}
                        disabled
                        readOnly
                        name='email'
                        type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>

                {/*  name- field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Phone </label>
                    <input
                        name='phone'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>

                {/*  address- field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Address</label>
                    <input
                        name='address'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>


                {/* product  field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Selected product</label>

                    <input
                        readOnly
                        disabled
                        value={selectedProduct?.name}
                        name='product'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>


                {/* submit button started */}
                <button
                    type="submit"
                    className="btn btn-primary">Order Now</button>
            </form>
        </div>
    );
};

export default CheckOut;