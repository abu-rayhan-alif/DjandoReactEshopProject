// import React, { useEffect, useState } from 'react'
// import { Row,Col } from 'react-bootstrap'
// //import products from '../components/products'
// import Product from '../components/Product'
// import axios from 'axios'


// function HomeScreen() {

//   const [products,setProducts]=useState([])

//   useEffect(()=>{
//     async function fetchProducts(){
//       const{data}=await axios.get('')
//       setProducts(data)

//     }
    
//     fetchProducts()
//   },[])

//   return (
//     <div>
//       <h1>leatest product</h1>
//       <Row>
//          {products.map(product =>(

//             <Col key={product._id} sm={12} md={6} lg={4} xl={3}  >
            
//             <Product product={product}/>
            
//             </Col>


//          ))}

//       </Row>
//     </div>
//   )
// }

// export default HomeScreen
// import React, { useEffect, useState } from 'react';
// import { Row, Col } from 'react-bootstrap';
// import Product from '../components/Product';
// import axios from 'axios';

// function HomeScreen() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const { data } = await axios.get('URL_HERE'); // Provide the URL to fetch products
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error('Received data is not an array:', data);
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     }

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Latest Products</h1>
//       <Row>
//         {products.map((product) => (
//           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//             <Product product={product} />
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default HomeScreen;
// import React, { useEffect, useState } from 'react';
// import { Row, Col, Spinner } from 'react-bootstrap'; // Assuming you have Spinner component for loading state
// import Product from '../components/Product';
// import axios from 'axios';

// function HomeScreen() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await axios.get('/product/');
//         const { data } = response;
//         console.log('Received data:', data);
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setError('Error fetching products. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Latest Products</h1>
//       {loading ? (
//         <Spinner animation="border" role="status">
//           <span className="sr-only">Loading...</span>
//         </Spinner>
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : (
//         <Row>
//           {products.length === 0 ? (
//             <div>No products available</div>
//           ) : (
//             products.map((product) => (
//               <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                 <Product product={product} />
//               </Col>
//             ))
//           )}
//         </Row>
//       )}
//     </div>
//   );
// }

// export default HomeScreen;





// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory, useNavigate } from 'react-router-dom'
// import { Row, Col } from 'react-bootstrap'
// import Product from '../components/Product'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import Paginate from '../components/Paginate'
// import ProductCarousel from '../components/ProductCarousel'
// import { listProducts } from '../actions/productAction'

// function HomeScreen() {
//     const dispatch = useDispatch()
//     const productList = useSelector(state => state.productList)
//     const { error, loading, products, page, pages } = productList

//     const history = useNavigate()
//     const keyword = history.location?.search?.split('=')[1] || ''

//     useEffect(() => {
//         dispatch(listProducts(keyword))
//     }, [dispatch, keyword])

//     return (
//         <div>
//             {!keyword && <ProductCarousel />}

//             <h1>Latest Products</h1>
//             {loading ? <Loader />
//                 : error ? <Message variant='danger'>{error}</Message>
//                     :
//                     <div>
//                         <Row>
//                             {products.map(product => (
//                                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                                     <Product product={product} />
//                                 </Col>
//                             ))}
//                         </Row>
//                         <Paginate page={page} pages={pages} keyword={keyword} />
//                     </div>
//             }
//         </div>
//     )
// }

// export default HomeScreen
// import React, { useEffect, useState } from 'react';
// import { Row, Col, Spinner } from 'react-bootstrap'; // Assuming you have Spinner component for loading state
// import Product from '../components/Product';
// import axios from 'axios';

// function HomeScreen() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await axios.get('/product/');
//         const { data } = response;
//         console.log('Received data:', data);
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setError('Error fetching products. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Latest Products</h1>
//       {loading ? (
//         <Spinner animation="border" role="status">
//           <span className="sr-only">Loading...</span>
//         </Spinner>
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : (
//         <Row>
//           {products.length === 0 ? (
//             <div>No products available</div>
//           ) : (
//             products.map((product) => (
//               <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                
//                 <Product product={product} />
//               </Col>
//             ))
//           )}
//         </Row>
//       )}
//     </div>
//   );
// }

// export default HomeScreen;


// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { Row, Col } from 'react-bootstrap'
// import Product from '../components/Product'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import Paginate from '../components/Paginate'
// import ProductCarousel from '../components/ProductCarousel'
// import { listProducts } from '../actions/productAction'

// function HomeScreen() {
//     const dispatch = useDispatch()
//     const productList = useSelector(state => state.productList)
//     const { error, loading, products, page, pages } = productList

//     // const history = useNavigate()
//     // const keyword = history.location?.search?.split('=')[1] || ''

//     // const location = useLocation();
//     // const keyword = new URLSearchParams(location.search).get('keyword');

//     console.log(keyword)

//     useEffect(() => {
//         dispatch(listProducts(keyword))
//     }, [dispatch, keyword])

//     return (
//         <div>
//             {!keyword && <ProductCarousel />}

//             <h1>Latest Products</h1>
//             {loading ? <Loader />
//                 : error ? <Message variant='danger'>{error}</Message>
//                     :
//                     <div>
//                         <Row>
//                             {products.map(product => (
//                                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                                     <Product product={product} />
//                                 </Col>
//                             ))}
//                         </Row>
//                         <Paginate page={page} pages={pages} keyword={keyword} />
//                     </div>
//             }
//         </div>
//     )
// }

// export default HomeScreen

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col } from 'react-bootstrap';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Paginate from '../components/Paginate';
// import ProductCarousel from '../components/ProductCarousel';
// import { listProducts } from '../actions/productAction';

// const HomeScreen = () => {
//     const dispatch = useDispatch();
//     const productList = useSelector((state) => state.productList);
//     const { error, loading, products, page, pages } = productList;

//     useEffect(() => {
//         dispatch(listProducts());
//     }, [dispatch]);

//     return (
//         <div>
//             <ProductCarousel />

//             <h1>Latest Products</h1>
//             {loading ? (
//                 <Loader />
//             ) : error ? (
//                 <Message variant="danger">{error}</Message>
//             ) : (
//                 <div>
//                     <Row>
//                         {products.map((product) => (
//                             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                                 <Product product={product} />
//                             </Col>
//                         ))}
//                     </Row>
//                     <Paginate pages={pages} page={page} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default HomeScreen;

    
 

    

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col } from 'react-bootstrap';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Paginate from '../components/Paginate';
// import ProductCarousel from '../components/ProductCarousel';
// import { listProducts } from '../actions/productAction';
// import { useLocation } from 'react-router-dom';

// const HomeScreen = () => {
//     const dispatch = useDispatch();
//     const productList = useSelector((state) => state.productList);
//     const { error, loading, products, page, pages } = productList;
//     console.log('productList:', productList);
//     const location = useLocation();
//     const keyword = new URLSearchParams(location.search).get('keyword') || '';

//     console.log('keyword:', keyword);
//     console.log('page before dispatch:', page);

//     useEffect(() => {
//         dispatch(listProducts(keyword));
//     }, [dispatch, keyword]);

    
//     console.log('page:', page);
//     console.log('pages:', pages);
//     console.log('products:', products);

//     return (
//         <div>
//             {!keyword && <ProductCarousel />}

//             <h1>Latest Products</h1>
//             {loading ? (
//                 <Loader />
//             ) : error ? (
//                 <Message variant="danger">{error}</Message>
//             ) : (
//                 <div>
//                     <Row>
//                         {products && products.map((product) => (
//                             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                                 <Product product={product} />
//                             </Col>
//                         ))}
//                     </Row>
//                     <p>Page {page} of {pages}</p>
//                     <Paginate page={page} pages={pages} keyword={keyword} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default HomeScreen;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col } from 'react-bootstrap';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Paginate from '../components/Paginate';
// import ProductCarousel from '../components/ProductCarousel';
// import { listProducts } from '../actions/productAction';
// import { useLocation, useParams } from 'react-router-dom';

// const HomeScreen = () => {
//     const dispatch = useDispatch();
//     const { keyword } = useLocation().search;
//     const { pageNumber } = useParams(); // Get the page number from the URL
//     const productList = useSelector((state) => state.productList);
//     const { error, loading, products, page, pages } = productList;

//     useEffect(() => {
//         dispatch(listProducts(keyword, pageNumber)); // Pass the page number to the action
//     }, [dispatch, keyword, pageNumber]);

//     return (
//         <div>
//             {!keyword && <ProductCarousel />}

//             <h1>Latest Products</h1>
//             {loading ? (
//                 <Loader />
//             ) : error ? (
//                 <Message variant="danger">{error}</Message>
//             ) : (
//                 <div>
//                     <Row>
//                         {products.map((product) => (
//                             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                                 <Product product={product} />
//                             </Col>
//                         ))}
//                     </Row>
//                     <Paginate page={page} pages={pages} keyword={keyword} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default HomeScreen;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import { listProducts } from '../actions/productAction';
import { useLocation, useParams } from 'react-router-dom';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { error, loading, products, page, pages } = productList;

    // Extracting keyword and pageNumber from URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('keyword') || '';
    const pageNumber = useParams().pageNumber || 1; // Default to 1 if pageNumber is not provided

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber]);

    return (
        <div>
            {!keyword && <ProductCarousel />}

            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <div>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <p>Page {page} of {pages}</p>
                    <Paginate page={page} pages={pages} keyword={keyword} />
                </div>
            )}
        </div>
    );
};

export default HomeScreen;