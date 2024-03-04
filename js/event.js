document.querySelector(".signup").addEventListener("click", () => {
  const name = document.querySelector(".name");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  if (name.checkValidity()) {
    alert(`${name.value}님, 저와 ${checkboxes.length}개의 취향이 같으시네요!`);
    name.value = "";
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  } else {
    alert(`이름을 입력해주세요.`);
    name.focus();
  }
});
