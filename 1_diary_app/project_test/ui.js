//buttons and inputs
const inputBtn = document.querySelector("#inputBtn");
const listBtn = document.querySelector("#recordsBtn");
//put this on one line
const importExportBtn = document.querySelector("#importExportBtn");
const inputDiv = document.querySelector("#input");
//put this on one line
const entriesDiv = document.querySelector(".diaryEntries");
//put this on one line
const importExportDiv = document.querySelector(".importExport");

let activeColor = "#050D31";
let inactiveColor = "#2600FF";

//put this on one line
const toggleElement = (toShow, toHide, activeC, inactiveC) => {
  toShow.map((i) => (i.style.display = "block"));
  toHide.map((i) => (i.style.display = "none"));
  //put this on one line
  activeC.map((i) => (i.style.backgroundColor = activeColor));
  //put this on one line
  inactiveC.map((i) => (i.style.backgroundColor = inactiveColor));
};

inputBtn.addEventListener("click", () => {
  toggleElement(
    [inputDiv],
    [entriesDiv, importExportDiv],
    [inputBtn],
    [listBtn, importExportBtn]
  );
});

listBtn.addEventListener("click", () => {
  toggleElement(
    [entriesDiv],
    [inputDiv, importExportDiv],
    [listBtn],
    [inputBtn, importExportBtn]
  );
});

importExportBtn.addEventListener("click", () => {
  toggleElement(
    [importExportDiv],
    [inputDiv, entriesDiv],
    [importExportBtn],
    [listBtn, inputBtn]
  );
});
