const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corrola'],
  ['camaro']
];

const car = carMakers[0];

const myCar = carsByMake.pop();

carMakers.push('66')

console.log(carMakers.map((car: string): string => {
  return car.concat('beef');
}))


const importantDates: (Date | string)[] = [new Date(), '2030-20-10'];

importantDates.push('444444444');

importantDates.push(new Date())