import { Container } from "./styles";

//mudança de nome da pasta para TextArea
export function TextArea({ value, ...rest}) {
    return (

        <Container {...rest}>
            { value }
        </Container>
    )
}