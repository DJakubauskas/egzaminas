const serverURL = 'http://localhost:3000';

class API {
  static getApartments = (success, failure) => {
    setTimeout(() => {
      fetch(`${serverURL}/apartment`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }, 2000);
  }

  static deleteApartment = (id, success, failure) => {
    fetch(`${serverURL}/apartment/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }
}

API.getApartments(
      (duomenys) => console.log('gavau duomenis', duomenys), // konsolėje užrašys 'gavau duomenis'
      (klaida) => console.error('klaida!!!!', klaida) // jei kažkas neveiks - rašys 'klaida!!!'
    )

    API.deleteApartment(
  '1', // numeris objekto
  (duomenys) => console.log('gavau duomenis', duomenys), 
  (klaida) => console.error('klaida!!!!', klaida) 
)