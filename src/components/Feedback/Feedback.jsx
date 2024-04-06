import css from './Feedback.module.css'
export default function Feedback({marks:{good, bad, neutral}}) {  
return (
    <ul className={css.feedList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
    </ul>
) 
}