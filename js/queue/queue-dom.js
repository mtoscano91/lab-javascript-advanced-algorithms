const queueUL = document.querySelector(".list-queue");
const queueInput = document.querySelector(".queue-input");
const warningTopQueue = document.querySelector("#queue-container .warning-top");
const warningBottomQueue = document.querySelector(
  "#queue-container .warning-bottom"
);
const addQueue = document.querySelector(".btn-add-queue");
const dequeue = document.querySelector(".btn-take-dequeue");

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  // ... your code goes here
  queueInput.value = "";
};

const generateListQueue = () => {
  // ... your code goes here
  for (let i = 0; i < queue.MAX_SIZE; i++) {
    const node = document.createElement("li");
    node.setAttribute("class", "inactive");
    queueUL.appendChild(node);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === "underflow") {
    // ... your code goes here
    warningBottomQueue.style.display = "block";
    warningBottomQueue.innerText = "underflow";
  } else if (type === "overflow") {
    // ... your code goes here
    warningTopQueue.style.display = "block";
    warningTopQueue.innerText = "overflow";
  }
};

const addToQueue = () => {
  // ... your code goes here
  warningBottomQueue.style.display = "";
  if (queue.enqueue(queueInput.value) === "Queue Overflow") {
    generateWarningQueue("overflow");
  } else {
    const node = queueUL.children[queue.queueControl.length - 1];
    node.setAttribute("class", "active");
    node.innerText = queueInput.value;
  }
  clearQueueInput();
};

const removeFromQueue = () => {
  // ... your code goes here
  warningTopQueue.style.display = "";
  const node = queueUL.children[queue.queueControl.length - 1];
  if (node) {
    queue.dequeue();
    node.setAttribute("class", "inactive");
    node.innerText = "";
  } else {
    generateWarningQueue("underflow");
  }
};

addQueue.addEventListener("click", addToQueue);
dequeue.addEventListener("click", removeFromQueue);
