const items = [1, 2, 3, 2];

const rta = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }
    return obj;
},{});

console.log(rta);

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "medium",
    },
  ];
  
  const rta1 = data
  .map(item => item.level)
  .reduce((obj, item) => {
      if (!obj[item]) {
          obj[item] = 1;
      } else {
          obj[item] = obj[item] + 1;
      }
      return obj;
  }, {});
  
  console.log(rta1);

//   Reto Acumular por cantidad de en rangos
//   Reduce Reloaded
//   1-5 = 5 
//   6-8 = 23
//   9-10 = 5