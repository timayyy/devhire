import { StyledMessage } from "./message.style"

const Message = ({ variant, children }) => {
    return (
        <StyledMessage variant={variant}>
            {children}
        </StyledMessage>
    )
}

export { Message }