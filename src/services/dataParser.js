function getItemAttributeNameByIndex(index){
  switch(index){
    case 0:
      return 'id';
    case 1:
      return 'price';
  }
}

export function parseHtmlToObject(htmlString){
  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlString, 'text/html');
  const dataTables = dom.querySelectorAll('table');
  const data = {};
  dataTables.forEach((table) => {
    const itemCategory = table.previousElementSibling.textContent;
    const tableRows = table.querySelectorAll('tr');
    data[itemCategory] = [];
    tableRows.forEach((row) => {
      const rowInformation = row.querySelectorAll('td');
      const itemInfo = {}
      rowInformation.forEach((item, index) => {
        itemInfo[getItemAttributeNameByIndex(index)] = Number(item.textContent);
      })
      if(Object.keys(itemInfo).length > 0){
        data[itemCategory].push(itemInfo);
      }
    })
  });
  return data;
}