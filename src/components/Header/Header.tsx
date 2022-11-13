import classes from "./Header.module.css";

type HeaderTypeProps = {
    toDoCount: number
}

export const Header = (props: HeaderTypeProps) => {
    let{toDoCount}=props

    return (
        <div className={classes.header_container}>
            <div className={classes.header_title}>
                ToDo list <b>{toDoCount}</b>task(s)
            </div>
        </div>
    )
}