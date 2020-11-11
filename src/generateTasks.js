
const names = ['Mario', 'Pablo', 'Marta', 'Matilde', 'Manuel', 'Manel', 'Maite'];
const prefix = ['Ayudar a', 'Cocinar para', 'Llamar a', 'Enviar email a'];

const randomName = () => {
  return names[Math.floor(Math.random() * names.length)];
}
const randomPrefix = () => {
  return prefix[Math.floor(Math.random() * prefix.length)];
}

const amount = 100;
const tasks = [];
let i = 0;
for(i = 0; i < amount; i++) {
  const thisTask = {
    id: i,
    completed: Math.random() > 0.5,
    title: randomPrefix() + ' ' + randomName()
  }
  tasks.push(thisTask);
}
console.log(JSON.stringify(tasks));
