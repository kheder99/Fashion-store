import {React,useState,useEffect} from 'react';
import {RiHeart3Fill} from 'react-icons/ri';
import products from '../data';
import { useParams } from 'react-router-dom';
import GoToTop from '../components/GoToTop';

export default function SingleProduct({isOpen,notification,turnoff}) {
    const {id} = useParams();
    //eslint-disable-next-line no-unused-vars
    const [prods,setProds] = useState(products);
    const [product ,setProduct] = useState(prods);
    const [currentIndex, setCurrentIndex] = useState(0);
    const singleProduct = (id)=> {
        const product = prods.filter((prod)=> prod.id===parseInt(id));
        setProduct(product);
        console.log(product);
    }

        useEffect(()=> {
            singleProduct(id);
            //eslint-disable-next-line react-hooks/exhaustive-deps
        },[id])
    const goToSlide = (index) => {
        const newIndex = index;
        setCurrentIndex(newIndex);
    }

    

    return (
        <div className='single-product' onClick={isOpen || notification ? turnoff : null}>
            <div className="container">
                <div className="card ">
                    <img src={product[0].sides_images[currentIndex]} className="card-img" alt="background" height="550px" />
                </div>
                <div className='images-list'>
                    {products.map((prod,productIndex) => (
                        <div key={productIndex} onClick={()=> goToSlide(productIndex)} className='images'>
                            
                            <img src={product[0].sides_images[productIndex]} alt="Error" className={id ===productIndex ?'img active':'img'}/>
                            {console.log(prod)}
                        </div>
                    ))
                    }
                </div>
                <div className="product-details">
                    <h1 className='title'>{product[0].name}</h1>
                    <span className='active-heart'>
                        <RiHeart3Fill />
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis facere vero natus! Provident quam voluptate, ipsum fugit perferendis harum amet. Veritatis, facere! Similique saepe autem sint fugiat! Autem, illum mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni fugit natus ullam maxime similique soluta officia consequatur, sunt debitis quod cumque sequi voluptatum repellat vel omnis tempore enim eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis omnis facilis magnam nesciunt fuga perspiciatis tempore est commodi. In, dolor. Reprehenderit voluptatem deleniti tenetur aperiam? Quod consequuntur impedit adipisci.</p>
                    <div className="product-color">
                        <div className="dots-list">
                            <div className='dots' id='red'></div>
                            <div className='dots' id='purple'></div>
                            <div className='dots' id='peru'></div>
                            <div className="border"><div className='dots' id='white'></div></div>
                        </div>
                        <div className="add-to-cart">
                            <button type='submit'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop />
        </div>
    )
}
