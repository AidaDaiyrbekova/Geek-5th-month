import styles from "./Products.module.scss"

const images = [
    "https://img.freepik.com/premium-photo/fashion-summer-women-s-clothes-set-with-accessories-pink-background_44943-1625.jpg",
    "https://img.freepik.com/premium-vector/summer-female-clothes-accessory-vector-illustration-shorts-top-bag-sunglass-hat-tropical-leaves_693602-572.jpg?semt=ais_hybrid&w=740&q=80",
    "https://media.istockphoto.com/id/1208148708/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%BB%D1%8C%D0%BA%D0%B0-%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%BB%D0%B5%D1%82%D0%BD%D0%B5%D0%B5-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D0%BE%D0%B5-%D0%BF%D0%BB%D0%B0%D1%82%D1%8C%D0%B5-%D0%B7%D0%B0%D0%BC%D1%88%D0%B5%D0%B2%D1%8B%D0%B9-%D0%BA%D0%BB%D0%B8%D0%BD-%D1%81%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB%D0%B8%D0%B8-%D1%8D%D0%BA%D0%BE-%D1%81%D0%BE%D0%BB%D0%BE%D0%BC%D1%8B-%D1%82%D0%BE%D1%82%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80-%D0%BC%D0%B5%D1%88%D0%BE%D0%BA.jpg?s=612x612&w=0&k=20&c=XOZKJokZtC7RADKXLvdorz-e0ft25GMEENee3OHL1qc=",
    "https://st2.depositphotos.com/7595566/11227/i/450/depositphotos_112276382-stock-photo-woman-summer-clothes-collage.jpg",
    "https://img.freepik.com/premium-photo/warm-sweaters-jeans-scarf-hat-other-clothes-women-s-autumn-winter-outfit-flat-lay-top-view_479776-4497.jpg?semt=ais_hybrid&w=740&q=80"
];

export  const Product = ({ product }) => {
    const randImage = images[Math.floor(Math.random() * images.length)]

    const click = () =>{
        console.log(product.id, product.name);
    }

    return (
        <div className={`${styles.card}`}>
            <img src={randImage} alt={product.name} className={styles.image} />
            <h3 className={styles.title}>{product.name}</h3>
            <button onClick={click} className={styles.button}>
                Купить сейчас
            </button>
        </div>
    )
}





