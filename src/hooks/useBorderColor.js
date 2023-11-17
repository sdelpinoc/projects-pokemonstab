export const useBorderColor = (activeTypes = []) => {
  const activeTypeFirstName = (activeTypes[0]) ? activeTypes[0].name.toLowerCase() : ''
  const activeTypeSecondName = (activeTypes[1]) ? activeTypes[1].name.toLowerCase() : ''

  const weaknessResistImmuneToSection = document.querySelector('.weaknessResistImmuneTo.section')

  if (weaknessResistImmuneToSection !== null) {
    if (activeTypes[0] && activeTypes[1]) {
      weaknessResistImmuneToSection.style.setProperty('border-image', `linear-gradient(to right, var(--type-${activeTypeFirstName}-background-color) 31%, var(--type-${activeTypeSecondName}-background-color) 100%) 1`)
    } else if (activeTypes[0]) {
      weaknessResistImmuneToSection.style.setProperty('border-color', `var(--type-${activeTypeFirstName}-background-color)`)
      weaknessResistImmuneToSection.style.removeProperty('border-image')
    } else {
      weaknessResistImmuneToSection.style.removeProperty('border-image')
      weaknessResistImmuneToSection.style.setProperty('border-color', 'var(--pokedex-color-1)')
    }
  }

  return [
    activeTypeFirstName,
    activeTypeSecondName
  ]
}
