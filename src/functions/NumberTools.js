export const refontNumber = (number) => {
    // Transform a number without point with it => Exemple : from 34500 to 34,500
    // return (new Intl.NumberFormat('ja-JP').format(number));
    return String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,');
}