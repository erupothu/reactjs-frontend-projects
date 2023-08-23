import Product from "../products/Product";
import data from '../../data/women-cloths.json'


function Home() {

    const imgWidth = '100%'
    const imageHeight = {
        height: '50vh'
    }
    const BodyCards = {
        display: 'flex',
        margin: '0 5px'
    }

    return (
        <div className="home_header">
            <div className="home__container">
                <img src="https://www.training.devwebtechnology.com/wp-content/uploads/2022/01/ecommerce-1024x683.jpg" alt="" className="home__image" width={imgWidth} style={imageHeight} />
            </div>
            <div className="body__cards" style={BodyCards}>
                {
                    data.map((item: any) => {
                        return (
                            item.cloths.map((cloths: any) => {
                                return (
                                    <div>
                                        <Product sellerName={item.sellerName} data={cloths}></Product>
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Home