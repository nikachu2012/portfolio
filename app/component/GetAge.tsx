//from: https://zenn.dev/awsmgs/articles/96893507976a1f

type Props = {
    year: number,
    month: number,
    date: number,
}

export default function GetAge(props: Props) {

    const today = new Date();

    const thisYearsBirthday = new Date(today.getFullYear(), props.month - 1, props.date);
    let age = today.getFullYear() - props.year;

    if (today < thisYearsBirthday) {
        //今年まだ誕生日が来ていない
        age--;
    }

    return (<>
        {age}
    </>);
}
