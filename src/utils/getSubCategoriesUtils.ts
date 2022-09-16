export function getCategoriesTree(items: any, parentGrp: string | null) {
  return items.map((product: any) => {
    if (product.sub_category) {
      return {
        collapse: true,
        parentGrp: parentGrp
          ? `${parentGrp}.${product.product_id}`
          : `${product.product_id}`,
        ...product,
      };
    } else {
      return { ...product };
    }
  });
}

export function getprodCategories(data: any, prodData: any): any {
  const { level, items, parentGrp = '' } = data;
  let prodCategoriesTree = [];
  let subCategories: any = [];
  subCategories = getCategoriesTree(items, parentGrp);
  if (level === 0) {
    prodCategoriesTree = subCategories;
  } else {
    const parentHirarchy = parentGrp && parentGrp.split('.');
    let subCatTree = [...prodData?.prodCategories];
    const categoryId = data.product_id;
    prodCategoriesTree = getSubCategories(
      subCatTree,
      parentHirarchy,
      categoryId,
      subCategories
    );
  }
  const prodSummary =
    level === 0 ? [...data?.summary] ?? [] : [...prodData.prodSummary];
  return { prodSummary, prodCategoriesTree };
}

function getSubCategories(
  subCatTree: any,
  parentHirarchy: string[],
  categoryId: number,
  currentCategories: any
): any {
  let categories: any = subCatTree;
  if (parentHirarchy.length) {
    parentHirarchy.forEach((prodId: string, idx: number) => {
      const currentCategoryIdx = categories.findIndex(
        (product: any) => product.product_id === +prodId
      );
      if (currentCategoryIdx >= 0 && idx === parentHirarchy.length - 1) {
        categories[currentCategoryIdx]['collapse'] = !categories[
          currentCategoryIdx
        ].collapse;
        categories[currentCategoryIdx]['subCategories'] = currentCategories;
        //  return categories;
      } else if (currentCategoryIdx >= 0) {
        categories[currentCategoryIdx]['subCategories'] = getSubCategories(
          categories[currentCategoryIdx]['subCategories'],
          parentHirarchy.slice(1),
          categoryId,
          currentCategories
        );
      }
    });
    return categories;
  } else {
    const currentCategoryIdx = subCatTree.findIndex(
      (product: any) => product.product_id === categoryId
    );
    subCatTree[currentCategoryIdx]['subCategories'] = currentCategories;
    categories = subCatTree;
    return categories;
  }
}

export function removeSubCategoriesOnClose(
  productCategories: any,
  productId: number,
  parentGrp: string
) {
  let categories: any = productCategories;
  const parentHirarchy: any = parentGrp && parentGrp?.split('.');
  if (parentHirarchy.length) {
    parentHirarchy.forEach((prodId: string, idx: number) => {
      const currentCategoryIdx = categories.findIndex(
        (product: any) => product.product_id === +prodId
      );
      if (
        currentCategoryIdx >= 0 &&
        idx === parentHirarchy.length - 1 &&
        categories[currentCategoryIdx].product_id === productId
      ) {
        categories[currentCategoryIdx]['collapse'] = !categories[
          currentCategoryIdx
        ].collapse;
        delete categories[currentCategoryIdx]['subCategories'];
      } else if (currentCategoryIdx >= 0) {
        categories[currentCategoryIdx][
          'subCategories'
        ] = removeSubCategoriesOnClose(
          categories[currentCategoryIdx]['subCategories'],
          productId,
          parentHirarchy.slice(1).join('.')
        );
      }
    });
    return categories;
  }
}
