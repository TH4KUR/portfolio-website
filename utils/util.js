export const logUserEvents = () => {
  const logEvent = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    const timestamp = new Date().toISOString();
    const eventType = event.type; // Type of event (e.g., click, view)
    const target = event.target; // The element that triggered the event

    console.log(`[${timestamp}] Event: ${eventType}`, {
      target,
      targetType: target.tagName || 'Unknown',
      targetContent: target.innerText || target.alt || 'No content',
    });
  };

  // List of events to track
  const eventsToTrack = ['click'];

  // Add event listeners for each event
  eventsToTrack.forEach((eventType) => {
    window.addEventListener(eventType, logEvent);
  });

  console.log('User event logging initialized.');
};
