import React from "react";

interface MemoizationProps{
    financialData:{
        incomes : number[],
        outcomes : number[], 
    }
}


export const Memoization : React.FC <MemoizationProps> = (financialData) =>{
    return(
        <div>
            <h1>Memoization</h1>

            <h2>useMemo</h2>
        </div>
    )
}