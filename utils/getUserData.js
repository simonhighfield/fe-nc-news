export default function getUserData (users, content) {
    return users.filter((user) => {
        return user.username === content.author
    })[0]
}