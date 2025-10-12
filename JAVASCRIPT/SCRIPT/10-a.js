function toggle(name) {
  if (document.querySelector('.isToggled') && document
      .querySelector(`.${name}`)
      .classList.contains("isToggled") === false)
    document.querySelector('.isToggled').classList.remove('isToggled');
  if (
    document
      .querySelector(`.${name}`)
      .classList.contains("isToggled")
  )
    document.querySelector(`.${name}`).classList.remove("isToggled");
  else document.querySelector(`.${name}`).classList.add("isToggled");
}