export {};
const { cardsData, columnsData } = require('./test-data');

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
    return cardsData;
  },
  cardById(id: Uuid): ICard[] {
    return cardsData.filter((x: ICard) => x.id === id);
  },
  columns(): IColumn[] {
    return columnsData;
  },
  columnById(id: Uuid): IColumn[] {
    return columnsData.filter((x: IColumn) => x.id === id);
  },
};
