export default function ProductCard({product, setCartCount}){
    const handelclick = () =>{
        setCartCount(10);
    };
    return(
        <article className="product-card">
                <img src={`website_images/PROD_${product.imagefile}`}
                     alt={product.title} />
                <a href="#KATEGORISIDE" > {product.category}</a>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button onClick={handelclick}>Legg i handlekurv</button>
              </article>
    )
}