import { decrement, increment } from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

function Counter() {
  const counter = useAppSelector((store) => store.counterSlice.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-5 text-center">
      <h1 className="text-3xl font-bold sm:text-4xl">
        Total:
        <span
          className={`${
            counter > 0 ? "text-green-500" : "text-red-500"
          } ml-2.5`}
        >
          {counter}
        </span>
      </h1>
      <div className="flex justify-center gap-5 text-lg sm:text-xl">
        <button
          onClick={() => dispatch(increment())}
          className="rounded bg-green-600 px-4 py-2 transition-colors hover:bg-green-500"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="rounded bg-red-600 px-4 py-2 transition-colors hover:bg-red-500"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
