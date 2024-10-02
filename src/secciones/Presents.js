import React, { useState } from 'react';
import '../estilos/Presents.css';
import { ReactComponent as Gift1 } from '../assets/gift1.svg';
import { ReactComponent as Gift2 } from '../assets/gift2.svg';
import { ReactComponent as Gift3 } from '../assets/gift3.svg';
import { ReactComponent as Gift4 } from '../assets/gift4.svg';
import { ReactComponent as Gift5 } from '../assets/gift5.svg';
import { ReactComponent as Gift6 } from '../assets/gift6.svg';


const Presents = ({ lang }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section id="presents" className="presents">
      <div className="presents-content">
        <div className="gift-icons">
            <Gift1 className="gift-icon" />
            <Gift2 className="gift-icon" />
            <Gift3 className="gift-icon" />
            <Gift4 className="gift-icon" />
            <Gift5 className="gift-icon" />
            <Gift6 className="gift-icon" />
        </div>
        <p>{lang.presentsText}</p>
        <button className="info-button" onClick={openModal}>
          {lang.moreInfo}
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{lang.modalTitle}</h2>
            <p className="modal-info">{lang.modalInfo}</p>
            <p className="modal-warning">{lang.modalPD}</p>
            <button className="close-button" onClick={closeModal}>
              {lang.close}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Presents;
