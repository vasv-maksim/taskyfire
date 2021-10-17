export { };
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
  order: number;
}

interface IDrop {
  fromColumnId: Uuid;
  toColumnId: Uuid;
  fromOrder: number;
  toOrder: number;
}

interface IColumnsCarded extends IColumn {
  cards: ICard[];
}

const getColumnCards = (columnId: Uuid): ICard[] => cardsData.filter((x: ICard) => x.columnId === columnId);

module.exports = {
  cards(): ICard[] {
    return cardsData;
  },
  cardById(id: Uuid): ICard[] {
    return cardsData.filter((x: ICard) => x.id === id);
  },
  columnById(id: Uuid): IColumn[] {
    return columnsData.filter((x: IColumn) => x.id === id);
  },
  columnsCards(columnId: Uuid): ICard[] {
    return cardsData.filter((x: ICard) => x.columnId === columnId);
  },
  columns(): IColumnsCarded {
    return columnsData.map((x: IColumn) => ({ ...x, cards: getColumnCards(x.id) }));
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dropCard(drop: IDrop): boolean {
    return true;
  },
};
