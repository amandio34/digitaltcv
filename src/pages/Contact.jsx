import React, { useState } from 'react';

const Contact = () => {
  // useState-hook för att lagra formulärdata och bekräftelsemeddelande
  const [name, setName] = useState('');        
  const [email, setEmail] = useState('');        
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState('');

  // Funktion som hanterar formulärskickningen
  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindrar att sidan laddas om vid submit
    // Sätter ett bekräftelsemeddelande med det inmatade namnet
    setConfirmation(`Tack ${name} för din feedback!`);
    // Tömmer formulärfälten efter att ha skickat in formuläret
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main>
      <h1>Kontakt</h1>
      <section>
        <aside>
          <h3>Telefonnummer</h3>
          <p>072 230 12 50</p>
        </aside>
        <aside>
          <h3>Mail</h3>
          <p>amanda.andersson@student.kyh.se</p>
        </aside>
        <aside>
          <h3>Adress</h3>
          <p>
            Lövlundsvägen 91B <br />
            814 91 Furuvik, Gävle
          </p>
        </aside>
      </section>

      <section className="feedbackForm">
        <p>Maila mig gärna dina synpunkter på hur man kan förbättra denna hemsida!</p>
        <form onSubmit={handleSubmit}>
          {/* Inputfält för namn med required attribut */}
          <input
            type="text"
            placeholder="Ditt namn"
            value={name}
            onChange={(e) => setName(e.target.value)}  // Uppdaterar state med användarens inmatning
            required
          />
          {/* Inputfält för e-post */}
          <input
            type="email"
            placeholder="Din e-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Uppdaterar state med användarens inmatning
            required
          />
          {/* 
            Textarea för meddelande. Detta är omslutet av en <article>
            för att separera det visuellt.
          */}
          <article>
            <textarea
              placeholder="Ditt meddelande"
              value={message}
              onChange={(e) => setMessage(e.target.value)}  // Uppdaterar state med användarens meddelande
              required
            />
          </article>
          <button type="submit">Skicka</button>
        </form>
        {/* Om confirmation inte är en tom sträng, visas bekräftelsemeddelandet */}
        {confirmation && (
          <p style={{ marginTop: '20px', color: 'purple' }}>{confirmation}</p>
        )}
      </section>
    </main>
  );
};

export default Contact;
