Notification.requestPermission(function(status) {
	console.log('Notification permission status:', status);
});

const notificationButtonElement = document.querySelector("#notificationButton");


if ('Notification' in window && navigator.serviceWorker) {
	notificationButtonElement.removeAttribute('hidden');
}

// notificationButtonElement.addEventListener("click", () => {
// 	if(Notification.permission === 'granted') {
// 		console.log("Notifications: ON");
// 		// Notification.permission = 'blocked';
// 		// notificationButtonElement.querySelector("i").style.color = "rgb(35, 69, 104)";

// 	}else if(Notification.permission === 'denied'){
// 		console.log("Notifications: OFF");
// 		// Notification.permission = 'granted';
// 		// notificationButtonElement.querySelector("i").style.color = "#FFF";
// 	}else{
// 		console.log("Notifications: OFF");
// 	}
// });

export function displayNotification(message) {
  if (Notification.permission == 'granted') {

		var options = {
			body: message,
			icon: "/assets/images/icons/catter-128x128.png",
			vibrate: [100, 50, 100],
			data: {
				dateOfArrival: Date.now(),
				primaryKey: 1
			}
		};

    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification('Chatterbox', options);
    });
  }
}
