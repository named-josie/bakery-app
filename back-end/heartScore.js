const heartScore = (hearts) => {
    return hearts > 5
    ? '❤️❤️❤️❤️❤️'
    : hearts > 4 ? '❤️❤️❤️❤️'
    : hearts > 3 ? '❤️❤️❤️'
    : hearts > 2 ? '❤️❤️'
    : '❤️';
}