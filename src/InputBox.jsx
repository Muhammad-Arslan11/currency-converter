import React, { useId } from "react";



function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrecny = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {
   const amountInputId = useId()

    return (
        <>
        <div className=" bg-gray-700  ">
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    // this event handler will check if the onAmountChange method exists, then convert the value of onAmountChange to number
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrecny}
                     // this event handler will check if the onCurrencyChange method exists, then convert the value of onCurrencyChange to number
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(Number(e.target.value))}
                    disabled={currencyDisable}
                    
                    >
                    {currencyOptions.map(
                         (currency)=> ( 
                         <option key={currency} value={currency}>
                         {currency}
                        </option>)
                    )}
                    
                      
                
                </select>
            </div>
        </div>


        </div>
       


</>
    );
}

export default InputBox;