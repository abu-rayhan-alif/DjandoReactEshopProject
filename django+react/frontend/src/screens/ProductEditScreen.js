// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { Form, Button } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import FormContainer from '../components/FormContainer'
// import { listProductDetails, updateProduct } from '../actions/productAction'
// import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'


// function ProductEditScreen() {

//     const {productId} = useParams()
//     const navigate =useNavigate()

//     const [name, setName] = useState('')
//     const [price, setPrice] = useState(0)
//     const [image, setImage] = useState('')
//     const [brand, setBrand] = useState('')
//     const [category, setCategory] = useState('')
//     const [countInStock, setCountInStock] = useState(0)
//     const [description, setDescription] = useState('')
//     const [uploading, setUploading] = useState(false)

//     const dispatch = useDispatch()

//     const productDetails = useSelector(state => state.productDetails)
//     const { error, loading, product } = productDetails

//     const productUpdate = useSelector(state => state.productUpdate)
//     const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate


//     useEffect(() => {

//         if (successUpdate) {
//             dispatch({ type: PRODUCT_UPDATE_RESET })
//             navigate('/admin/productlist')
//         } else {
//             // if (!product.name || product._id !== Number(productId)) {
//             //     dispatch(listProductDetails(productId))
//             if ( !product || !product.name || product._id !== (productId)) {
//                 dispatch(listProductDetails(productId));

//             } else {
//                 setName(product.name)
//                 setPrice(product.price)
//                 setImage(product.image)
//                 setBrand(product.brand)
//                 setCategory(product.category)
//                 setCountInStock(product.countInStock)
//                 setDescription(product.description)

//             }
//         }



//     }, [dispatch, product, productId, navigate, successUpdate])

//     const submitHandler = (e) => {
//         e.preventDefault()
//         dispatch(updateProduct({
//             _id: productId,
//             name,
//             price,
//             image,
//             brand,
//             category,
//             countInStock,
//             description
//         }))
//     }

//     const uploadFileHandler = async (e) => {
//         const file = e.target.files[0]
//         const formData = new FormData()

//         formData.append('image', file)
//         formData.append('product_id', productId)

//         setUploading(true)

//         try {
//             const config = {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             }

//             const { data } = await axios.post('/upload/', formData, config)


//             setImage(data)
//             setUploading(false)

//         } catch (error) {
//             setUploading(false)
//         }
//     }

//     return (
//         <div>
//             <Link to='/admin/productlist'>
//                 Go Back
//             </Link>

//             <FormContainer>
//                 <h1>Edit Product</h1>
//                 {loadingUpdate && <Loader />}
//                 {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

//                 {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
//                     : (
//                         <Form onSubmit={submitHandler}>

//                             <Form.Group controlId='name'>
//                                 <Form.Label>Name</Form.Label>
//                                 <Form.Control

//                                     type='name'
//                                     placeholder='Enter name'
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 >
//                                 </Form.Control>
//                             </Form.Group>

//                             <Form.Group controlId='price'>
//                                 <Form.Label>Price</Form.Label>
//                                 <Form.Control

//                                     type='number'
//                                     placeholder='Enter price'
//                                     value={price}
//                                     onChange={(e) => setPrice(e.target.value)}
//                                 >
//                                 </Form.Control>
//                             </Form.Group>


//                             <Form.Group controlId='image'>
//                                 <Form.Label>Image</Form.Label>
//                                 <Form.Control

//                                     type='text'
//                                     placeholder='Enter image'
//                                     value={image}
//                                     onChange={(e) => setImage(e.target.value)}
//                                 >
//                                 </Form.Control>

//                                 <Form.File
//                                     id='image-file'
//                                     label='Choose File'
//                                     custom
//                                     onChange={uploadFileHandler}
//                                 >

//                                 </Form.File>
//                                 {uploading && <Loader />}

//                             </Form.Group>


//                             <Form.Group controlId='brand'>
//                                 <Form.Label>Brand</Form.Label>
//                                 <Form.Control

//                                     type='text'
//                                     placeholder='Enter brand'
//                                     value={brand}
//                                     onChange={(e) => setBrand(e.target.value)}
//                                 >
//                                 </Form.Control>
//                             </Form.Group>

//                             <Form.Group controlId='countinstock'>
//                                 <Form.Label>Stock</Form.Label>
//                                 <Form.Control

//                                     type='number'
//                                     placeholder='Enter stock'
//                                     value={countInStock}
//                                     onChange={(e) => setCountInStock(e.target.value)}
//                                 >
//                                 </Form.Control>
//                             </Form.Group>

//                             <Form.Group controlId='category'>
//                                 <Form.Label>Category</Form.Label>
//                                 <Form.Control

//                                     type='text'
//                                     placeholder='Enter category'
//                                     value={category}
//                                     onChange={(e) => setCategory(e.target.value)}
//                                 >
//                                 </Form.Control>
//                             </Form.Group>

//                             <Form.Group controlId='description'>
//                                 <Form.Label>Description</Form.Label>
//                                 <Form.Control

//                                     type='text'
//                                     placeholder='Enter description'
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                 >
//                                 </Form.Control>
//                             </Form.Group>


//                             <Button type='submit' variant='primary'>
//                                 Update
//                         </Button>

//                         </Form>
//                     )}

//             </FormContainer >
//         </div>

//     )
// }

// export default ProductEditScreen

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link , useParams} from 'react-router-dom'
// import { Form, Button } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import FormContainer from '../components/FormContainer'
// import { listProductDetails, updateProduct } from '../actions/productAction'
// import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

// function ProductEditScreen() {
//     const { productId } = useParams();
//   const dispatch = useDispatch();

//   // Local state for form fields
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState(0);
//   const [image, setImage] = useState('');
//   const [brand, setBrand] = useState('');
//   const [category, setCategory] = useState('');
//   const [countInStock, setCountInStock] = useState(0);
//   const [description, setDescription] = useState('');
//   const [uploading, setUploading] = useState(false);

//   // Fetch product details from Redux store
//   const productDetails = useSelector(state => state.productDetails);
//   const { loading, error, product } = productDetails;
//   const productUpdate = useSelector(state => state.productUpdate);
//   const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate;

//   // Update product state when product details change
//   useEffect(() => {
//     // Reset product state when component unmounts
//     return () => {
//       dispatch({ type: PRODUCT_UPDATE_RESET });
//     };
//   }, [dispatch]);

//   useEffect(() => {
//     // Fetch product details if not already loaded
//     if (!product || product._id !== productId || successUpdate) {
//       dispatch(listProductDetails(productId));
//     } else {
//       // Populate form fields with product details
//       setName(product.name);
//       setPrice(product.price);
//       setImage(product.image);
//       setBrand(product.brand);
//       setCategory(product.category);
//       setCountInStock(product.countInStock);
//       setDescription(product.description);
//     }
//   }, [dispatch, product, productId, successUpdate]);

//   // Form submission handler
//   const submitHandler = e => {
//     e.preventDefault();
//     // Dispatch action to update product
//     dispatch(updateProduct({
//       _id: productId,
//       name,
//       price,
//       image,
//       brand,
//       category,
//       countInStock,
//       description
//     }));
//   };

//   const uploadFileHandler = async e => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('image', file);

//     setUploading(true);

//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       };

//       const { data } = await axios.post('/upload', formData, config);

//       setImage(data);
//       setUploading(false);
//     } catch (error) {
//       console.error(error);
//       setUploading(false);
//     }
//   };

//   return (
//     <div>
//       <Link to='/admin/productlist'>
//         Go Back
//       </Link>

//       <FormContainer>
//         <h1>Edit Product</h1>
//         {loadingUpdate && <Loader />}
//         {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

//         {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
//           <Form onSubmit={submitHandler}>

//             <Form.Group controlId='name'>
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type='name'
//                 placeholder='Enter name'
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId='price'>
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type='number'
//                 placeholder='Enter price'
//                 value={price}
//                 onChange={e => setPrice(e.target.value)}
//               />
//             </Form.Group>


//             <Form.Group controlId='image'>
//               <Form.Label>Image</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter image'
//                 value={image}
//                 onChange={e => setImage(e.target.value)}
//               />

//               <Form.File
//                 id='image-file'
//                 label='Choose File'
//                 custom
//                 onChange={uploadFileHandler}
//               />

//               {uploading && <Loader />}
//             </Form.Group>

//             <Form.Group controlId='brand'>
//               <Form.Label>Brand</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter brand'
//                 value={brand}
//                 onChange={e => setBrand(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId='countinstock'>
//               <Form.Label>Stock</Form.Label>
//               <Form.Control
//                 type='number'
//                 placeholder='Enter stock'
//                 value={countInStock}
//                 onChange={e => setCountInStock(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId='category'>
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter category'
//                 value={category}
//                 onChange={e => setCategory(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId='description'>
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter description'
//                 value={description}
//                 onChange={e => setDescription(e.target.value)}
//               />
//             </Form.Group>

//             <Button type='submit' variant='primary'>
//               Update
//             </Button>

//           </Form>
//         )}

//       </FormContainer>
//     </div>
//   );
// }

// export default ProductEditScreen;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link,useParams, useNavigate } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import FormContainer from '../components/FormContainer';
// import { listProductDetails, updateProduct } from '../actions/productAction';
// import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';


// function ProductEditScreen() {
    
//     const { productId } = useParams();
//     const dispatch = useDispatch();
//     const navigate=useNavigate()
  
//     // Local state for form fields
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState(0);
//     const [image, setImage] = useState('');
//     const [brand, setBrand] = useState('');
//     const [category, setCategory] = useState('');
//     const [countInStock, setCountInStock] = useState(0);
//     const [description, setDescription] = useState('');
//     const [uploading, setUploading] = useState(false);
  
//     // Fetch product details from Redux store
//     const productDetails = useSelector(state => state.productDetails);
//     const { loading, error, product } = productDetails;
    
//     const productUpdate = useSelector(state => state.productUpdate);
//     const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate;
    
  
//     useEffect(() => {

//         if (successUpdate) {
//             dispatch({ type: PRODUCT_UPDATE_RESET })
//             navigate('/admin/productlist')
//         } else {
//             if (!product.name || product._id !== Number(productId)) {
//                 dispatch(listProductDetails(productId))
//             } else {
//                 setName(product.name)
//                 setPrice(product.price)
//                 setImage(product.image)
//                 setBrand(product.brand)
//                 setCategory(product.category)
//                 setCountInStock(product.countInStock)
//                 setDescription(product.description)

//             }
//         }



//     }, [dispatch, navigate,product, productId, successUpdate]);
  
//     // Form submission handler
//     const submitHandler = e => {
//       e.preventDefault();
//       // Dispatch action to update product
//       dispatch(updateProduct({
//         _id: productId,
//         name,
//         price,
//         image,
//         brand,
//         category,
//         countInStock,
//         description
//       }));
//     };
  
//     const uploadFileHandler = async e => {
//       const file = e.target.files[0];
//       const formData = new FormData();
//       formData.append('image', file);
  
//       setUploading(true);
  
//       try {
//         const config = {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         };
  
//         const { data } = await axios.post('/upload/', formData, config);
  
//         setImage(data);
//         setUploading(false);
//       } catch (error) {
//         console.error(error);
//         setUploading(false);
//       }
//     };


//     return (
//         <div>
//           <Link to='/admin/productlist'>
//             Go Back
//           </Link>
    
//           <FormContainer>
//             <h1>Edit Product</h1>
//             {loadingUpdate && <Loader />}
//             {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
    
//             {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
//               <Form onSubmit={submitHandler}>
    
//                 <Form.Group controlId='name'>
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type='name'
//                     placeholder='Enter name'
//                     value={name}
//                     onChange={e => setName(e.target.value)}
//                   />
//                 </Form.Group>
    
//                 <Form.Group controlId='price'>
//                   <Form.Label>Price</Form.Label>
//                   <Form.Control
//                     type='number'
//                     placeholder='Enter price'
//                     value={price}
//                     onChange={e => setPrice(e.target.value)}
//                   />
//                 </Form.Group>
//                 {/* <Form.Group controlId='image'>
//                   <Form.Label>Image</Form.Label>
//                   <Form.Control
//                     type='text'
//                     placeholder='Enter image'
//                     value={image}
//                     onChange={(e) => setImage(e.target.value)}
//                   />
//                   <Form.File
//                     id='image-file'
//                     label='Choose File'
//                     custom
//                     onChange={uploadFileHandler}
//                   />
//                   {uploading && <Loader />}
//                 </Form.Group> */}
                
                   
                   
                
                

//                 <Form.Group controlId='brand'>
//                   <Form.Label>Brand</Form.Label>
//                   <Form.Control
//                     type='text'
//                     placeholder='Enter brand'
//                     value={brand}
//                     onChange={e => setBrand(e.target.value)}
//                   />
//                 </Form.Group>
    
//                 <Form.Group controlId='countinstock'>
//                   <Form.Label>Stock</Form.Label>
//                   <Form.Control
//                     type='number'
//                     placeholder='Enter stock'
//                     value={countInStock}
//                     onChange={e => setCountInStock(e.target.value)}
//                   />
//                 </Form.Group>
    
//                 <Form.Group controlId='category'>
//                   <Form.Label>Category</Form.Label>
//                   <Form.Control
//                     type='text'
//                     placeholder='Enter category'
//                     value={category}
//                     onChange={e => setCategory(e.target.value)}
//                   />
//                 </Form.Group>
    
//                 <Form.Group controlId='description'>
//                   <Form.Label>Description</Form.Label>
//                   <Form.Control
//                     type='text'
//                     placeholder='Enter description'
//                     value={description}
//                     onChange={e => setDescription(e.target.value)}
//                   />
//                 </Form.Group>
    
//                 <Button type='submit' variant='primary'>
//                   Update
//                 </Button>
    
//               </Form>
//             )}
    
//           </FormContainer>
//         </div>
//       );
//     }
  


//     export default ProductEditScreen;


// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { Link,useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import FormContainer from '../components/FormContainer';
// import { listProductDetails, updateProduct } from '../actions/productAction';
// import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

// function ProductEditScreen() {
//   const { productId } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Local state for form fields
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState(0);
//   const [image, setImage] = useState('');
//   const [brand, setBrand] = useState('');
//   const [category, setCategory] = useState('');
//   const [countInStock, setCountInStock] = useState(0);
//   const [description, setDescription] = useState('');
//   const [uploading, setUploading] = useState(false);

//   // Fetch product details from Redux store
//   const productDetails = useSelector(state => state.productDetails);
//   const { loading, error, product } = productDetails;

//   const productUpdate = useSelector(state => state.productUpdate);
//   const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate;

//   useEffect(() => {
//     if (successUpdate) {
//       dispatch({ type: PRODUCT_UPDATE_RESET });
//       navigate('/admin/productlist');
//     } else {
//       if (!product.name || product._id !== Number(productId)) {
//         dispatch(listProductDetails(productId));
//       } else {
//         setName(product.name);
//         setPrice(product.price);
//         setImage(product.image);
//         setBrand(product.brand);
//         setCategory(product.category);
//         setCountInStock(product.countInStock);
//         setDescription(product.description);
//       }
//     }
//   }, [dispatch, product, productId, successUpdate, navigate]);

//   // Form submission handler
//   const submitHandler = e => {
//     e.preventDefault();
//     // Dispatch action to update product
//     dispatch(updateProduct({
//       _id: productId,
//       name,
//       price,
//       image,
//       brand,
//       category,
//       countInStock,
//       description
//     }));
//   };

//   const uploadFileHandler = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('image', file);
  
//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       };
  
//       const { data } = await axios.post('/upload/', formData, config);
  
//       setImage(data);
//       setUploading(false);
//     } catch (error) {
//       console.error(error);
//       setUploading(false);
//     }
//   }

//   return (
//     <div>
//       <Link to='/admin/productlist'>
//         Go Back
//       </Link>

//       <FormContainer>
//         <h1>Edit Product</h1>
//         {loadingUpdate && <Loader />}
//         {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

//         {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
//           <Form onSubmit={submitHandler}>

//             <Form.Group controlId='name'>
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type='name'
//                 placeholder='Enter name'
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId='price'>
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type='number'
//                 placeholder='Enter price'
//                 value={price}
//                 onChange={e => setPrice(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId='image'>
//             <Form.Group controlId='image'>
//   <Form.Label>Image</Form.Label>
//   <Form.Control
//     type='text'
//     placeholder='Enter image'
//     value={image}
//     onChange={(e) => setImage(e.target.value)}
//   />
//   <Form.File
//     id='image-file'
//     label='Choose File'
//     custom
//     onChange={uploadFileHandler}
//   />
//   {uploading && <Loader />}
// </Form.Group>
//             </Form.Group>

//             <Form.Group controlId='countinstock'>
//               <Form.Label>Stock</Form.Label>
//               <Form.Control
//                 type='number'
//                 placeholder='Enter stock'
//                 value={countInStock}
//                 onChange={e => setCountInStock(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId='category'>
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter category'
//                 value={category}
//                 onChange={e => setCategory(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId='description'>
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter description'
//                 value={description}
//                 onChange={e => setDescription(e.target.value)}
//               />
//             </Form.Group>

//             <Button type='submit' variant='primary'>
//               Update
//             </Button>

//           </Form>
//         )}

//       </FormContainer>
//     </div>
//   );
// }

// export default ProductEditScreen;


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { listProductDetails, updateProduct } from '../actions/productAction';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

function ProductEditScreen() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local state for form fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  // Fetch product details from Redux store
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector(state => state.productUpdate);
  const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate('/admin/productlist');
    } else {
      if (!product.name || product._id !== Number(productId)) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [dispatch, product, productId, successUpdate, navigate]);

  // Form submission handler
  const submitHandler = e => {
    e.preventDefault();
    // Dispatch action to update product
    dispatch(updateProduct({
      _id: productId,
      name,
      price,
      image,
      brand,
      category,
      countInStock,
      description
    }));
  };

  const uploadFileHandler = async (e) => {
    console.log("uploading")
    const file = e.target.files[0];
    console.log("file",file)
    const formData = new FormData();
    console.log("fromdata",formData)
    formData.append('image', file);
    formData.append('product_id', productId);

    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
          
        }
      };

      const { data } = await axios.post(`/upload/`, formData, config);

      console.log(data)
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <div>
      <Link to='/admin/productlist'>
        Go Back
      </Link>

      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
          <Form onSubmit={submitHandler}>

            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                  type='text'
                  placeholder='Enter image '
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
              />

                <Form.Control 
                  type='file'
                   id='image-file' 
                  label='Choose File'
                  custom
                  
                  onChange={uploadFileHandler}
                 ></Form.Control>

              {uploading && <Loader />}
              
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={e => setBrand(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='countinstock'>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter stock'
                value={countInStock}
                onChange={e => setCountInStock(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>

          </Form>
        )}

      </FormContainer>
    </div>
  );
}

export default ProductEditScreen;
