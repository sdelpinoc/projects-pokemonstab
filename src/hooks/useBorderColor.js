export const useBorderColor = (activeTypes = []) => {
  const activeTypeFirstName = (activeTypes[0]) ? activeTypes[0].name.toLowerCase() : ''
  const activeTypeSecondName = (activeTypes[1]) ? activeTypes[1].name.toLowerCase() : ''

  const weaknessResistInmuneToSection = document.querySelector('.weaknessResistInmuneTo.section')

  if (weaknessResistInmuneToSection !== null) {
    if (activeTypes[0] && activeTypes[1]) {
      weaknessResistInmuneToSection.style.setProperty('border-image', `linear-gradient(to right, var(--type-${activeTypeFirstName}-background-color) 31%, var(--type-${activeTypeSecondName}-background-color) 100%) 1`)
    } else if (activeTypes[0]) {
      weaknessResistInmuneToSection.style.setProperty('border-color', `var(--type-${activeTypeFirstName}-background-color)`)
      weaknessResistInmuneToSection.style.removeProperty('border-image')
    } else {
      weaknessResistInmuneToSection.style.removeProperty('border-image')
      weaknessResistInmuneToSection.style.setProperty('border-color', 'var(--pokedex-color-1)')
    }
  }

  return [
    activeTypeFirstName,
    activeTypeSecondName
  ]
}
