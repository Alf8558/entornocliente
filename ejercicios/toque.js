someElement.addEventListener("touchstart", procesomovimiento, false);// touchstart handler
function procesomovimiento(ev) {
  // Use the event's data to call out to the appropriate gesture handlers
  switch (ev.touches.length) {
    case 1:
      handle_one_touch(ev);
      break;
    case 2:
      handle_two_touches(ev);
      break;
    case 3:
      handle_three_touches(ev);
      break;
      case 4:
        handle_one_touch(ev);
    default:
      gesture_not_supported(ev);
      break;
  }
}
