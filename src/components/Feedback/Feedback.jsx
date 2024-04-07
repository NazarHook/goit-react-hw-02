import css from './Feedback.module.css'
export default function Feedback({result, percentage, marks:{good, bad, neutral}}) {  
return (
    <ul className={css.feedList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {result}</li>
        <li>Positive: {percentage}%</li>
    </ul>
) 
}