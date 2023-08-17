import React from "react";

const Menu = ()=>{
    const imageUrls = [
        'images/Chicken-Burger.png',
        'images/grilled-sandwich.png',
        'images/chicken_fry.png',
        'images/image3.png',
        'images/image2.png',
        'images/Chicken-Burger.png',
    ];
    const titles =[
        'Chicken Burger',
        'Chicken Pizza',
        'Chicken Fry',
        'Noodles',
        'Grilled',
        'Taco',

    ];
    const ratings = [5,5,5,5,5,5];
    const amounts = [3.50, 4.20, 5.00, 4.80, 3.63, 6.50];
    return (
        <div className="menu">
            <div className="flex space-x-12 gap-5">
            <div>
                <h1 className="font-bold">Our <span className="text-primary font-bold">Regular</span> Menu</h1>
                <p>These Are Our Regular Menus. You Can</p>
                <p>Order Anything You Like.</p>
            </div>
            <div>
            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-6">Buy Now</button> 
            </div>
            </div>
        <div className="grid grid-cols-1 sm:grid-clos-2 md:grid-cols-3 gap-4">
            {imageUrls.map((imageUrl, index) => (
                <div key={index} className="border p-4 border-primary"  style={{ borderWidth: '2px'}}>

<div className="flex-shrink-0">
                        <img src={imageUrl} alt="" className="w-40 h-40"/>
                    </div>
                   
                    <div className="flex">
                        <div className="flex-grow">
                        <h3>{titles[index]}</h3>
                        <div className="ratings">
                            
                            {/* {Array.from({ length: ratings[index] }).map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))} */}
                        </div>
                        <div className="amount">
                            <p>${amounts[index]}</p>
                        </div>
                        <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-6">Buy Now</button>  

                    </div>
                    </div>

                  
                </div>
            ))}
        </div>
        </div>
    );
};
export default Menu;
