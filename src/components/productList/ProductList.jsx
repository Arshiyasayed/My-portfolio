import Product from "../product/Product"
import "./productList.css"
import {products} from "../../data"

const ProductList = () => {
    return(
        <div className="pl">
            <div className="pl=texts">
                <h1 className="pl-title">Create & inspire.</h1>
                <p className="pl-desc">  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae tellus leo tincidunt blandit. Nulla facilisi. Praesent eu velit vitae est fringilla pharetra sit amet id ante. Donec volutpat arcu purus, vitae sodales mauris dignissim nec. 
                </p>
            </div>

            <div className="pl-list">
                {products.map((item)=>(
                    <Product key={item.id} img={item.img}  link={item.link}/>
                ))}
                
            </div>
        </div>
    )
}

export default ProductList