import { inputValidation } from "./validation"

export class InputItem {
  input
  error
  validationType
  valid = false
  mapKey
  skipSteps
  multistepForm
  stepIndex
  nextOnSelect = false
  mapInput = false

  constructor(input, multistepForm, stepIndex) {
    this.multistepForm = multistepForm //parent form
    this.input = input //input element
    this.validationType = input.dataset.validate
    this.mapKey = this.input.dataset.mapkey ?? null
    this.stepIndex = stepIndex
    this.skipSteps = []

    if (this.input.dataset.skipstep) {
      this.skipStepsArray = this.input.dataset.skipstep.split(',')
      this.skipStepsArray.forEach((step) => {
        this.skipSteps.push(parseInt(step))
      })
    }

    //set flag to trigger next step on input click event
    if (this.input.dataset.nextOnSelect && this.input.dataset.nextOnSelect === 'true') {
      this.nextOnSelect = true
    }

    //set flag to trigger input mappings by input name
    this.mapInput = this.input.dataset.mapInput ? this.input.dataset.mapInput === 'true' : false

    this.setupError()
  }

  validateInput(stepValidate = false) {
    //no validation object means it is not required by default
    if (!this.validationType) {
      this.hideError()
      this.valid = true
      this.mapData()
      return true
    }

    //check if required, needs to at least have some type of input
    if (!this.input.value) {
      this.showError()
      this.valid = false
      return false
    }

    //check input validation based on validation type
    const validationFunction = inputValidation[this.validationType]

    //check if validation exists
    if (validationFunction) {
      const validInput = validationFunction(this.input)

      if (validInput) {
        this.hideError()
        this.valid = true
        this.mapData()

        if (!stepValidate) {
          this.propagateRemoveSkipSteps()
          this.propagateSkipSteps()
        }
        return true
      } else {
        this.showError()
        this.valid = false
        return false
      }
    }
  }

  //Add error message setup to inputs
  setupError() {
    //check if input is a radiowrapper input
    let isRadioWrapperInput = false
    if (this.input.parentElement.classList.contains('radio-wrapper')) {
      isRadioWrapperInput = true
      const hasError = this.input.parentElement?.parentElement?.parentElement?.querySelector('.field-error')

      if (hasError) {
        return
      }
    }
    this.error = document.createElement('div')
    let message = this.input.getAttribute('data-error')
    this.error.classList.add('field-error', 'hidden')
    if (message) {
      this.error.innerText = message
    }

		if(this.error.innerHTML == '') return

		if (this.input.nextElementSibling && this.input.nextElementSibling.tagName == 'LABEL' && this.input.nextElementSibling.getAttribute('for') == this.input.id) {
			this.input.nextElementSibling.insertAdjacentElement(
				'afterend',
				this.error
			)
		} 
    else if (this.input.parentElement?.classList.contains('radio-wrap') || this.input.classList.contains('intl-phone')) {
			this.input.parentElement?.insertAdjacentElement('afterend', this.error)
		} 
    else if (isRadioWrapperInput) {
      this.input.parentElement?.parentElement?.insertAdjacentElement('afterend', this.error)
    }
    else {
			this.input.insertAdjacentElement('afterend', this.error)
		}
	}

  hideError() {
		this.input.classList.remove('error')
    if (this.input.parentElement.classList.contains('radio-wrapper')) {
      const error = this.input.parentElement?.parentElement?.parentElement?.querySelector('.field-error')
      error.classList.add('hidden')
      return
    }

		this.error.classList.add('hidden')
	}
	showError() {
		this.input.classList.add('error')
    if (this.input.parentElement.classList.contains('radio-wrapper')) {
      const error = this.input.parentElement?.parentElement?.parentElement?.querySelector('.field-error')
      error.classList.remove('hidden')
      return
    }

		this.error.classList.remove('hidden')
	}

  //Map input value to other dom element
  mapData() {
    if (this.mapKey) {
      const mapData = document.querySelectorAll(`#${this.mapKey}`)
      if (mapData) {
        mapData.forEach((mapItem) => {
          mapItem.innerHTML = this.input.value
        })
      }
    }
  }

  mapInputData() {
    if (this.mapInput) {
      const mapInputs = document.querySelectorAll(`input[name='${this.input.name}']:not(#${this.input.id})`)
      mapInputs.forEach((currentInput) => {
        currentInput.value = this.input.value
      })
    }
  }

  propagateSkipSteps() {
    if (this.skipSteps.length > 0) {
      this.multistepForm.addSkipSteps(this.skipSteps)
    }
  }

  propagateRemoveSkipSteps() {
    if (this.skipSteps.length === 0) {
      this.multistepForm.removeSkipSteps()
    }
  }

  get input() {
    return this.input
  }

  get nextOnSelect() {
    return this.nextOnSelect
  }

  get ValidationType() {
    return this.validationType
  }

  get valid() {
    return this.valid
  }

  set valid(value) {
    this.valid = value
  }
}