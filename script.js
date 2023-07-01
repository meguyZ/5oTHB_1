document.getElementById("check-in-form").addEventListener("submit", function(event) {
  event.preventDefault(); // ป้องกันการโหลดหน้าใหม่หลังกด Submit

  // อ่านค่าที่กรอกในฟอร์ม
  var name = document.getElementById("name").value;
  var registration = document.getElementById("registration").value;

  // ส่งข้อมูลไปยัง webhook Discord
  var data = {
    name: name,
    registration: registration
  };
  sendToDiscordWebhook(data);

  // แสดงป๊อปอัปเมื่อเช็คชื่อสำเร็จ
  showSuccessPopup();
});

function sendToDiscordWebhook(data) {
  // URL ของ webhook Discord
  const webhookURL = "https://discord.com/api/webhooks/1124582745314701333/vfe3UK-I_oyY7DLOhkcXqgJfEwp63HCJAsjNCJ_NxNbkPiBxlW6VAnrqQykTtoeQ2LOb";
  
  // ข้อมูลที่ต้องการส่งไปยัง webhook
  const payload = {
    content: JSON.stringify(data)
  };

  // ส่งข้อมูลไปยัง webhook Discord
  sendDataToDiscordWebhook(payload);
}

function sendDataToDiscordWebhook(payload) {
  // ส่งข้อมูลไปยัง webhook Discord ที่กำหนด
  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (response.ok) {
      console.log("ส่งข้อมูลสำเร็จแล้ว");
    } else {
      console.error("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
  })
  .catch(error => {
    console.error("เกิดข้อผิดพลาดในการส่งข้อมูล", error);
  });
}

function showSuccessPopup() {
  // สร้างป๊อปอัปสำหรับแสดงผลเมื่อเช็คชื่อสำเร็จ
  var popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <img src="http://cdn.onlinewebfonts.com/svg/img_384101.png" alt="Success">
    <p>เช็คชื่อเข้างานสำเร็จ</p>
  `;
  document.body.appendChild(popup);

  // หากต้องการให้ป๊อปอัปหายอัตโนมัติหลังจากเวลาที่กำหนด (เช่น 3 วินาที)
  setTimeout(function() {
    popup.remove();
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
  // แสดงป๊อปอัปเมื่อกด F12
  document.addEventListener("keydown", function(event) {
    if (event.key === "F12") {
      showF12Popup();
    }
  });

  // แสดงป๊อปอัปเมื่อคลิกขวา
  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    showRightClickPopup();
  });
});

function showF12Popup() {
  var popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <img src="http://cdn.onlinewebfonts.com/svg/img_504768.png" alt="F12">
    <p>ฮันแน่กด F12 คิดไรอยู่!</p>
  `;
  document.body.appendChild(popup);

  setTimeout(function() {
    popup.remove();
  }, 3000);
}

function showRightClickPopup() {
  var popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <img src="http://cdn.onlinewebfonts.com/svg/img_504768.png" alt="Right Click">
    <p>ฮันแน่กด คลิกขว คิดไรอยู่!</p>
  `;
  document.body.appendChild(popup);

  setTimeout(function() {
    popup.remove();
  }, 3000);
}
