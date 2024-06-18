

function getItemFromLocalStorage(key) {
    if (!key) {
        throw new Error('Key is required to get item from local storage.');
    }

    const item = localStorage.getItem(key);

    if (item) {
        try {
            return JSON.parse(item);
        } catch (error) {
            console.error('Error parsing JSON from local storage', error);
            return null;
        }
    }

    return null;
}




function addItemToLocalStorage(key, value) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string to add item to local storage.');
    }

    try {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error('Error storing item to local storage', error);
    }
}





function removeItemFromLocalStorage(key) {
    if (!key) {
        throw new Error('Key is required to remove item from local storage.');
    }

    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing item from local storage', error);
    }
}

export { getItemFromLocalStorage, addItemToLocalStorage, removeItemFromLocalStorage };





// const user = getItemFromLocalStorage('user');
// addItemToLocalStorage('user', user);
//removeItemFromLocalStorage('user')