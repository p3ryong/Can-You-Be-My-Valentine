let noClicks = 0;

document.getElementById('noBtn').addEventListener('click', function() {
  noClicks++;
  let buttonText = '';
  switch (noClicks) {
    case 1:
      buttonText = 'Are you sure mahal?';
      document.getElementById('yesBtn').style.fontSize = '30px';
      document.getElementById('valentineImage').src = '11.JPG'; // Resetting font size
      break;
    case 2:
      buttonText = 'Why not huhu?';
      document.getElementById('yesBtn').style.fontSize = '40px';
      document.getElementById('valentineImage').src = '22.JPG'; // Increasing font size
      break;
    case 3:
      buttonText = 'Iiyak na po ako oh mahal ko huhuhu';
      document.getElementById('yesBtn').style.fontSize = '50px';
      document.getElementById('valentineImage').src = '33.JPG'; // Increasing font size
      break;
    case 4:
      buttonText = 'Ayaw mo talaga?, Iiyak na talaga ako huhuhu';
      document.getElementById('yesBtn').style.fontSize = '60px';
      document.getElementById('valentineImage').src = '44.JPG'; // Increasing font size
      break;
    case 5:
      buttonText = 'mag yes ka na po please!!!';
      document.getElementById('yesBtn').style.fontSize = '70px';
      document.getElementById('valentineImage').src = '55.JPG'; // Increasing font size
      break;
    case 6:
      buttonText = 'yunnnn, mag yeyes na sya';
      document.getElementById('yesBtn').style.fontSize = '80px';
      document.getElementById('valentineImage').src = '66.JPG'; // Increasing font size
      break;
    default:
      buttonText = 'No';
      noClicks = 0; // Resetting the counter
      break;
  }
  document.getElementById('noBtn').innerText = buttonText;
});

document.getElementById('yesBtn').addEventListener('click', function() {
    let container = document.querySelector('.container');
    container.innerHTML = '<img src="77.JPG" alt="Valentine Image"><h1>Yeyyyyy!!! I love you so much, mahal ko!</h1>';
  });
