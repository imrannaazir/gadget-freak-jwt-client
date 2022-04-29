import axios from 'axios';
import React from 'react';

const Upload = () => {

    const handelUpload = async e => {
        e.preventDefault();
        const proceed = window.confirm('Are you sure to upload product!')
        if (proceed) {
            const product = {
                name: e.target.name.value,
                url: e.target.url.value,
                price: e.target.price.value,
                description: e.target.description.value
            };
            console.log(product);

            const { data } = await axios.post('https://young-cove-44489.herokuapp.com/products', product)
            e.target.reset()
        }
    }
    return (
        <div>
            <h1 className='text-primary'>Upload products</h1>


            {/* form started */}
            <form
                onSubmit={handelUpload}
                className=' w-50 mx-auto text-start'>


                {/* product name- field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                    <input
                        name='name'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>


                {/* product image field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product image</label>

                    <input
                        name='url'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>


                {/* product price field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Price</label>

                    <input
                        name='price'
                        type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


                </div>


                {/* password field started */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <textarea
                        name='description'
                        type="text" className="form-control" id="exampleInputPassword1" />
                </div>


                {/* submit button started */}
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        </div>
    );
};

export default Upload;