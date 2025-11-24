"use client"
import { useState ,useEffect } from "react"
import Loader from "@/components/loader";
export default function ShowData(){
    const [products ,setProducts]=useState([]);
    const [loading ,setLoading]=useState(false);
    async function setData(){
        setLoading(true);
        const response= await fetch('https://dummyjson.com/products') ;
        const data=await response.json();
        const productData= await data.products;
        setProducts(productData);
        setLoading(false)
        console.log(productData);

    }
    useEffect(()=>{

        setData();
        
    },[])

    

    return(
        
        <>
    
        {
            loading?<Loader/>:

        <table>
            <thead>
                <tr>
                    <th>ID:</th>
                    <th>TITLE:</th>
                    <th>PRICE</th>
                </tr>
                
               
            </thead>
            <tbody>
                
                    {
                    products.map(product =>(

                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td className={product.price<9?"text-green-400":""}>{product.price}</td>
                            </tr>
                        ))
}
               
            </tbody>
        </table>
        }
       
        </>
    )
}
// GET https://dummyjson.com/products