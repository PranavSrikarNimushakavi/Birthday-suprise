document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const startButton = document.getElementById('startButton');
    const confettiText = document.getElementById('confettiText');
    const loveMeter = document.querySelector('#loveMeter span');
    const newMessage = document.getElementById('newMessage');
  
    const nextButtons = [
      document.getElementById('nextButton1'),
      document.getElementById('nextButton2'),
      document.getElementById('nextButton3'),
      
    ];
    const restartButton = document.getElementById('restartButton');
    const confettiButtons = document.querySelectorAll('.confetti-button'); // Ensure all confetti buttons are selected
    const bgMusic = document.getElementById('bgMusic');
    const soundButton = document.createElement('button');
  
    let currentPage = 0;
    let typewriterDone = false;
  
    soundButton.className = "sound-button";
    soundButton.innerHTML = "🔊";
    soundButton.style.display = "none";
    document.body.appendChild(soundButton);
  
  
    
  
    const nextButtonWish = document.getElementById('nextButtonWish');
    nextButtonWish.addEventListener('click', () => {
    currentPage++;
    showPage(currentPage);
  });
  
  
  
    function showPage(index) {
      pages.forEach(page => page.classList.remove('active'));
      pages[index].classList.add('active');
    }
  
    function playBackgroundMusic() {
      bgMusic.play();
      soundButton.style.display = "block";
    }
  
    function toggleSound() {
      if (bgMusic.paused) {
        bgMusic.play();
        soundButton.innerHTML = "🔊";
      } else {
        bgMusic.pause();
        soundButton.innerHTML = "🔇";
      }
    }
  
    soundButton.addEventListener('click', toggleSound);
  
    startButton.addEventListener('click', () => {
      currentPage = 1;
      showPage(currentPage);
      playBackgroundMusic();
      startInitialConfettiBlasts();
    });
  
    nextButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentPage = index + 2;
        showPage(currentPage);
      });
    });
  
    restartButton.addEventListener('click', () => {
      currentPage = 0;
      showPage(currentPage);
    });
  
    // Initial automatic confetti blasts with a center final blast
    function startInitialConfettiBlasts() {
      let blastCount = 0;
      
      nextButton1.style.display = "none"; // Disable the "Next" button
  
      const blastInterval = setInterval(() => {
        if (blastCount < 4) {
          launchCornerConfetti(blastCount); // Corner confetti blasts
        } else {
          launchCenteredConfetti(); // Final center blast
          clearInterval(blastInterval);
          setTimeout(() => {
            nextButton1.style.display = "inline-block"; // Show "Next" button after the final confetti blast
            revealConfettiText(); 
          }, 1000); // Delay before showing the button
        }
        blastCount++;
      }, 1000); // Blast every 1 second
    }
    // Launch confetti from the corners
    // Launch confetti from the four corners at the same time
  
    
    // Launch confetti from the bottom two corners alternating for the first 4 auto confetti
  // Launch confetti from both sides (left and right) simultaneously for the first 4 auto confetti
  // Launch confetti from both sides (left and right) simultaneously for the first 4 auto confetti
  function launchCornerConfetti(blastCount) {
    // Define the angles and origins for left and right sides
    const angles = [180, 0]; // Left side (180), Right side (0)
    const origins = [
      { x: 0, y: 0.5 },  // Left side (x=0, y=0.5)
      { x: 1, y: 0.5 }   // Right side (x=1, y=0.5)
    ];
  
    // Use a larger number of particles and spread for a more intense effect
    confetti({
      particleCount: 1000, // Increased particles for a more massive confetti explosion
      spread: 300, // Increased spread for a wider blast
      startVelocity: 70, // Increased velocity for more dynamic motion
      scalar: 2, // Even larger confetti size
      angle: angles[blastCount % 2], // Alternate between left (180) and right (0)
      origin: origins[blastCount % 2], // Alternate between left and right origins
    });
  
    // Optional: Confetti from both sides together in one blast (uncomment if desired)
    if (blastCount === 0 || blastCount === 1) {
      confetti({
        particleCount: 1000,
        spread: 300,
        startVelocity: 70,
        scalar: 2,
        angle: 180, // Left side
        origin: { x: 0, y: 0.5 } // Left side origin
      });
  
      confetti({
        particleCount: 1000,
        spread: 300,
        startVelocity: 70,
        scalar: 2,
        angle: 0, // Right side
        origin: { x: 1, y: 0.5 } // Right side origin
      });
    }
  }
  
  
    // Final centered blast
    function launchCenteredConfetti() {
      confetti({
        particleCount: 400,
        spread: 360,
        startVelocity: 50,
        scalar: 1.8,
        origin: { x: 0.5, y: 0.5 }
      });
    }
  
    // Manual confetti blast from the center
    function launchManualConfetti() {
      confetti({
        particleCount: 300,
        spread: 360,
        startVelocity: 50,
        scalar: 1.5,
        origin: { x: 0.5, y: 0.5 }
      });
    }
  
    function typewriterEffect(text, element) {
      let i = 0;
      element.innerHTML = "";
      function typing() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, 50);
        }
      }
      typing();
    }
    function showNewMessage() {
      newMessage.classList.remove('hidden');
      newMessage.classList.add('visible');
      typewriterEffect("✨ The very possibility of meeting a girl like you is something rare, something I never expected, yet something I’m endlessly grateful for. You didn’t just walk into my life; you changed the way I see the world, the way I think, the way I understand people and emotions. You made me question things I once believed were set in stone, and somehow, in the most effortless way, you became one of the most important people in my life. I never told you this back then, but the reason I kept quiet when I had a crush on you wasn’t because I was afraid, it was because I knew you weren’t interested in love, and the last thing I ever wanted was to make you feel uncomfortable. Your happiness and comfort meant more to me than anything I felt, so I chose to admire you in silence. And in my own way, I still expressed it, I described you in the form of the girl I love, because truthfully, that’s what you’ve always been to me. I know I’ve made mistakes, and for that, I’m truly sorry. If I could take back anything that ever hurt you, I would in a heartbeat. But all I can do now is promise you this, I will always cherish and respect you, in whatever way you choose to exist in my life. Because meeting you, knowing you, and learning from you has been one of the greatest gifts I’ve ever received. 💖", newMessage);
    }
  
    loveMeter.addEventListener("animationend", showNewMessage);
  
    // Attach event listener to each confetti button (on all pages)
    confettiButtons.forEach(button => {
      button.addEventListener('click', () => {
        launchManualConfetti();
      });
    });
  
    // Remove typewriter effect loop after completion
    const typewriterText = document.getElementById('typewriter');
    const text = typewriterText.textContent;
    let charIndex = 0;
  
    function typeWriterEffect() {
      if (charIndex < text.length) {
        typewriterText.textContent = text.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriterEffect, 100);
      } else {
        typewriterDone = true;
        startButton.style.visibility = "visible";
      }
    }
  
    startButton.style.visibility = "hidden";
    typeWriterEffect();
  });