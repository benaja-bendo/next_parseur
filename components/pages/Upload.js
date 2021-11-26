import React, { useState } from 'react';
import Link from 'next/link';

export default function Upload() {
    const [files, setFiles] = useState("");

    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            //   console.log("e.target.result", e.target.result);
            setFiles(e.target.result);
        };
    };
    const handleClick = e => {
        console.log('ok');
        
    }
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative">
                        <div className="bg-white flex items-center justify-center py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs min-h-0 max-h-80 overflow-y-scroll">{files}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Deposer votre CV</h2>
                        <p className="leading-relaxed mb-3 text-gray-600">De préférence un cv format Json</p>
                        <input className="mt-4 mb-4" type="file" onChange={handleChange} />
                        <button onClick={handleClick} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Soumettre</button>
                    </div>
                </div>
            </section>
            {/* <div className="overflow-hidden relative w-full mt-4 mb-4">
              <button className="text-white bg-gradient-to-r from-red-500 to-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full inline-flex items-center">
                <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                </svg>
                <span class="ml-2">Upload Document</span>
              </button>
              <input
                className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 left-0 right-0"
                type="file" onChange={handleChange}
              />
            </div> */}
        </>);
}