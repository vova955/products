import {Product} from '../components/Product';
import {useProducts} from '../hooks/products';
import {Loader} from '../components/Loader'
import {ErrorMessage} from '../components/ErrorMessage'
import {Modal} from '../components/Modal'
import {CreateProduct} from '../components/CreateProduct';
import {useContext} from 'react';
import {iProduct} from '../models';
import {ModalContext} from '../context/ModalContext';


export function ProductsPage() {

        const {loading, products, error, addProduct} = useProducts()

        const {modal, open, close} = useContext(ModalContext)

        const createHendler = (product: iProduct) => {
            close()
            addProduct(product)
        }

        return (
        <div className='conteiner mx-auto max-w-2xl pt-5'>
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }
            { products.map(product => <Product product={product} key={product.id} />) }

            {modal && <Modal title='Create new product' onClose={close}>
            <CreateProduct onCreate={createHendler}/>
            </Modal>}
            <button className='fixed bottom-5 right-5 rounded-full bg-green-700 text-white text-2xl px-4 py-2'
            onClick={open}
            >
            +
            </button>
        </div>
        )
    
}