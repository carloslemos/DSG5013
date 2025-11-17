import { fetchJSON } from './utils';

export default function main() {
    console.log('Olá, Classe!');

    fetchJSON('./data/data.json', console.log);
}