console.log(`Number of categories: ${categories.children.length}`);
const arrayOfCategories = Array.from(categories.children);
arrayOfCategories.forEach(categorie => {
    const arrayOfItem = Array.from(categorie.children);
    arrayOfItem.forEach((item) => {
        if (item.tagName == 'UL') {
            console.log(`Elements: ${item.childElementCount}`)
        } else {
            console.log(`categocies ${item.textContent}`);
        }
    })
})
