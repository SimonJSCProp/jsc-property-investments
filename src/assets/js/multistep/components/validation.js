export const inputValidation = {
  basic: (input) => {
      return input.value.length > 0
  },

  email: (input) => {
      let matches = input.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
      return (matches && matches.length > 0)
  },

  radio: (input) => {
      let checked = document.querySelector(`input[name="${input.name}"]:checked`)
      if (checked && checked.value === 'skip') {
          return true
      }
      return (checked && checked.value.length > 0)
  },

  phone: (input) => {
      if (!input.value || input.value == "") {
          return false
      }

      var reg = new RegExp(/^[0-9\s-+()]*$/m)
      return reg.test(input.value)
  },

  checkbox: (input) => {
      let checked = document.querySelector(`input[name="${input.name}"]:checked`)
      return (checked && checked.value.length > 0)
  },

  intltel: (input) => {
    if (!input.value || input.value == "") {
        return false
    }
    
    const intl = window.itiFields.find((itiInput) => itiInput.telInput.dataset.intlid === input.dataset.intlid)
    return intl?.isValidNumberPrecise()
  },
  
  select: (input) => {
    return input.value && input.value !== ""
  }
}