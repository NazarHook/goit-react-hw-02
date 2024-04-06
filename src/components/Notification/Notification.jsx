import css from './Notification.module.css'
export default function Notification({percentage, result}) {
   return (
    <div>
        {result === 0 ? <p className={css.message}>No feedback yet</p> : (<div className={css.feedStats}><p>Total: {result} </p><p>Positive: {percentage}%</p></div>)}
        </div>
)
}