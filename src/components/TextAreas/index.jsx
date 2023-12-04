import { Container } from "./styles";

//mudança de nome da pasta para TextAreas
export function TextAreas({ value, ...rest}) {
    return (

        <Container {...rest}>
            { value }
        </Container>
    )
}