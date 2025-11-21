export default function Header(){
  return(
    <>
      <div className="w-1/1 flex justify-center items-center pb-10">
            <div className=" md:w-[90%] sm:w-[92%]  pt-2  flex justify-between bg-amber-300 items-center overflow-hidden ">
                <div className="w-[18%] flex bg-red-300 ">   
               <div>
                        <button className=" border-none w-5 hidden" title="sidebar"><i
                                className="fa-solid fa-bars"></i></button>
                    </div>
                    <h1 className="text-[30px] font-bold">SHOP.CO</h1>
     
                </div>

                <div className="w-[40%] bg-amber-600">
                     
                    <ul className="flex w-1/1 justify-between">
                        <li><a href="categoryPage.html">Shop</a> </li>
                        <li><a href="#">On Sale</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Brands</a>

                        </li>
                    </ul>
                </div>
         
                <div className="w-[40%] bg-amber-100  flex justify-between items-center">
                      <div className="rounded-[25px] w-full bg-[#edf0f1] flex p-2 items-center gap-1 max-[880px]:w-0 max-[880px]:bg- ">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" className="outline-none h-5  bg-transparent  max-[880px]:hidden" id="search" placeholder="Search"/>
                    </div>

                    <div id="search-item" className="header-search pl-3"></div>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    <span className="material-symbols-outlined ">
                        account_circle
                    </span>
                </div>


            </div>
        </div>
    </>

  )
 }