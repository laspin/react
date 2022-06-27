import Pet from './Pet';

const PetsResults = ({ pets }) => (
  <>
    {pets
      ? pets.map(pet => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            city={pet.city}
            key={pet.id}
            images={pet.images[0]}
            id={pet.id}
          />
        ))
      : 'No pets found.'}
  </>
);

export default PetsResults;
