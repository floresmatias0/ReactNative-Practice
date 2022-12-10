import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
    const { value, acc } = useCounter(0);
    return (
        <>
            <h3>
                Counter with hook <small>{value}</small>
            </h3>
            <button className="btn btn-primary mx-2" onClick={() => acc(1)}>
                +1
            </button>
            <button className="btn btn-primary mx-2" onClick={() => acc(-1)}>
                -1
            </button>
        </>
    );
};
