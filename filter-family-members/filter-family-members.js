// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
var familyTree = {
  'firstName': 'Beth',
  'lastName': 'Johnson',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Beth Jr.',
      'lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          'location': 'Beijing',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};
//
var livesInBerkeley = function (familyTree) {
  return familyTree.location === 'Berkeley';
}
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];

// my idea to solve it is by going inside the object.
// checking if it is an object if it is we go next.
// checking for the truthTest.
// onse it is true we push the first name and last name to an array.
// then we check if the children is array od not.
// if they are an array we call back the funcution.
// the children array will go to the else we will loop in it checking also for truthTest.
// if the test is true we push the first name and the last name.
// but for a resoun i dont know the idea it dosent work.

var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body
var arr = []
if (!Array.isArray(familyTree)){

	for (var key in familyTree) {
		if (truthTest(familyTree[key])) {
		   arr.push( familyTree.firstName + ' ' + familyTree.lastName )
		}

		if ( Array.isArray(familyTree['children'])) {
			filterFamilyMembers(familyTree['children'],truthTest)
		}

	}
}else{
	for (var i = 0;	i < familyTree.length ; i++)	{
		if (truthTest(familyTree[i])) {
		arr.push( familyTree[i].firstName + ' ' + familyTree[i].lastName )
		}
	}
}


return arr

};

