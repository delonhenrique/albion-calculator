import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./Craft.css"

const Craft = (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://www.albion-online-data.com/api/v2/stats/Prices/T8_BAG@3.json?qualities=1%2C2');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <div>
            {loading && <div className='loading'>Loading...</div>}
            {!loading && (
                <div>
                    <h2>Dados da API...</h2>
                    <table>
                        <tr>
                            <th>Item</th>
                            <th>City</th>
                            <th>sell price min</th>
                        </tr>
                        {data.map(item => (
                            <tr>
                                <td>
                                    <span>{item.item_id}</span>
                                </td>
                                <td>
                                    <span>{item.city}</span>
                                </td>
                                <td>
                                    <span>{item.sell_price_min}</span>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            )}
        </div>
    )
}

export default Craft