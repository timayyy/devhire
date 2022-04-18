import { StyledCustomSelect } from './select.style'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrency } from '../../redux/currency/currency.actions'
import { useState } from 'react'
import { Spinner } from '../spinner/spinner'

const SelectInput = () => {
    const [currencyOption, setCurrencyOption] = useState('')

    const dispatch = useDispatch()

    const currencyList = useSelector((state) => state.currencyList)
    const { loading, currencies } = currencyList


    const handleSelectChange = (e) => {
        const id = e.target.value
        setCurrencyOption(id)
        dispatch(updateCurrency(Number(id)))
    }
    return (
        <StyledCustomSelect>
            {loading ? <Spinner /> : (
                <>
                    <select value={currencyOption} onChange={handleSelectChange}>
                        {currencies.map((currency, index) => (
                            <option key={index} value={currency.id}>{currency.name}</option>
                        ))}
                    </select>
                    <MdKeyboardArrowDown size={20} />
                </>
            )}

        </StyledCustomSelect>
    )
}

export { SelectInput }