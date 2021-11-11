export const OrderList = (list, kind) => {
  switch (kind) {
    case "last":
      return list.sort(function (a, b) {
        return (
          b.dateUpdate.toDate().getTime() - a.dateUpdate.toDate().getTime()
        );
      });
    case "new":
      return list.sort(function (a, b) {
        return (
          b.dateCreation.toDate().getTime() - a.dateCreation.toDate().getTime()
        );
      });
    case "old":
      return list.sort(function (a, b) {
        return (
          a.dateCreation.toDate().getTime() - b.dateCreation.toDate().getTime()
        );
      });
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
