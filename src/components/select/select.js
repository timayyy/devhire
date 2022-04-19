import { StyledCustomSelect } from './select.style'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrency } from '../../redux/currency/currency.actions'
import { Spinner } from '../spinner/spinner'

const SelectInput = () => {

    const dispatch = useDispatch()

    const currencyList = useSelector((state) => state.currencyList)
    const { loading, currencies } = currencyList

    const currentCurrency = useSelector((state) => state.currentCurrency)
    const { currency } = currentCurrency


    const handleSelectChange = (e) => {
        const id = e.target.value
        dispatch(updateCurrency(Number(id)))
    }
    return (
        <StyledCustomSelect>
            {loading ? <Spinner /> : (
                <>
                    <select value={currency.id} onChange={handleSelectChange}>
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