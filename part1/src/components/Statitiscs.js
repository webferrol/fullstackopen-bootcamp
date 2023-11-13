import StatitiscLine from "./StatitiscLine"

export default function Statitiscs (props) {
    const { good, bad, neutral } = props

    const getTotal = () => good + neutral + bad

    if (!(good + neutral + bad))
        return <strong>No feedback given</strong>
    
    return (
        <>
            
            <table border={1}>
                <thead>
                    <tr>
                        <th>
                            Statitics
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <StatitiscLine text="good" value={good} />
                    <StatitiscLine text="bad" value={bad} />
                    <StatitiscLine text="neutral" value={neutral} />

                    <StatitiscLine text="all" value={getTotal()} />
                    <StatitiscLine text="average" value={(good - bad) / getTotal()} />
                    <StatitiscLine text="positive" value={good * 100 / getTotal()} />
                </tbody>
            </table>
        </>
    )
}
