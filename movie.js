 function getAllAnimals(){
    fetch()
    .then(res => res.json())
    .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)))
}

function adoptAnimal(animalObj){

    
}