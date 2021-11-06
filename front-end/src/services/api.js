exports.login = (username, password) =>
    fetch(`http://localhost:8080/users/login?username=${username}&password=${password}`, {method:'POST'}).then(response => response.json());