export function shouldAutoShowIntro({ hasSeenIntro, routeName }) {
  return !hasSeenIntro && routeName === 'landing'
}
