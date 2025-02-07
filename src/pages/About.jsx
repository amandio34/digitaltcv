import React from 'react';

const About = () => {
  return (
    <main>
      <h1>Mina projekt</h1>
      <section>
        <aside>
          <img src="src/images/solarisbild.png" alt="Solaris bild" />
          <h2>Solaris</h2>
          <p>Uppgift för att lära sig om API.</p>
          <p>
            (Notera: APIet fungerar tyvärr inte i nuläget då jag inte har fixat om med nya länken efter att de bytte server!)
          </p>
          {/* Länkar till externa resurser som öppnas i en ny flik*/}
          <a href="https://amandio34.github.io/solaris/" target="_blank" rel="noopener noreferrer">
            Besök Solaris projektet
          </a>
        </aside>
        <aside>
          <img src="src/images/tavernabild.png" alt="Taverna bild" />
          <h2>Taverna</h2>
          <p>
            Grupparbete med uppgift att skapa en mobilanpassad webbapplikation åt en restaurang.
          </p>
          <a href="https://martensven.github.io/restaurang/index.html" target="_blank" rel="noopener noreferrer">
            Se mer på Taverna sidan
          </a>
        </aside>
        <aside>
          <img src="src/images/petflixbild.png" alt="Petflix bild" />
          <h2>Petflix</h2>
          <p>
            Test hemsida bara för att försöka återskapa en redan existerande hemsida via CSS. Inte färdigställd dock men idén finns där.
          </p>
          <a href="https://amandio34.github.io/" target="_blank" rel="noopener noreferrer">
            Upptäck Petflix här
          </a>
        </aside>
      </section>

      <section>
          {/* Länkar till GitHub-profilen */}
          <h1>Se mer på min <a href="https://github.com/amandio34">GitHub</a></h1>
      </section>
    </main>
  );
};

export default About;
