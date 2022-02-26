const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return (
        <div className="exchange-rate text-white ff-body flex">
            <h2>Exchange Rate: </h2>
            <p>{exchangeRate}</p>
            <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
        </div>
    )
}

export default ExchangeRate;