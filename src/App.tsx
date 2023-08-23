import React, {FC} from 'react';

// type PropsTitle = {
//     title: string,
//     text?: string // This sign '?' shows us if we will add next type and won't be used, we need to use this sign '?'
// }
interface PropsTitle  {
    title: string,
    text?: string // This sign '?' shows us if we will add next type and won't be used, we need to use this sign '?'
}


// const Title: FC<{title: string}> = ({title}) => <h1>{title}</h1> Using functional components with generic
// const Title = ({title}: PropsTitle) => <h1>{title}</h1> Using type without generic



const Title: FC<PropsTitle> = ({title} ) => <h1>{title}</h1> // Using type inside FC with generic

export const App: FC = () => <Title title='HELLO TYPESCRIPT'/>


