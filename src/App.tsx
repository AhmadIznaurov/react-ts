import React, {FC, useState} from 'react';

interface Position {
    id: string,
    value: string,
    title: string
}

type showDataState = {
    name: string,
    text: string,
    position: string
}
export const App: FC = () => {
        const POSITIONS: Array<Position> = [
            {
                id: "fd",
                value: "Frontend Developer",
                title: "Frontend Developer"
            },
            {
                id: "bd",
                value: "Backend Developer",
                title: "Backend Developer"
            }
        ]

    const DEFAULT_POSITIONS_VALUE: string = POSITIONS[0].value
    const styles: React.CSSProperties = { display: 'block', marginBottom: '10px'}

    const [inputText, setInputText] = useState<string>('')
    const [textAreaText, setTextAreaText] = useState<string>('')
    const [selectText, setSelectText] = useState<string>(DEFAULT_POSITIONS_VALUE)
    const [showData, setShowData] = useState<showDataState>( {
        name: "",
        text: "",
        position: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
            const { target: {value: inputText} } = e;
            setInputText(inputText)
    }

    const handleAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
        const { target: {value: textAreaText} } = e;
        setTextAreaText(textAreaText)
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
        const { target: {value: selectText} } = e;
        setSelectText(selectText)
    }

    const handleShow = (e: React.MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();

        setInputText('')
        setTextAreaText('')
        setSelectText(DEFAULT_POSITIONS_VALUE)
        setShowData({
            name: inputText,
            text: textAreaText,
            position: selectText
        })
    }


    return (
        <>
            <form>
                <label style={styles}>
                    Name:
                    <input
                    value={inputText}
                    onChange={handleInputChange}
                    />
                </label>
                <label style={styles}>
                    Text:
                    <textarea
                    value={textAreaText}
                    onChange={handleAreaChange}
                    />
                </label>
                <select
                style={styles}
                value={selectText}
                onChange={handleSelectChange}
                >
                    {POSITIONS.map(({id, value, title}) => (
                        <option
                        key={id}
                        value={value}
                        >
                            {title}
                        </option>
                    ))}
                </select>
                <button onClick={handleShow}>Show Data</button>
            </form>
            <h2>{showData.name}</h2>
            <h3>{showData.text}</h3>
            <h3>{showData.position}</h3>
        </>
    )
}


