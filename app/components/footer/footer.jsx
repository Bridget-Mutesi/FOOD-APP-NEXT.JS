import React from "react";

const Footer = () => {
    return (
        <div className="bg-primary text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Foodish</h1>
                    <p className="text-sm">© 2023 Foodish. All rights reserved.</p>
                    <p className="text-sm mt-2">Follow Us On</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-4">Menu</h1>
                    <p>Home</p>
                    <p>Offers</p>
                    <p>Service</p>
                    <p>About Us</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-4">Information</h1>
                    <p>Menu</p>
                    <p>Quality</p>
                    <p>Make a Choice</p>
                    <p>Salad With Vegetables</p>
                    <p>Fast Delivery</p>
                    <p>Subscribe</p>
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-4">Contact</h1>
                    <p>+123 456 789</p>
                    <p>Explore</p>
                    <p>Info@Foodish.Com</p>
                    <p>1245, New York, USA</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
