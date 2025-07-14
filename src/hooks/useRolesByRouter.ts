// function flatten(items: MenuItem[]) {
//   const flat: MenuItem[] = [];
//   items.forEach((item) => {
//     if (item.items.length > 0) {
//       flat.push(...flatten(item.items));
//     } else {
//       flat.push(item);
//     }
//   });

//   return flat;
// }
export const useRolesByRouter = () => {
  // const { menuItem } = useConfigAppStore();
  // const location = useLocation();
  // const pathname = location.pathname;
  // const actions = flatten(menuItem)?.filter((item) => item.uri === pathname)?.[0]?.actions;
  // return actions || [];
  return [];
};
