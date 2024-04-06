import css from './Options.module.css'
export default function Options({updateFunction, resetFunction, result}) {
return (
    <ul className={css.opList}>
        <li><button type="button" onClick={() => updateFunction('good')}>Good</button></li>
        <li><button type="button" onClick={() => updateFunction('neutral')}>Neutral</button></li>
        <li><button type="button" onClick={() => updateFunction('bad')}>Bad</button></li>

       { result !== 0 && <li><button type="button" onClick={resetFunction}>Reset</button></li>}
    </ul>
)
}