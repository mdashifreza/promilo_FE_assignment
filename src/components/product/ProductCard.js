import React from 'react';

function ProductCard({ data }) {
    return (
        <div className="w-[500px] rounded border-2 mx-auto mb-2 ">
            <div className='flex justify-start p-2 items-center'>
                <img
                    className="h-20 w-20"
                    src={data.productCategory.productCategoryImage}
                    alt={data.productCategory.productCategoryId}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.productCategory.productCategoryName}</div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;
