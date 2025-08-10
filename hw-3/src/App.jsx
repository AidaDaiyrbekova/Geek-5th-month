import {Product} from "./components/Products";
import './style.scss'

const products = [
    { id: 1, name: "Футболка" },
    { id: 2, name: "Джинсы" },
    { id: 3, name: "Шорты" },
    { id: 4, name: "Топик" },
    { id: 5, name: "Платье" },
    { id: 6, name: "Рубашка" },
];

export const App = () => {
    return (
        <div className="productsTitle">
            <h1>Интернет магазин</h1>
            <div className="productsStyle">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
