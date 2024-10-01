import React, { useState } from 'react';
import '../estilos/AssistConfirmation.css';

const AssistConfirmation = ({ lang }) => {
  const [showForm, setShowForm] = useState(false);  // Estado para mostrar/ocultar formulario
  const [attending, setAttending] = useState(null);  // Estado para "Voy" o "No voy"
  const [hasChildren, setHasChildren] = useState(false);  // Estado para "Acompañado de niños"
  const [specialDiet, setSpecialDiet] = useState(false);  // Estado para dieta especial

  const handleCheckInClick = () => setShowForm(true);

  return (
    <section id="assistConfirmation" className="rsvp">
      <h2>{lang.title}</h2>

      {!showForm ? (
        <button className="checkin-btn" onClick={handleCheckInClick}>
          Hacé tu CheckIn
        </button>
      ) : (
        <form>
          <p>Realizar check in por cada adulto</p>
          <input type="text" placeholder={lang.name} />
          <input type="email" placeholder={lang.email} />
          
          <h3>{lang.attendingQuestion}</h3>
          <label>
            <input 
              type="radio" 
              value="yes" 
              checked={attending === 'yes'} 
              onChange={() => setAttending('yes')} 
            /> Voy
          </label>
          <label>
            <input 
              type="radio" 
              value="no" 
              checked={attending === 'no'} 
              onChange={() => setAttending('no')} 
            /> No voy
          </label>

          {attending === 'yes' && (
            <>
              <h3>Acompañado de niños?</h3>
              <label>
                <input 
                  type="radio" 
                  value="yes" 
                  checked={hasChildren === true} 
                  onChange={() => setHasChildren(true)} 
                /> Sí
              </label>
              <label>
                <input 
                  type="radio" 
                  value="no" 
                  checked={hasChildren === false} 
                  onChange={() => setHasChildren(false)} 
                /> No
              </label>
              {hasChildren && (
                <input type="number" placeholder="Cuántos niños?" />
              )}

              <h3>Tienes alguna dieta especial?</h3>
              <label>
                <input 
                  type="radio" 
                  value="yes" 
                  checked={specialDiet === true} 
                  onChange={() => setSpecialDiet(true)} 
                /> Sí
              </label>
              <label>
                <input 
                  type="radio" 
                  value="no" 
                  checked={specialDiet === false} 
                  onChange={() => setSpecialDiet(false)} 
                /> No
              </label>
              {specialDiet && (
                <input type="text" placeholder="Especifica tu dieta especial" />
              )}
            </>
          )}

          <button type="submit">{lang.btnSend}</button>
        </form>
      )}
    </section>
  );
};

export default AssistConfirmation;
