import React from 'react'
import { IoIosClose } from "react-icons/io";

export default function Info(props) {
    const { visibility } = props
    const { closeModal } = props
    const {item} = props

    return (
        <div className={`modalShowing-${visibility} fade-in`}>
            <div className='modal-container'>
            <div className='close-button-container'>
                  <button className='info-close-button' onClick={() => closeModal()}><IoIosClose size={30}/></button>
            </div>
                <div className='info-modal-content'>

                    <div className='info-modal-content-item'>
                        <h3 className='info-title'>Sender</h3>
                        <p className='info-p'>{item.sender}</p>
                    </div>

                    <div className='info-modal-content-item'>
                        <h3 className='info-title'>Item</h3>
                        <p className='info-p'>{item.description}</p>
                    </div>
    
                    <div className='info-modal-content-item'>
                        <h3 className='info-title'>Invoice Nº</h3>
                        <p className='info-p'>{item.invoice_no}</p>
                    </div>
            
                    <div className='info-modal-content-item'>
                        <h3 className='info-title'>Amount Requested</h3>
                        <p className='info-p'>€{item.amount}</p>
                    </div>

            </div>
            </div>
        </div>
    )
}
