import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase-init';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    const [user] = useAuthState(auth)
    useEffect(() => {
        async function loadOrders() {
            const email = user.email
            try {
                const { data } = await axios.get(`http://localhost:5000/orders?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })


                setOrders(data)
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        loadOrders()
    }, [])

    const handleDelete = _id => {
        async function deleteOrder() {
            const { data } = await axios.delete(`http://localhost:5000/orders/${_id}`)
            console.log(data);
        }
        deleteOrder()
        const restOrder = orders.filter(order => order._id !== _id)
        setOrders(restOrder);
    }
    return (
        <div>
            <h1 className='text-primary'>All of your Orders:</h1>

            <table className="table container border border-2">
                <thead>
                    <tr>

                        <th scope="col">Product Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cancel</th>
                    </tr>
                </thead>
                {
                    orders.map(order =>


                        <tbody key={order._id}>
                            <tr>

                                <td className=' border border-end border-2'>{order.product}</td>
                                <td className=' border border border-2'>{order.email}</td>
                                <td className=' border border-end border-2'><FontAwesomeIcon onClick={() => handleDelete(order._id)} icon={faTrash} /></td>
                            </tr>

                        </tbody>
                    )
                }
            </table>






        </div>
    );
};

export default Orders;