export const parseAccountingFields = fields => {
 /* 
 fields[0] = 'Nome Cognome'
 fields[1] = {value: string}
 fields[2] = 'descrizione'
  fields[3] = { value: number | any }
  fields[4] ='fdyy'
  fields[5] = 'dfgdsfg'
 */

  const nextFields = [...fields];
  let string = '';
  if (nextFields[3] && typeof nextFields[3]?.value === 'number') {
    string = `${fields[3].value} €`;
    if (typeof nextFields[1].value === 'string') {
      string = `${string} / `;
    }
  }

  // string = 30 € /
 
  if (nextFields[1] && nextFields[1].value) {
    string = `${string}${nextFields[1].value}`;
  }

    // string = 30 € / ora

  if (nextFields[3] && typeof nextFields[3].value === 'number') {
    nextFields.splice(0, 4);
  } else {
    nextFields.splice(0, 3);
  }
  nextFields.forEach(({ value }) => {
    if (value) {
      string = `${string} - ${value}`;
    }
  });
  return string;
};

const fields1 = [..]
console.log(parseAccountingFields())