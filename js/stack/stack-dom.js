const stackList = document.getElementById("stack-list");
const stackInput = document.getElementById("stack-input");
const container = document.getElementById("container");
const warningTopStack = document.querySelector("#stack-container .warning-top");
const warningBottomStack = document.querySelector(
  "#stack-container .warning-bottom"
);
const addStackBtn = document.getElementById("add-stack");
const takeStackBtn = document.getElementById("take-stack");

const newStack = new StackDataStructure();

const clearStackInput = () => {
  // ... your code goes here
  stackInput.value = "";
};

const renderListStack = () => {
  // ... your code goes here
  for (let i = 0; i < newStack.MAX_SIZE; i++) {
    const node = document.createElement("li");
    node.setAttribute("class", "inactive");
    stackList.appendChild(node);
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === "underflow") {
    // ... your code goes here
    warningBottomStack.style.display = "block";
    warningBottomStack.innerText = "underflow";
  } else if (type === "overflow") {
    // ... your code goes here
    warningTopStack.style.display = "block";
    warningTopStack.innerText = "overflow";
  }
};

const addToStack = () => {
  // ... your code goes here
  warningBottomStack.style.display = "";
  if (newStack.push(stackInput.value) === "Stack Overflow") {
    generateWarningStack("overflow");
  } else {
    const node = stackList.children[newStack.stackControl.length - 1];
    node.setAttribute("class", "active");
    node.innerText = stackInput.value;
  }
  clearStackInput();
};

const removeFromStack = () => {
  // ... your code goes here
  warningTopStack.style.display = "";
  const node = stackList.children[newStack.stackControl.length - 1];
  if (node) {
    newStack.pop();
    node.setAttribute("class", "inactive");
    node.innerText = "";
  } else {
    generateWarningStack("underflow");
  }
};

addStackBtn.addEventListener("click", addToStack);
takeStackBtn.addEventListener("click", removeFromStack);
