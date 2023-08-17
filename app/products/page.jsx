import React from "react";
import Image from "next/image";

const Products = ()=>{
    return(
        <div>
            <img src={"/next.svg"} alt={"icon"} className="w-1/2"/>
            <h1 className="font-bold italic text-amber-800 md:text-green-500 ml-[30px] text-2xl">Hello</h1>
        </div>
    )
}
export default Products;