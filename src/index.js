const messages = [
  "Neo, sooner or later you’re going to realize, just as I did, there’s a difference between knowing the path and walking the path.",
  "What’s really going to bake your noodle later on is, would you still have broken it if I hadn’t said anything?",
  "The answer is out there, Neo, and it’s looking for you, and it will find you if you want it to.",
  "There’s no escaping reason, no denying purpose. Because as we both know, without purpose, we would not exist.",
  "The body cannot live without the mind.",
  "If real is what you can feel, smell, taste and see, then ‘real’ is simply electrical signals interpreted by your brain.",
  "Guns. Lots of guns."
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }