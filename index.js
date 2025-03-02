const ApiCalling = async () => {
  await fetch("main.json")
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        AssignJson(item);
        console.log(item);
      });
    });
};
ApiCalling();

const AssignJson = (item) => {
  const { company, deadline, description, id, status, task, time } = item;
  const taskBody = document.getElementById("taskBody");
  const taskCard = document.createElement("div");
  taskCard.innerHTML = `    <div class="flex gap-6 flex-col bg-[#f4f7ff] p-6 rounded-[12px] max-w-[500px] w-full">
    <div>
        <span class="font-[400] p-2 bg-white px-4 py-2 rounded-[8px] inline-block">${company}</span>
    </div>
    <h4 class="text-[24px] font-[500] line-clamp-1">${task}</h4>
    <span class="p-4 font-[400] overflow-hidden opacity-[.5] bg-white rounded-[12px] line-clamp-2">
        ${description}
    </span>
    <hr class="border-dashed border-[0.8] my-[16px]">
    <div class="flex justify-between items-center">
        <div>
            <span class="text-sm text-gray-500">Deadline</span>
            <p class="font-[500] text-gray-800">${deadline}</p>
        </div>
        <div>
            <button 
            id="${id}" 
            task="${task}"
            onclick="disabledBtn(this)" class="bg-[#3752fd] px-5 py-3 rounded-[8px] cursor-pointer text-white ${status}">
                ${status}
            </button>
        </div>
    </div>
</div>

`;

  taskBody.appendChild(taskCard);
};

let employeeTask = 0;
const disabledBtn = (taskId) => {
  // this is for added task list
  const add = document.getElementById("add");
  const Append = document.createElement("div");

  const spanCreate = document.createElement("p");
  const task = taskId.getAttribute("task");
  spanCreate.innerHTML = `<p  class="" > You have Complete The Task ${task} `;

  Append.appendChild(spanCreate);

  // real time function
  const realTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const realTimeZone = `${hours}:${minutes}:${seconds}`;

    // get element
    const realTimeSpan = document.createElement("p");
    realTimeSpan.innerHTML = `<p class="" >at ${realTimeZone} PM</p>`;

    Append.appendChild(realTimeSpan);
    add.appendChild(Append);
  };
  realTime();

  // this is for disabled button
  const btn = document.getElementById(`${taskId.id}`);
  btn.disabled = true;
  btn.style.opacity = "0.2";
  btn.style.cursor = "not-allowed";

  // this is for remove btn

  const removeBtn = document.getElementById("removeBtn");
  removeBtn.addEventListener("click", () => {
    add.removeChild(Append);
    const increment = document.getElementById("increment");
    increment.innerHTML = Number(increment.innerHTML) - 1;
    const decrement = document.getElementById("decrement");
    decrement.innerHTML = Number(decrement.innerHTML) + 1;
    const btn = document.getElementById(`${taskId.id}`);
    btn.disabled = false;
    btn.style.opacity = "1";
  });

  // this is for decrement dynamic value
  const decrement = document.getElementById("decrement");
  const setDecrement = parseInt(decrement.innerHTML);
  decrement.innerHTML = setDecrement - 1;

  // this is for increment dynamic value
  const increment = document.getElementById("increment");
  const setIncrement = parseInt(increment.innerHTML);
  increment.innerHTML = setIncrement + 1;

  // this is for alert
  alert("Board updated successfully");
  employeeTask++;
  if (employeeTask === 6) {
    alert("Congress...! you have completed all the tasks");
  }
};

// started challenge part here
const realDate = document.getElementById("realDate");
const WeekDay = document.getElementById("WeekDay");
const localDate = () => {
  const date = new Date();
  const day = date.getDate();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const week = weekdays[date.getDay()];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const localDate = `${month} ${day} ${year}`;
  WeekDay.innerHTML = week;
  realDate.innerHTML = localDate;
};
localDate();

// randomColor

const randomColor = document.getElementById("randomColor");
const body = document.querySelector("body");

randomColor.addEventListener("click", function () {
  const RandomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = "#" + RandomColor;
});

//  this is for Discover

const Discover = document.getElementById("Discover");

Discover.addEventListener("click", function () {
  console.log("hello");
  window.location.href = "qustionAns.html";
});
