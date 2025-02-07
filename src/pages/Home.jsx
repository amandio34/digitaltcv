// src/pages/Home.jsx
import React from 'react'; // Importerar React för att använda komponenter

const Home = () => (
  <main>
    <h1>Välkommen till mitt digitala CV</h1> {/* Huvudrubrik för startsidan */}
    <section>
      <aside>
        <h2>Amanda Andersson</h2> {/* Rubrik för personlig information */}
        <p>Hej! Mitt namn är Amanda och jag är 21 år.</p>
        <p>
          {/* Beskrivning av utbildning och erfarenheter, strukturerad i flera stycken */}
          Jag har nyligen avslutat min utbildning till Front-end Developer, där jag har lärt mig JavaScript,
          UX design och grundlig Back-end utveckling. Jag har lärt mig att skapa användarvänliga och responsiva
          webbapplikationer samt att designa och implementera intuitiva gränssnitt. Dessutom har jag fått erfarenhet
          av att arbeta med olika ramverk och verktyg som React, Tailwind CSS, Git, Figma med mera.
        </p>
        <p>
          Jag är en kreativ och samarbetsvillig problemlösare som uppskattar utmaningar.
          På fritiden tränar jag gärna och umgås med vänner. Genom tidigare arbetslivserfarenheter levererar jag alltid
          snabb och personlig service, även hur stressig situationen är. Mina tidigare erfarenheter som Parkfood-värd på
          Furuviksparken och säljare på New Yorker har gett mig dagliga kundmöten och arbete i högt tempo, vilket
          jag trivs bra med. Jag värdesätter bra samarbete och goda relationer, både med kollegor och kunder.
        </p>
      </aside>
      <aside>
        <h2>Utbildning</h2>
        <p>
          <b>Front-end Developer 2024 - 2026</b><br />
          KYH Gävle
        </p>
        <p>
          <b>Gymnasial utbildning 2019 - 2022</b><br />
          Realgymnasiet Gävle - Estetik & Media
        </p>

        <h2>Arbetserfarenhet</h2>
        <p>
          <b>McDonalds Hemlingby - Värdinna</b><br/>
          15 november 2022 - pågående anställning
        </p>
        <p>
          <b>New Yorker Valbo - Säljare</b><br/>
          7 december 2022 - 31 december 2022<br />
          Jul-extra
        </p>
        <p>
          <b>Furuviksparken AB - Medarbetare</b><br/>
          15 oktober 2022 - 5 november 2022<br />
          Parkfood Värd
        </p>
      </aside>
    </section>
  </main>
);

export default Home; // Exporterar Home-komponenten för användning i appen
