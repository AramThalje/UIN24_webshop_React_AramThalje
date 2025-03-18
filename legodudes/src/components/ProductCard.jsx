export default function ProductCard({product, setCartCount, cart, setCart}){
    const handelclick = () =>{
        const exist = cart.find((item) => item.prodid === product.prodid)
        setCart((prev) =>
            exist ? 
            prev.map((item) => item.prodid === product.prodid ? {...item, quantity: item.quantity + 1} : item)
            :
            [...prev, {...product, quantity:1}]);
        console.log("Denne skjekken skjer i ProductCart:", exist)
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