const filters = (arrobj) =>{
    let filterAddon = ``
    arrobj.forEach((e,i) => {
        let addon = `${e.name} = '${e.value}'`
        if(i == 0){
            filterAddon+=addon
        }
        else{
            filterAddon+=(`AND `+addon)
        }
    });
    return filterAddon
}

const query = (fobj) =>{

    const q = 
    `
    SELECT productId,
    productName,
    productImagesName,
    productImagesUrls,
    brandName,
    pv.description,
    itemCode,
    itemType,
    currency,
    currencyCode,
    saleAmount,
    broshureFileName,
    broshureUrls,
    vendors,
    pv.status,
    pv.createdBy,
    pv.createdAt,
    pv.updatedAt,
    pv.subCategoryId,
    pv.categoryId,
    pv.uomId,
    shipingMethodId,
    shippingTermId,
    paymentTermId,
    cv.categoryName,
    sv.subCategoryName,
    cu.code as uomCode,
    cu.description uomDescription
    FROM ProductV2 pv
    JOIN CategoryV2 cv on cv.categoryId = pv.categoryId
    JOIN SubCategoryV2 sv on sv.subCategoryId = pv.subCategoryId
    JOIN CustomerUOM cu on cu.uomId = pv.uomId
    ${fobj.length ? `WHERE `+filters(fobj): ""}
    `
    return q
}

module.exports = { query }