export const OrderList = (list, kind) => {
  switch (kind) {
    case "new":
      break;
    case "old":
      break;
    case "desc":
      return list.sort(function (a, b) {
        if (a.list[0].word > b.list[0].word) {
          return -1;
        }
        if (a.list[0].word < b.list[0].word) {
          return 1;
        }
        return 0;
      });
    case "asc":
      return list.sort(function (a, b) {
        if (a.list[0].word < b.list[0].word) {
          return -1;
        }
        if (a.list[0].word > b.list[0].word) {
          return 1;
        }
        return 0;
      });
  }
};
