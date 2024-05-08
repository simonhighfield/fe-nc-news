export default function getUserData (users, username) {
    return users.filter((user) => {
        return user.username === username
    })[0]
}