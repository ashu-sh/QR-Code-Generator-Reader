let qr_code = document.querySelector("#qr-code");
let loader = document.querySelector("#loading");
let code_img = document.querySelector("#code-img");

qr_code.addEventListener("click", () => {
  loader.style.display = "block"; //display preloader after click on 'Genrate' button

  code_img.onload = function () {
    loader.style.display = "none"; //stop displaying preloader if code image is fully loaded;
  };
  let input = document.querySelector("#input").value;
  let api = `http://api.qrserver.com/v1/create-qr-code/?data=${input}&size=100x100=${input}`; //Taking input from user and display input data through code_img id;

  code_img.src = api; //code_img id is accessed to api for getting input information from api ,image src is accesesing to code_img veriable for displaying code image in browser
  //code_img variable gets input information from api & display it on browser through src;
});

const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("form");
const fileInp = form.querySelector("input");
const infoText = document.querySelector("#res");

async function fetchRequest(file, formData) {
  infoText.innerHTML = "Scanning QR Code...";
  fetch("http://api.qrserver.com/v1/read-qr-code/", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((result) => {
      result = result[0].symbol[0].data;
      console.log(result);
      infoText.innerHTML = result
        ? "Upload QR Code to Scan"
        : "Couldn't scan QR Code";
      if (!result) return;
      document.querySelector("textarea").innerHTML = result;
      form.querySelector("img").src = URL.createObjectURL(file);
      wrapper.classList.add("active");
    })
    .catch(() => {
      infoText.innerHTML = "Couldn't scan QR Code";
    });
}

fileInp.addEventListener("change", async (e) => {
  let file = e.target.files[0];
  if (!file) return;
  let formData = new FormData();
  formData.append("file", file);
  console.log(formData);
  await fetchRequest(file, formData);
});
