module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20 && item.enhancement > 0) {  
    return { ...item, enchancement: ++item.enchancement};
   }  else {
     return { ...item};
   }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if(item.durability <= 100 && item.durability > 0) {  
    return { ...item, durability: 100};
   }  else {
     return { ...item};
   }
}

function get(item) {
  return { ...item };
}
