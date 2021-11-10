class ApartmentGridComponent {
  static getApartments = (success, failure) => {
    setTimeout(() => {
      fetch(`${serverURL}/apartment`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }, 5000);
  }
}
