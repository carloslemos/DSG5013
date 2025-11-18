import App from './App';
import fetchJSON from './utils';

export default function main() {
  fetchJSON('./data/data.json', (data) => {
    new App(data).start();
  });
}
