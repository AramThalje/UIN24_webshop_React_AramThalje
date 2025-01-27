import { useState } from "react";
import CategoryHeading from "./CategoryHeading";
import ProductCard from "./ProductCard";
export default function PageContent({products, setCartCount}) {
    
    const [title, setTitle] = useState("Ninjago")
    return (
        <main>
                    <CategoryHeading title={title} />
                    <div id="productlist">
                      {products.map((product, index) => 
                        <ProductCard product={product} key={`FCT_${index}`} setCartCount={setCartCount} />
                      )}
                    </div>
                    {/*<!--
                    <article class="product-card">
                        <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                        <a href="#KATEGORISIDE">Ninjago</a>
                        <h3>Dragon Zane</h3>
                        <p>Kr. 89,-</p>
                        <button>Legg i handlekurv</button>
                    </article>
                    <article class="product-card">
                        <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                        <a href="#KATEGORISIDE">Ninjago</a>
                        <h3>Dragon Zane</h3>
                        <p>Kr. 89,-</p>
                        <button>Legg i handlekurv</button>
                    </article>
                    <article class="product-card">
                        <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                        <a href="#KATEGORISIDE">Ninjago</a>
                        <h3>Dragon Zane</h3>
                        <p>Kr. 89,-</p>
                        <button>Legg i handlekurv</button>
                    </article>
                    <article class="product-card">
                        <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                        <a href="#KATEGORISIDE">Ninjago</a>
                        <h3>Dragon Zane</h3>
                        <p>Kr. 89,-</p>
                        <button>Legg i handlekurv</button>
                    </article>
                    <article class="product-card">
                        <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                        <a href="#KATEGORISIDE">Ninjago</a>
                        <h3>Dragon Zane</h3>
                        <p>Kr. 89,-</p>
                        <button>Legg i handlekurv</button>
                    </article>
                    <article class="product-card">
                        <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                        <a href="#KATEGORISIDE">Ninjago</a>
                        <h3>Dragon Zane</h3>
                        <p>Kr. 89,-</p>
                        <button>Legg i handlekurv</button>
                    </article>
                    <article class="product-card">
                        <img src="website_images/PROD_dragon_zane.webp" alt="PRODUKTTITTEL" />
                        <a href="#KATEGORISIDE">Ninjago</a>
                        <h3>Dragon Zane</h3>
                        <p>Kr. 89,-</p>
                        <button>Legg i handlekurv</button>
                    </article>
                    -->*/}
                </main>
    )
}