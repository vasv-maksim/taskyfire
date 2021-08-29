export {};
const { cards, columns } = require('./test-data');

type Uuid = string;

interface IColumn {
  id: Uuid;
  name: string;
}

interface ICard {
  id: Uuid;
  columnId: Uuid;
  name: string;
}

module.exports = {
  cards(): ICard[] {
    return cards;
  },
  cardById(id: Uuid): ICard[] {
    return cards.find((x: ICard) => x.id === id);
  },
  columns(): IColumn[] {
    return columns;
  },
  columnById(id: Uuid): IColumn[] {
    return columns.find((x: IColumn) => x.id === id);
  },
};
