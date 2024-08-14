import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        { description } React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// USING PROPS
/* function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
} */

// USING DESTRUCTURING
/* function CoreConcept({title, description, image}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
} */

// PASSING A SINGLE PROP OBJECT
function CoreConcept({ concept }) {
  return (
    <li>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* This is the longer method, wherein each component is called with different prop values */}
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[1].title} 
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title} 
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}

            {/* This shortcut method is used when the key-value pairs from a source has the similar props property */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {/* Passing a single prop object */}
            <CoreConcept concept={CORE_CONCEPTS[0]} /> 
            <CoreConcept concept={CORE_CONCEPTS[1]} /> 
            <CoreConcept concept={CORE_CONCEPTS[2]} /> 
            <CoreConcept concept={CORE_CONCEPTS[3]} /> 

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
