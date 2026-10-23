

// keep track of active global mouse listeners (easier to clean up later)
let activeFeatureListener = null;

function applyAccessibilityFeature(featureName, containerElement) {
  // clean up previous features and global listeners first to remove old info
  cleanupActiveFeatures();

  // reset container styles back to default
  containerElement.className = "passage-text-container";
  containerElement.style.fontFamily = '';
  containerElement.style.letterSpacing = '';
  containerElement.style.lineHeight = '';

  // switch to the active feature following the latin square route
  switch (featureName) {
    case 'bionic':
      applyBionicText(containerElement);
      break;
      
    case 'ruler':
      setupReadingRuler(containerElement);
      break;
      
    case 'spotlight':
      setupSpotlight(containerElement);
      break;
      
    case 'filter':
      containerElement.classList.add('feature-filter-tint');
      break;
      
    case 'font':
      applyDyslexiaFont(containerElement);
      break;

    case 'none':
    default:
      // standard presentation, no modifications needed
      break;
  }
}

// global cleanup function to call when leaving the reading screen
function cleanupActiveFeatures() {
  // remove DOM elements (ruler bar or spotlight overlay)
  document.querySelectorAll('.reading-ruler').forEach(el => el.remove());
  
  const existingSpotlight = document.getElementById('reading-spotlight');
  if (existingSpotlight) {
    existingSpotlight.remove();
  }

  // remove active mousemove listeners so they don't disrupt questions and cause errors
  if (activeFeatureListener) {
    document.removeEventListener('mousemove', activeFeatureListener);
    activeFeatureListener = null;
  }
}

function applyBionicText(container) {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    const text = node.nodeValue;
    const newHtml = text.replace(/\b([a-zA-ZÀ-ÿ]+)\b/g, (word) => {
      const mid = Math.ceil(word.length / 2);
      const boldPart = word.slice(0, mid <= 1 ? 1 : mid);
      const normalPart = word.slice(mid <= 1 ? 1 : mid);
      return `<strong>${boldPart}</strong>${normalPart}`;
    });
    
    if (newHtml !== text) {
      const span = document.createElement('span');
      span.innerHTML = newHtml;
      node.parentNode.replaceChild(span, node);
    }
  }
}

function setupReadingRuler(container) {
  const ruler = document.createElement('div');
  ruler.className = 'reading-ruler';
  document.body.appendChild(ruler);

  ruler.style.position = 'fixed';
  ruler.style.height = '40px';
  ruler.style.width = '100%';
  ruler.style.backgroundColor = 'rgba(255, 235, 59, 0.2)';
  ruler.style.borderTop = '2px solid rgba(255, 193, 7, 0.6)';
  ruler.style.borderBottom = '2px solid rgba(255, 193, 7, 0.6)';
  ruler.style.pointerEvents = 'none';
  ruler.style.zIndex = '9999';

  activeFeatureListener = (e) => {
    ruler.style.top = `${e.clientY - 20}px`;
  };
  
  document.addEventListener('mousemove', activeFeatureListener);
}

function setupSpotlight(container) {
  let spotlightOverlay = document.getElementById('reading-spotlight');
  if (!spotlightOverlay) {
    spotlightOverlay = document.createElement('div');
    spotlightOverlay.id = 'reading-spotlight';
    document.body.appendChild(spotlightOverlay);

    spotlightOverlay.style.position = 'fixed';
    spotlightOverlay.style.top = '0';
    spotlightOverlay.style.left = '0';
    spotlightOverlay.style.width = '100vw';
    spotlightOverlay.style.height = '100vh';
    spotlightOverlay.style.pointerEvents = 'none';
    spotlightOverlay.style.zIndex = '9999';
  }

  const bandHeight = 60; // height of reading box in pixels

  activeFeatureListener = (e) => {
    const y = e.clientY;
    const topLimit = Math.max(0, y - bandHeight / 2);
    const bottomLimit = y + bandHeight / 2;

    spotlightOverlay.style.background = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75) 0px,
      rgba(0, 0, 0, 0.75) ${topLimit}px,
      rgba(0, 0, 0, 0) ${topLimit}px,
      rgba(0, 0, 0, 0) ${bottomLimit}px,
      rgba(0, 0, 0, 0.75) ${bottomLimit}px,
      rgba(0, 0, 0, 0.75) 100%
    )`;
  };

  document.addEventListener('mousemove', activeFeatureListener);
}

function applyDyslexiaFont(container) {
  container.style.fontFamily = '"Open-Dyslexic", "Comic Sans MS", sans-serif';
  container.style.letterSpacing = '0.08em';
  container.style.lineHeight = '1.8';
}