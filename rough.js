// just a rough work space to test logics
// just a rough work space to test logics
// just a rough work space to test logics
// just a rough work space to test logics


const filters = (fobj) =>{
    return fobj.map(e=> `${e.name} = ${e.value} AND`)
}


console.log(filters([{name: 'a', value: 1}, {name: 'b', value: 2}]).join(" "))


// just a rough work space to test logics
// just a rough work space to test logics
// just a rough work space to test logics
// just a rough work space to test logics
