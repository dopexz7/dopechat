/*global chrome*/

import { useState } from 'react';

export default function About() {
  const [exportLoad, setExportLoad] = useState('');
  const [importLoad, setImportLoad] = useState('');
  const [resetLoad, setResetLoad] = useState('');

  function exportSettings() {
    setExportLoad('Exporting settings...');
    var savelink = null;

    chrome.storage.local.get(null, function (items) {
      var allKeys = Object.keys(items);
      var val = Object.values(items);
      var result = {};
      allKeys.forEach((key, i) => (result[key] = val[i]));
      if (savelink) {
        URL.revokeObjectURL(savelink);
      }
      var blob = new Blob([JSON.stringify(result)], {
        type: 'text/plain;charset=utf-8',
      });
      savelink = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.setAttribute('href', savelink);
      a.setAttribute('download', 'v' + chrome.runtime.getManifest().version + '.settings');
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
    setExportLoad('Exported settings.');
    setTimeout(() => {
      setExportLoad('');
    }, 1000);
  }

  function resetSettings() {
    setResetLoad('Reseting settings...');
    chrome.storage.local.clear();
    setResetLoad('Settings reset.');
    setTimeout(() => {
      setResetLoad('');
    }, 1000);
  }

  function importSettings(ex) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var loaded = JSON.parse(reader.result);
        if (loaded && typeof loaded === 'object') {
          chrome.storage.local.set({ SET: loaded }, function () {
            importFile(loaded);
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    reader.readAsText(ex.target.files[0]);
  }

  function importFile(x) {
    var obj = {};
    var storage = chrome.storage.local;
    for (const [key, value] of Object.entries(x)) {
      obj[key] = value;
      storage.set(obj);
    }
    setImportLoad('Imported settings.');
    setTimeout(() => {
      setImportLoad('');
    }, 1000);
  }

  return (
    <>
      <div className="flex items-center flex-col w-full">
        <div className="border-0 border-darker-purple flex flex-col w-full p-6 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
          <div className="text-white text-base font-bold tracking-wider mb-3">About</div>

          <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
            <div className="ml-3 flex flex-row justify-center items-center text-main-white text-base">
              Submit suggestions or report bugs
              <a
                href="https://dopechat.ddns.net/"
                className="ml-auto border-2 px-4 py-1.5 rounded-2xl text-center font-bold content-center text-white text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple "
              >
                here
              </a>
            </div>
          </div>

          <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms] mt-3">
            <div className="ml-3 flex flex-row justify-center items-center text-main-white text-base">
              Extension version
              <div className="ml-auto px-4 py-1.5 text-center font-bold content-center text-white text-base">1.0.0</div>
            </div>
          </div>

          <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms] mt-3">
            <div className="ml-3 py-3 mr-3 flex flex-row justify-center items-center text-main-white text-base">
              <div
                onClick={() => {
                  exportSettings();
                }}
                className={` ${
                  exportLoad ? 'bg-white text-darker-purple' : 'text-white'
                } w-full ml-3 border-2 px-4 py-3 rounded-3xl text-center font-bold content-center  text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple`}
              >
                {exportLoad ? exportLoad : 'Export settings'}
              </div>
              <label
                htmlFor="importsettings"
                onClick={() => setImportLoad('Importing settings...')}
                className={` ${
                  importLoad ? 'bg-white text-darker-purple' : 'text-white'
                } flex flex-row items-center justify-center w-full ml-3 border-2 px-4 py-3 rounded-3xl text-center font-bold content-center  text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple`}
              >
                {importLoad ? importLoad : 'Import settings'}
              </label>
              <input
                onChange={(e) => importSettings(e)}
                type="file"
                id="importsettings"
                accept=".settings"
                style={{ display: 'none' }}
              />
              <div
                onClick={() => resetSettings()}
                className={` ${
                  resetLoad ? 'bg-white text-darker-purple' : 'text-white'
                } w-full ml-3 border-2 px-4 py-3 rounded-3xl text-center font-bold content-center  text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple`}
              >
                {resetLoad ? resetLoad : 'Reset settings'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
