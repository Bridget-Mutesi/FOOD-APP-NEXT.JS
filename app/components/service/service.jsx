import React from "react";

const Service = ()=>{
    const categories =[
        'images/image1.png',
        'images/image2.png',
        'images/image3.png',
    ]
    const categoryInfo = [
        {
            title: "Chicken Burger",
            descrip: "Order Now >",
        },
        {
            title: "Chicken Pizza",
            descrip: "Order Now >",
        },
        {
            title: "Chicken Fry",
            descrip: "Order Now >",
        }
    ]
   
    return(
        <div>
            <div className="flex justify-center items-center space-x-11 ">
            <div className="flex justify-center items-center space-x-4 border p-4 rounded-lg bg-primary">
                <img src="/images/icon2.png" alt="icon" className="w-16 h-16"/>
                <div>
                <h2 className="text-x1 font-bold">Fast Delivery</h2>
                <p>The Food Will Be Delivered</p>
                <p>Your Home Within 1-2Hours Of</p>
                <p>Your Ordering</p>
                </div>
            </div>

            <div className="flex justify-center items-center space-x-4 border p-4 rounded-lg bg-primary">
                <img src="/images/icon3.png" alt="icon" />
                <div>
                <h2>Fresh Food</h2>
                <p>Your Food Will Be Delivered</p>
                <p>100% Fresh To Your Home. We</p>
                <p>Do Not Deliver Stale Food</p>
                </div>
            </div>

            <div className="flex justify-center items-center space-x-4 border p-4 rounded-lg bg-primary">
                <img src="/images/icon1.png" alt="icon" />
                <div>
                <h2>Free Delivery</h2>
                <p>Your Food Delivery Is</p>
                <p>Absolutely Free. Not Cost</p>
                <p>Just Order And Enjoy</p>
                </div>
            </div>
        </div>

        <div className="flex justify-center items-center space-x-11">
                {categories.map((imageUrl, index) => (
                    <div key={index} className="">
                        <img src={imageUrl} alt={`Category ${index}`} className="w-19 h-19" />
                        <div>
                            <h2 className="font-bold text-2x1">{categoryInfo[index].title}</h2>
                           
                            <p className="text-primary font-bold">{categoryInfo[index].descrip}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Service;