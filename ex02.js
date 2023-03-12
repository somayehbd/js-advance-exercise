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

let checkValispassword = function (password, search1,search2) {
    if (password.length < search1)
    {
        console.log('Password at least should be 8 characters.');
        return;
    }
    
    if (!password.includes(search2))
    {
        console.log(`Password should include ${search2} keyword.`);
        return;
    }

    console.log('Authentication completed.');
}

checkValispassword('aaaaaaaaaaaa12',8, 12345)