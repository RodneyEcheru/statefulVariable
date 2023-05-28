
const statefulVariable = (key, initialValue) => {
    let value = initialValue;
    let subscribers = [];

    // try to get the value from localStorage if it exists
    if (typeof window !== "undefined") {
        const storedValue = localStorage.getItem(key);
        if (storedValue !== null) {
            value = JSON.parse(storedValue);
        }
    }

    function set(newValue) {
        value = newValue;
        subscribers.forEach((callback) => callback(value));

        // persist the new value to localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    }

    function update(callback) {
        set(callback(value));
    }

    function subscribe(callback) {
        subscribers.push(callback);

        // return an unsubscribe function
        return () => {
            subscribers = subscribers.filter((subscriber) => subscriber !== callback);
        };
    }

    // add a value property to access the current value of the writable store
    return {
        get value() {
            return value;
        },
        set,
        update,
        subscribe,
    };

};

module.exports = statefulVariable;
