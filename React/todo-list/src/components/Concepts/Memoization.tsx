import React, { useCallback, useMemo, useState } from "react";

interface MemoizationProps{
    financialData:{
        incomes : number[];
        outcomes : number[]; 
    }
}



export const Memoization : React.FC<MemoizationProps> = ({financialData}) =>{
   //Estado que define se os valores devem ser mostrados ou não
    const [showValues, setShowValues] = useState(true)

    const totalIncomes = useMemo(()=>{
           return financialData.incomes.reduce((total, income) =>{
            console.log('Calculando o total de recebimentos...')
            return total += income
        }, 0)
    }, [financialData.incomes])


    const totalOtcomes = useMemo(() =>{
        return  financialData.outcomes.reduce((total, outcome) => {
        console.log('Calculando o total das despesas...')
        return total += outcome
        }, 0)
    }, [financialData.outcomes])

    

    const aplicarDesconto = useCallback((desconto:number) =>{
        return totalOtcomes * (1 - desconto)
    },[totalOtcomes]) 

    return(
        <div style={{padding:'2rem'}}>
            <h1>Memoization</h1>

            <h2>useMemo</h2>

            <p>{`Total de receitas R$ ${showValues? totalIncomes : 'XXX'}`}</p>
            <br />
            <p>{`Total de despesas R$ ${showValues ? totalOtcomes : 'XXX'}`}</p>

            <br />
            <br />
            <button onClick={() => {setShowValues(!showValues )}}>
                {showValues ? 'Ocultar Valores' : 'Mostrar Valores'}
                </button>
        </div>
    )
}