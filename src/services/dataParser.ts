import { Item, ItemsObject } from "../types";

function getItemAttributeNameByIndex(index : number) : string{
  switch(index){
    case 0:
      return 'id';
    case 1:
      return 'price';
    default:
      return '';
  }
}

export function parseHtmlToObject(htmlString : string) : ItemsObject{
  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlString, 'text/html');
  const dataTables = dom.querySelectorAll('table');
  const data : ItemsObject = {};
  dataTables.forEach((table) => {
    const itemCategory : string | null = table.previousElementSibling?.textContent || null;
    const tableRows = table.querySelectorAll('tr');
    if(itemCategory !== null){
      data[itemCategory] = [];
      tableRows.forEach((row) => {
        const rowInformation = row.querySelectorAll('td');
        const itemInfo : Item  = {};
        rowInformation.forEach((item, index) => {
          itemInfo[getItemAttributeNameByIndex(index)] = Number(item.textContent);
        })
        if(Object.keys(itemInfo).length > 0){
          data[itemCategory].push(itemInfo);
        }
      })
    }
    
  });
  return data;
}