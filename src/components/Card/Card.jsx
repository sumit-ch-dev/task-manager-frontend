import image1 from '../../assets/images/a.jpg'
import image2 from '../../assets/images/b.jpg'
import image3 from '../../assets/images/c.jpg'
import image4 from '../../assets/images/d.jpg'
import './Card.styles.css'

import { useState } from 'react'
import Modal from '../Modal/Modal'

const Card = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)


    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleFileSelection = (e) => {
        console.log(e)
        closeModal()
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className='header-content'>
                    <img src={image1} alt="" />
                    <h4>Client name</h4>
                </div>
                <div className='header-content'>
                    <img src={image2} alt="" />
                    <h4>Sadiq Ishtiak</h4>
                </div>
            </div>
            {/* <div classNameName="card-description">some description</div> */}
            <div className="task-description">
                <div className="description">
                    <i className="fa-solid fa-layer-group"></i>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="clipboard">
                    <i className="fa-solid fa-clipboard"></i>
                    <p>1/2</p>
                </div>
            </div>
            <div className="card-details">details</div>

            <div className="details">
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <h5 className="people">12+</h5>
                <div className="comments">
                    <p>15</p>
                    <i className="fa-regular fa-comments"></i>
                </div>
                <div className="attachment">
                    <button className='attachment-btn' onClick={openModal}><span><i className="fa-solid fa-paperclip"></i></span>25</button>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
                <div className="date">
                    <i className="fa-solid fa-calendar-days"></i>
                    <p>
                        30-12-22
                    </p>
                </div>
            </div>
        </div >
    )
}


// style="display: flex; gap: 5px; justify-content: space-between; align-items: center;"
export default Card