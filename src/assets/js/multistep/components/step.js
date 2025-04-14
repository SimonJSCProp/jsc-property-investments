import { InputItem } from './input'

export class Step {
  step
  inputs = [] //an array of all the inputs
  skipStep //whether step can be skipped
  valid //whether the step is valid to proceed
  nextButton
  prevButton
  multistepForm
  index
  topPrevButton
  partialSubmit = false

  constructor(stepElement, form, index) {
    this.step = stepElement
    this.nextButton = this.step.querySelector('#next-button')
    this.prevButton = this.step.querySelector('#prev-button')
    this.multistepForm = form
    this.index = index
    //step element is the dom element that is being passed in
    this.initializeInputs(stepElement)

    //setup partial submission if there is one
    this.partialSubmit = this.step.dataset.partialSubmit ? this.step.dataset.partialSubmit === 'true' : false
  }

  //function to initialize all inputs
  initializeInputs(stepElement) {
    const stepInputs = stepElement.querySelectorAll('input, textarea, select')
    stepInputs.forEach((stepInput) => {
      if (stepInput.type !== 'button') {
        this.inputs.push(new InputItem(stepInput, this.multistepForm, this.index))
      }
    })
  }

  validateStep() {
    //validate step inputs
    //check if step has all the inputs validated
    let valid = true
    this.valid = true
    this.inputs.forEach((stepInput, index) => {
      //run validation to update object status
      stepInput.validateInput(true)
      
      if(stepInput.valid === false) {
        valid = false
        this.valid = false
      } else {
        //run input mapping if needed
        stepInput.mapInputData()
      }
    })
    
    return valid
  }

  inputHandler(index) {
    this.inputs[index].validateInput()
  }

  listen() {
    if(this.nextButton) {
      //change active step on form
      this.nextButton.addEventListener('click', (e) => {
        this.multistepForm.next()
      })
    }

    if(this.prevButton) {
      //change active step on form
      this.prevButton.addEventListener('click', (e) => {
        this.multistepForm.prev()
      })
    }

    this.step.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
          event.preventDefault()
          this.multistepForm.next()
      }
    });

    //event handlers for input changes
    for (let i = 0; i < this.inputs.length; i++) {
        let func = this.inputHandler.bind(this, i)
        const currentInput = this.inputs[i]
        switch(currentInput.input.type) {
          case 'radio':
            if (currentInput.nextOnSelect) {
              currentInput.input.addEventListener('click', (e) => {
                this.multistepForm.next()
              })
              currentInput.input.addEventListener('change', (e) => {
                this.multistepForm.next()
              })
              break
            }
            currentInput.input.addEventListener('click', func)
            currentInput.input.addEventListener('change', func)
            break
          case 'checkbox':
            currentInput.input.addEventListener('click', func)
            currentInput.input.addEventListener('change', func)
            break
          default:
            currentInput.input.addEventListener('input', func)
            currentInput.input.addEventListener('blur', func)
            break
        }
    }
  }

  get nextButton() {
    return this.nextButton
  }

  get active() {
      return this.step.classList.contains('active')
  }

  get partialSubmit() {
    return this.partialSubmit
  }

  set active(val) {
      if (val) {
          this.step.classList.add('active')
      } else {
          this.step.classList.remove('active')
      }
  }
}