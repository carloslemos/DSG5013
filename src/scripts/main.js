import readData from './readData';
import fetchJSON from './utils';

export default function main() {
  fetchJSON('./data/data.json', readData);
}
