// let checkAuthentication = function (password, search2) {
//     if (password.length > 8 && password.includes(search2)) {
//         console.log('password complete')
//     }
//     else if (password.length < 8) {
//         console.log('password is less than 8 character')
//     }
//     else if (!password.includes(search2)) {
//         console.log('password bayad shamel adad bashad')
//     }
// }

// let checkAuthentication = function (password, search2) {
//     if (password.length < 8)
//         console.log('Password at least should be 8 characters.');
//     else if (!password.includes(search2))
//         console.log(`Password should include ${search2} keyword.`);
//     else 
//         console.log('Authentication completed.');
// }

/**
 * 
 * @param {string} password Password inputed by user
 * @param {number} search1 Specify minimum characters of password
 * @param {number} search2 A constant value which should be included in password
 * @returns 
 */
let checkValispassword = function (password, search1, search2) {
    if (typeof(password) !== 'string')
        throw 'password should be a string';
    if (typeof(search1) !== 'number')
        throw 'search1 should be a number';
    if (typeof(search2) !== 'number')
        throw 'search2 should be a number';
    
    if (password.length < search1) {
        console.log('Password at least should be 8 characters.');
        return;
    }

    if (!password.includes(search2)) {
        console.log(`Password should include ${search2} keyword.`);
        return;
    }

    console.log('Authentication completed.');
}

checkValispassword('aaaaaaaaaaaa12', 8, 12345)

checkValispassword('ali123iiiiiiiii', 8, '123');