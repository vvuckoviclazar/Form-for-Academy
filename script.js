document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const loginContainer = document.getElementById("login-container");

  const VALID_USERNAME = "new_user";
  const VALID_PASSWORD = "123456789";

  const createIcon = (valid) => {
    const icon = document.createElement("span");
    icon.textContent = valid ? "✅" : "❌";
    icon.style.marginLeft = "8px";
    return icon;
  };

  const showMessage = (messages) => {
    let messageBox = document.getElementById("messages");

    if (!messageBox) {
      messageBox = document.createElement("div");
      messageBox.id = "messages";
      messageBox.style.marginTop = "16px";
      loginContainer.appendChild(messageBox);
    }

    messageBox.innerHTML = "";
    messages.forEach((msg) => {
      const p = document.createElement("p");
      p.style.color = "brown";
      p.style.fontSize = "14px";
      p.textContent = `*${msg}`;
      messageBox.appendChild(p);
    });
  };

  const clearValidation = () => {
    [usernameInput, passwordInput].forEach((input) => {
      input.style.border = "";
      const next = input.nextElementSibling;
      if (next && (next.textContent === "✅" || next.textContent === "❌")) {
        next.remove();
      }
    });
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    clearValidation();
    const errors = [];

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "") {
      usernameInput.style.border = "2px solid red";
      usernameInput.after(createIcon(false));
      errors.push("please, enter username");
    } else if (username !== VALID_USERNAME) {
      usernameInput.style.border = "2px solid red";
      usernameInput.after(createIcon(false));
      errors.push("please, enter valid username");
    } else {
      usernameInput.style.border = "2px solid green";
      usernameInput.after(createIcon(true));
    }

    if (password === "") {
      passwordInput.style.border = "2px solid red";
      passwordInput.after(createIcon(false));
      errors.push("please, enter password");
    } else if (password !== VALID_PASSWORD) {
      passwordInput.style.border = "2px solid red";
      passwordInput.after(createIcon(false));
      errors.push("please, enter valid password");
    } else {
      passwordInput.style.border = "2px solid green";
      passwordInput.after(createIcon(true));
    }

    if (errors.length > 0) {
      showMessage(errors);
    } else {
      showMessage(["Successful login!"]);
    }
  });
});
