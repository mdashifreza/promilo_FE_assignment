import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

function ProductList() {
    const [productData, setProductData] = useState([]);
    const access_token = useSelector((state)=> state.AccessToken.accessToken);
    // console.log("redux integration:", access_token);
    useEffect(() => {
        const ApiProductList = async () => {
            try {
                const url = "https://api.kalpav.com/api/v1/product/category/retail";
                const response = await axios.get(url, {
                    headers: {
                        'Authorization': access_token
                    }
                }
                );
                setProductData(response.data.response)
            } catch (err) {
                console.error('Error fetching product list:', err);
            }
        };

        ApiProductList();
    }, [access_token]);

    const [searchValue, setSearchValue] = useState("");
    const [prodFilterVal, setProdFilVal] = useState("");

    const handleFilter = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setSearchValue(inputValue);
        if (searchValue.length === "") {
            return;
        }
        const filterValue = productData.filter((item) =>
            item.productCategory.productCategoryName.toLowerCase().includes(inputValue)
        );
        setProdFilVal(filterValue);
    }
    return (
        <div className='mt-10'>
            <div className='flex justify-center'>
                <input
                    type="text"
                    placeholder='Enter Value to be Search By product Name'
                    onChange={handleFilter}
                    className='w-[350px] mb-2 p-2 rounded h-11 border-2'
                />
            </div>
            {
                !searchValue.length ? (productData.map((data) => <ProductCard key={data.productCategory.orderIndex} data={data} />)) : (prodFilterVal.map((data) => <ProductCard key={data.productCategory.orderIndex} data={data} />))
            }
        </div>
    )
}
export default ProductList;
