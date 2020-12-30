// load script sample, we'll promisificate it later
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}

//usage
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (error, script) => {
    if (error) {
      console.error(error.msg);
    } else {
      console.log(`Cool, the script ${script.src} is loaded`);
      console.log(_); // function declared in the loaded script
    }
  }
);

// promisified
let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (error, script) => {
      if (error) reject(error);
      else resolve(script);
    });
  });
};

loadScriptPromise("https://code.jquery.com/jquery-3.5.1.slim.min.js")
  .catch((error) => console.error(error.message))
  .then((script) => {
    console.log(`Cool, the script ${script.src} is loaded`);
    console.log($); // function declared in the loaded script
  });

loadScriptPromise("https://no")
  .then((script) => {
    console.log(`Cool, the script ${script.src} is loaded`);
    console.log($); // function declared in the loaded script
  })
  .catch((error) => console.error(error.message));
