import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {
    const { _id } = useParams()
    const navigate = useNavigate()

    const handleEdit = async e => {
        e.preventDefault();
        try {
            const proceed = window.confirm('Are you sure to upload product!')
            if (proceed) {
                const product = {
                    name: e.target.name.value,
                    url: e.target.url.value,
                    price: e.target.price.value,
                    description: e.target.description.value
                };

                console.log(product);

                await axios.put(`https://young-cove-44489.herokuapp.com/products/${_id}`, product)
                e.target.reset()
                navigate('/products')
            }
        }
        catch (err) {
            console.log(err.message);
            toast.error('Please fill all the fields😡')
        }
    }

    return (
        <div>
            <h1 className='text-primary'>Please Edit :{_id}</h1>
            <form
                onSubmit={handleEdit}
                className=' w-50 mx-auto text-start'>


                {/* product name- field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Edit Product Name</label>
                    <input
                        name='name'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>


                {/* product image field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Edit Product image</label>

                    <input
                        name='url'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>


                {/* product price field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Edit Product Price</label>

                    <input
                        name='price'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>


                {/* password field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Edit Description</label>
                    <textarea
                        name='description'
                        type="text" className="form-control" id="exampleInputPassword1" />
                </div>


                {/* submit button started */}
                <button type="submit" className="btn btn-primary">Save Update</button>
            </form>
        </div>
    );
};

export default Edit;