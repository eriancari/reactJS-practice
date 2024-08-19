import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from '../components/CoreConcept.jsx';

// PASSING PARAMETERS USING PROPS
/* function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
} */

// PASSING USING DESTRUCTURING
/* function CoreConcept({title, description, image}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
} */

export default function CoreConcepts() {
    return (
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
            {/* <CoreConcept concept={CORE_CONCEPTS[0]} /> 
            <CoreConcept concept={CORE_CONCEPTS[1]} /> 
            <CoreConcept concept={CORE_CONCEPTS[2]} /> 
            <CoreConcept concept={CORE_CONCEPTS[3]} />  */}

            {/* Outputting list data dynamically */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} /> 
            ))}
          </ul>
        </section>
    );
}