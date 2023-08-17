import React from "react";

const Navigation = ()=>{
    return(
        <nav>
            <ul className="flex justify-between items-center py-4 px-6">
                <li>Home</li>
                <li>Offer</li>
                <li>Services</li>
                <li>Menu</li>
                <li>AboutUs</li>
                <p className="text-primary">Login</p>
                <button className="border-2 border-primary text-primary font-bold py-2 px-4 rounded-full mx-6">SignUp</button>   
                
            </ul>
           
        </nav>
    )
};
export default Navigation;