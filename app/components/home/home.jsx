import React from "react";

const About = ()=>{
    return(
        
        <div className="flex justify-center items-center space-x-30">
            <div className="flex flex-col items-center space-y-5">
                <h2 className="text-primary font-bold text-3xl">All Fast Food is</h2>
                <h2 className="text-primary font-bold text-3xl">Available at Foodle</h2>
                <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-6">Buy Now</button>  
            </div>
            <div>
            <img src={"./images/home.png"} alt={"food"} className="w-50 h-50"/>
            </div>
        </div>
    )

};
export default About;