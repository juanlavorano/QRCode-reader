import React, {useState} from 'react'
import Info from './Info'

export default function InvoiceItem(props) {
    const [showModal, setShowModal] = useState(false)
    const { item } = props
    const current = new Date();
    const date = `${current.getDate()} / ${current.getMonth() + 1} / ${current.getFullYear()}`
    
    const handleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div>
        <div className='invoice'>
            <li className='invoice-specs'>
                <div className='invoice-spec '>{item.description}</div>
                <div className='invoice-spec '>{item.sender}</div>
                <div className='invoice-spec '>{date}</div>
                <div className='invoice-spec '>Requested</div>
            </li>
            <button onClick={() => handleModal()} className='invoice-btn'>info</button>
        </div>
        {!showModal 
            ?
            <div style={{visibility: 'hidden'}} />
            :
            <Info item={item} closeModal={() => setShowModal(false)} visibility={showModal} />
            }
            </div>
    )
}
