import { useState } from "react";
import Layout from "../komponen/Layout";

function State() {
    const [bilangan1, setBilangan1] = useState(0);
    const [bilangan2, setBilangan2] = useState(0);
    const [hasil, setHasil] = useState(0);

    const penambahan= () => {
        setHasil(bilangan1 + bilangan2);
    };
    
    const perkalian= () => {
        setHasil(bilangan1 * bilangan2);
    };
    
    const pengurangan= () => {
        setHasil(bilangan1 - bilangan2);
    };
    const pembagian= () => {
        setHasil(bilangan1 / bilangan2);
    };

    return (
        <>
            <Layout>
                <p>
                    Bilangan 1:{" "}
                    <input 
                        type="text"
                        className="border border-gray-600 rounded-sm px-2 mt-2"
                        value={bilangan1.toString()}
                        onChange={(e) => setBilangan1(parseInt(e.target.value))}
                    />
                </p>
                <p>
                    Bilangan 2:{" "}
                    <input 
                        type="text"
                        className="border border-gray-600 rounded-sm px-2 mt-2"
                        value={bilangan2.toString()}
                        onChange={(e) => setBilangan2(parseInt(e.target.value))}
                    />
                </p>
                <p>hasil: {hasil}</p>

                <button
                    type="button"
                    className="mt-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:otline-none focus:ring-blue-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    onClick={penambahan}
                >
                    Tambah
                </button>
                
                <button
                    type="button"
                    className="mt-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:otline-none focus:ring-blue-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    onClick={perkalian}
                >
                    Kali
                </button>

                <button
                    type="button"
                    className="mt-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:otline-none focus:ring-blue-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    onClick={pengurangan}
                >
                    Kurang
                </button>

                <button
                    type="button"
                    className="mt-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:otline-none focus:ring-blue-300
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                    onClick={pembagian}
                >
                    Bagi
                </button>
            </Layout>
        </>
    );
};

export default State;
    
  