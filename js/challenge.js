/////////////// Selector

const counter = document.getElementById("counter");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const heartBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
const list = document.getElementById("list");
const commentForm = document.getElementById("comment-form");
const submitCom = document.getElementById("submit");
const commentInput = document.getElementById("comment-input");
// const sec = parseInt(counter.innerText);

document.addEventListener("DOMContentLoaded", () => {
  ///////////// Timer
  const intervalName = setInterval(() => {
    const sec = parseInt(counter.innerText);
    counter.innerText = sec + 1;
  }, 1000);

  ////////// Decrement Increment Button
  plusBtn.addEventListener("click", (e) => {
    let sec = parseInt(counter.innerText);
    return (counter.innerText = sec += 1);
  });
  minusBtn.addEventListener("click", (e) => {
    let sec = parseInt(counter.innerText);
    return (counter.innerText = sec -= 1);
  });

  /////////// Pause and Resume
  ////// Bug : When click 3 times or more clock starts to duplicate
  pauseBtn.addEventListener("click", () => {
    console.log("pause");
    clearInterval(intervalName);
    pause.innerText = "resume";

    if (pause.innerText === "resume") {
      console.log("resume");
      pauseBtn.addEventListener("click", () => {
        setInterval(() => {
          pause.innerText = "pause";
          const sec = parseInt(counter.innerText);
          counter.innerText = sec + 1;
        }, 1000);
      });
    }
  });

  ///////////////// Love button
  ////// Bug : button click x times wont back to 0
  let loveCount = [];
  heartBtn.addEventListener("click", () => {
    const newLi = document.createElement("li");
    list.append(newLi);
    if (loveCount === null) {
      loveCount = 1;
      newLi.innerText = `${counter.innerText} clicked love button ${loveCount} times`;
    } else {
      newLi.innerText = `${
        counter.innerText
      } clicked love button ${loveCount++} times`;
    }

    // console.log(loveCount);
    // console.log("Heart button clicked");
  });
  ////////// Leave comment
  submitCom.addEventListener("click", (e) => {
    e.preventDefault();
    const newComment = document.createElement("li");
    newComment.innerHTML = commentInput.value;
    commentForm.append(newComment);
  });
});
