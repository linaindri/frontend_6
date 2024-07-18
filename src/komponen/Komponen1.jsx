import React, {useContext} from "react";
import { MyContext } from "../Pages/ReactContext";

const ContextKomponen1 = () => {
    const [data, setData] = useContext(MyContext);
    const harga = 3000;
    return (
        <div>
            <div>
                {harga} x 3
                <p>
                    <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg text 3x1"
                    onClick={() => setData(data + (harga * 3))}
                    >
                        +
                    </button>
                </p>
            </div>
        </div>
    );
}

export default ContextKomponen1;