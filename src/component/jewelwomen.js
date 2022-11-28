import { useState } from "react";




const menRing=[
    {id:1,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:2,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:3,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:4,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:5,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
    {id:6,quantity:10,image:"https://th.bing.com/th/id/OIP.CwVVac_-HntquMb2S1mWbAHaFj?pid=ImgDet&w=1200&h=900&rs=1",price:"10$"},
   
]
const Viewwomen = () => {
const [state,setState]=useState(menRing);
    return ( 
       <div className="container ms-4">
        
      <div className="row ">
      {
              state.map((item)=>{
                  return(
                      <div className="col-3 col-md-4 col-4">

                        <div className="card cardd mt-3">
                        
                                <img className="card-img-top" src={item.image} alt=''/>
                            
                            <div className="card-body">
                                 <h5 className="card-title"> {item.id}</h5>
                                 <p>Quantity:{item.quantity}</p>
                                 <p>Price:{item.price}</p>
                                 <button className="btn btn-outline-info">Purchase</button>
                            </div>

                      </div>
                      
                      
                     
                      
                      
                      
      </div>
                      )
                    })
                    
                }


          
                
                </div>
                
               </div> 
                
        
     )
}
 
export default Viewwomen;