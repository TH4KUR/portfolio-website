export const logUserEvents = () => {
  let lastScrollPosition = 0; // To track the last scroll position

  const logEvent = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    const timestamp = new Date().toISOString();
    const eventType = event.type; // Type of event (e.g., click, scroll)
    const target = event.target; // The element that triggered the event

    if (eventType === 'scroll') {
      const currentScrollPosition = window.scrollY;
      const scrollDirection =
        currentScrollPosition > lastScrollPosition
          ? 'scroll down'
          : 'scroll up';
      lastScrollPosition = currentScrollPosition;

      console.log(`[${timestamp}] Event: ${scrollDirection}`);
    } else {
      console.log(`[${timestamp}] Event: ${eventType}`, {
        target,
        targetType: target.tagName || 'Unknown',
        targetContent: target.innerText || target.alt || 'No content',
      });
    }
  };

  // List of events to track
  const eventsToTrack = ['click', 'scroll', 'keydown', 'mousemove'];

  // Add event listeners for each event
  eventsToTrack.forEach((eventType) => {
    window.addEventListener(eventType, logEvent);
  });

  console.log('User event logging initialized.');
};
