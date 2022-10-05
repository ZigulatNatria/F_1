
//var options = {
//  enableHighAccuracy: true,
//  timeout: 5000,
//  maximumAge: 0
//};
//
//function Success(pos) {
//  const latitude = pos.coords.latitude;
//  const longitude = pos.coords.longitude;
//
////  console.log('Ваше текущее местоположение:');
////  console.log(`Широта: ${crd.latitude}`);
//  console.log(`Широта: ${latitude}`);
//  console.log(`Долгота: ${longitude}`);
////  console.log(`Долгота: ${crd.longitude}`);
////  console.log(`Плюс-минус ${crd.accuracy} метров.`);
//  return {latitude, longitude};
//
//
//};
//
//function error(err) {
//  console.warn(`ERROR(${err.code}): ${err.message}`);
//};
//
//navigator.geolocation.getCurrentPosition(Success, error, options);
//
//
//export default Success;

const getLocationPromise = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {

      lat = position.coords.latitude
      long = position.coords.longitude

      resolve({
        latitude: lat,
        longitude: long,

      })
    })

  } else {
    reject("your browser doesn't support geolocation API")
  }
})

getLocationPromise.then((crd) => {
  // console.log(crd.latitude, crd.longitude)
  coords(crd)
}).catch((err) => {
  console.log(err)
})

function coords(crd) {
  let lat = crd.latitude
  let lon = crd.longitude
  console.log(lat, lon)
}