import stich from "../../assets/stich-2.webp"
export const Card = () => {
    return (
        <div className='card'>
            <h4>Стич— имя генетического эксперимента 626,
                являющегося главным персонажем франшизы «Лило и Стич». Стич — придуманный инопланетянин,
                изначально созданный для того, чтобы создавать большой хаос в галактике и разных городах.</h4>
            <img className='card-img' src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt="stich"/>
            <img className='card-img' src={stich} alt="stich-2"/>
        </div>

    )
}