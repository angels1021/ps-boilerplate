/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import { schema } from './mockDataSchema';

const json = JSON.stringify(jsf(schema));

const success = (str) => chalk.green(str);

const error = (str) => chalk.red(str);

fs.writeFile("./src/api/db.json", json, (err) => {
  if (err) {
    console.log(error(err));
  } else {
    console.log(success('Mock data generated successfully'));
  }
});
