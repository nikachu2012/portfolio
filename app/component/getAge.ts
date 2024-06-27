//from: https://zenn.dev/awsmgs/articles/96893507976a1f
export default function getAge(year: number, month: number, date: number): number {

    const today = new Date();

    const thisYearsBirthday = new Date(today.getFullYear(), month - 1, date);
    let age = today.getFullYear() - year;

    if (today < thisYearsBirthday) {
        //今年まだ誕生日が来ていない
        age--;
    }

    return age;
}
