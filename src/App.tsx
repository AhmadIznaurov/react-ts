import React, {FC} from 'react';



export const App: FC = () => {

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
        console.log('submitted')
    }
    return (
        <>
            <form
            onSubmit={handleSubmit}
            >
                Some easy form text
                <input
                    onFocus={handleFocus}
                    type="text"
                    name='text'
                />
                <br/>
                <button type='submit'>submit</button>
            </form>
        </>
    )


}








// export const App: FC = () => {
//
//     const [count, setCount] = useState(0);
//     const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         console.log(e.clientX, e.clientY)
//         setCount(count +1)
//     }
//
//     return (
//         <>
//         <h1>Counter</h1>
//             <h2>{count}</h2>
//             <button onClick={(e) => handleClick(e)}>plusOne</button>
//         </>
//     )
// }


