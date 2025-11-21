export default function Footer(){
    return(
        <>
           <div className="pt-100">
        
                <div className="w-1/1  flex items-center justify-center  d-flex-center absolute transform translate-y-[-54%] ">

                
                    <div className="w-[90%] bg-black text-white rounded-[20px] flex justify-between">
                        <div className=" w-[48%] pt-8 pb-8 pl-15 flex ">
                            <h2 className="w-1/1 text-5xl font-bold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                        </div>
                        <div className="pt-8 pb-8 pr-20 flex flex-col gap-3 justify-center ">
                        
                            <div className="bg-white rounded-[20px] flex gap-1 text-black pt-2.5 pb-2.5 pl-5 pr-10 items-center  ">
                                <i className="fa-regular fa-envelope "></i>
                                <input className="outline-none" type="email" id="email" name="email"
                                    placeholder="Enter your email address"/>
                            </div>
                            <div className="bg-white rounded-[20px] text-black pt-2.5 pb-2.5 pl-5 pr-5.5  items-center justify-center">
                                <button className="">Subscribe to Newsletter</button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="w-1/1 bg-[#F0F0F0] flex justify-center">
                    <div className="w-[90%] ">
                        <div className="w-1/1 pb-[50px] pt-[120px] flex  justify-between ">
                        
                            <div className="w-[20%]  ">
                                <div>
                                    <h2 className=" text-[30px] pb-[5px] relative font-bold  ">SHOP.CO</h2>

                                </div>
                                <p className="text-[#00000099]">We have clothes that suits your style and which you’re proud to wear.
                                    From
                                    women to men.</p>
                                 <div className="flex gap-2 pt-5">

                             
                                    <div className="rounded-[20px] text-[20px] bg-white w-[35px] h-[35px] border-[#00000033] border flex justify-center items-center  "><i className="fa-brands fa-twitter "></i></div>
                                    <div className="rounded-[20px] text-[20px] bg-black text-white w-[35px] h-[35px] border-[#00000033] border flex justify-center items-center"><i className="fa-brands fa-facebook-f  "></i></div>
                                    <div className="rounded-[20px] text-[20px] bg-white w-[35px] h-[35px] border-[#00000033] border flex justify-center items-center"><i className="fa-brands fa-instagram icon"></i></div>
                                    <div className="rounded-[20px] text-[20px] bg-white w-[35px] h-[35px] border-[#00000033] border flex justify-center items-center"><i className="fa-brands fa-github icon "></i></div>
                                </div>
                            </div>
                            <div className="w-[75%] flex justify-between">
                                <div className="flex w-1/2 ">
                
                                    <div className="w-[45%] flex flex-col">
                                        <p className=" pt-2.5 pb-2.5 text-[16px]">COMPANY</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">About</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">Features</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">works</p>
                                        <p className="text-[16px] text-[#00000099]">Career</p>
                                    </div>
                                    <div className="w-1/2 flex flex-col">
                                        <p className=" pt-2.5 pb-2.5 text-[16px]">HELP</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">Customer Support</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">Deleivery Details</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">Terms & Conditions</p>
                                        <p className="text-[16px] text-[#00000099] ">Privacy Policy</p>
                                    </div>
                                </div>
                                <div className="w-1/2  flex">
                                    <div className="w-1/2 flex flex-col">
                                        <p className=" pt-2.5 pb-2.5 text-[16px]">FCQ</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">Account</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">Manage Deliveries</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">Orders</p>
                                        <p className="text-[16px] text-[#00000099]">Payments</p>
                                    </div>
                                    <div className="w-1/2 flex flex-col">
                                        <p className=" pt-2.5 pb-2.5 text-[16px]">RESOURCES</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">Free eBooks</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">Development Tutorial</p>
                                        <p className="text-[16px] text-[#00000099] pb-2.5">How to - Blog</p>
                                        <p className="text-[16px] text-[#00000099]">Youtube Playlist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="grow border-t border-[#0000001A]"></hr>
                        {/* <hr style={{w:["92%"],"margin":"auto","background-color["#0000001A"], "border"-"none","height"-"1px"}}/> */}
                        <div className="flex justify-between items-center pt-2.5 pb-2.5">
                            <p className="text-[16px] text-[#00000099]">Shop.co <i className="fa-regular fa-copyright "></i> 2003-2033,
                                All Rights Reserved</p>
                            <div className="flex gap-2">
                                <img src="Images/visa.png"/>
                                <img src="Images/Badge (1).png"/>
                                <img src="Images/Badge (2).png"/>
                                <img src="Images/Badge (3).png"/>
                                <img src="Images/Badge (4).png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}