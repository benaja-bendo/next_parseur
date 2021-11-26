import React, { useState } from 'react';
import Resultat from '../components/pages/resultat';
import Upload from '../components/pages/Upload';

export default function Home() {
  // let dattaFile = "";
  const customData = require('../assets/affinda.json');
  const [dattaFile, setdattaFile] = useState("");
  const [files, setFiles] = useState("");
  const [filesAffiche, setFilesAffiche] = useState("");

  const handleChange = e => {

    // let json = JSON.stringify(e.target.files[0]);

    // const blob = new Blob([json], { type: "application/json" });

    // const fr = new FileReader();

    // fr.addEventListener("load", e => {
    //   console.log(e.target.result, JSON.parse(fr.result))
    //   console.log(e.target)
    // }); 

    // fr.readAsText(blob);

    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      let result = JSON.parse(e.target.result);
      let formatted = JSON.stringify(result, null, 2);
      // setFiles(e.target.result);
      setFiles(result);
      setFilesAffiche(formatted);
    };
  };
  const handleClick = e => {
    setdattaFile('ok');

  }
  return (
    <>
      {dattaFile == "" ?
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative">
              <div className="bg-white flex items-center justify-center py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs min-h-0 max-h-80 overflow-y-scroll">{filesAffiche}</h2>
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
        :
        <Resultat customData={customData} fileData={files} />}
    </>);
}

