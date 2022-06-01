// Write your solution in thi
const doctor = {
  name: "Sam",
  streetAddress: "11 Broadway",
};

function updateDriverWithKeyAndValue(doctor, key, value) {
  
  return Object.assign({}, doctor, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(doctor, key, value) {
  doctor[key] = value;

  return doctor;
}

function deleteFromDriverByKey(doctor, key) {

  const newObj = Object.assign({}, doctor);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(doctor, key) {
  delete doctor[key];

  return doctor;
}
