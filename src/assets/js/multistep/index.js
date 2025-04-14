import { Step } from './components/step'

export class MultiStepForm {
  activeStep
  steps = []
  multiStepForm
  returnStep
  skipSteps //steps that should be skipped in the form
  latestAddedSkipSteps //newest skip steps, to remove if user changes their answer
  counter
  topPrevButton 
  partialForm 
  partialFormSubmitted = false

  constructor(form) {
    this.multiStepForm = form

    //initialize step items in the form
    let stepItems = this.multiStepForm.querySelectorAll('step-item')
    stepItems.forEach((stepItem, index) => {
      const newStep = new Step(stepItem, this, index)
      newStep.listen()
      this.steps.push(newStep)
      if (index === 0) {
        this.activeStep = newStep
      }
    })

    //initialize previous button attached to the header of the form, needs to be here because it uses the activeStep variable
    this.handleTopPreviousButton()

    //Initialize active step
    this.multiStepForm.classList.add('ready')
    this.skipSteps = []
    this.latestAddedSkipSteps = []
    this.counter = this.multiStepForm.querySelector('.counter')
    this.initializeCounter()
    
    this.initRadioWrapListener()

    this.multiStepForm.addEventListener('submit', (e) => {
      e.preventDefault()
      if (this.activeStep.validateStep()) {
        e.currentTarget.submit()
      }
    })

    this.partialForm = document.getElementById('partial-form')
    //check if there is partial submission
    if(this.partialForm && this.multiStepForm.dataset.partialSubmit === 'true') {
      //Check and rename partial form duplicated ids and labels
      this.checkDuplicateIdAndLabel(this.partialForm)
      this.partialForm.addEventListener('submit', (event) => {
        const formData = new FormData(this.partialForm)
        for (const pair of formData.entries()) {
          console.log('value: ', pair[0]+ ', ' + pair[1]); 
      }

        this.partialFormSubmitted = false

        event.preventDefault()
      })
      this.partialFormSubmitted = true
    }
  }

  checkDuplicateIdAndLabel(partialForm) {
    const partialFormLabels = partialForm.querySelectorAll('label')
    const partialFormInputs = partialForm.querySelectorAll('input')

    partialFormLabels.forEach((label) => {
      if (this.multiStepForm.querySelector(`label[for="${label.htmlFor}"]`)) {
        label.htmlFor = label.htmlFor + '-2'
      }
    })

    partialFormInputs.forEach((formInput) => {
      if (this.multiStepForm.querySelector(`input[id="${formInput.id}"]`)) {
        formInput.id = formInput.id + '-2'
      }
    })
  }

  next() {
    // If the step is valid, move to the next step
    this.activeStep.validateStep()
    if (this.activeStep.valid && this.activeStep.index + 1 < this.steps.length) {
        this.returnStep = null
        let index = this.activeStep.index
        this.returnStep = index
        let nextIndex = index + 1
        //check skips, skip if skippable
        while(this.skipSteps.length > 0 && this.skipSteps.includes(nextIndex)) {
          nextIndex += 1
        }

        //silent submission if there is one
        if (this.activeStep.partialSubmit && this.partialForm && this.partialFormSubmitted) {
          this.partialForm.dispatchEvent(new Event('submit', { cancelable: true }))
        }

        this.setActive(nextIndex)
        this.updateCounter()
    }
  }
  
  prev() {
    if (this.activeStep.index - 1 >= 0) {
        this.activeStep.active = false
        this.setActive(this.returnStep)
        this.returnStep = this.activeStep.index - 1
        this.updateCounter()
    }
  }
  
  setActive(index = 0) {
    // this.setClasses(index)
    this.activeStep.step.classList.remove('active')
    this.activeStep = this.steps[index]
    this.activeStep.step.classList.add('active')
    this.toggleButtonClass()
  }

  //set steps to skip
  addSkipSteps(skipSteps) {
    skipSteps.forEach((step) => {
      if (!this.skipSteps.includes(step)) {
        this.skipSteps.push(step)
      }

      if (!this.latestAddedSkipSteps.includes(step)) {
        this.latestAddedSkipSteps.push(step)
      }
    })

  }

  removeSkipSteps() {
    if (this.skipSteps.length > 0) {
      this.skipSteps = this.skipSteps.filter((obj) => { 
        return this.latestAddedSkipSteps.indexOf(obj) == -1; 
      })
      this.latestAddedSkipSteps = []
    }
  }

  //initialize counter for bullets on top of form
  initializeCounter() {
    if (this.counter) {
      for (let i = 0; i < this.steps.length; i++) {
          let num = document.createElement('li')

          num.classList.add(
              '[counter-increment:dots]',
              "before:content-[counters(dots,'')]",
              'bg-gray-200',
              'text-black',
              'flex',
              'items-center',
              'justify-center',
              'h-8',
              'md:h-10',
              'w-8',
              'md:w-10',
              'rounded-full',
              'relative',
              'z-20',
              'font-semibold',
              '[&.active]:bg-green-400',
              '[&.active]:text-white',
              '[&.answered]:bg-black',
              '[&.answered]:text-white',
          )

          if (i === this.activeStep.index) {
              num.classList.add('active')
          }
          if (i < this.activeStep.index) {
              num.classList.add('answered')
          }

          this.counter.appendChild(num)
      }
  }
  }

  //update counter for bullets on top of form
  updateCounter() {
    let counter = this.counter.querySelectorAll('li')
    counter.forEach((item, index) => {
        item.classList.remove('active')
        item.classList.remove('answered')
        if (index < this.activeStep.index) {
            item.classList.add('answered')
        }
    })
    counter[this.activeStep.index].classList.add('active')
  }

  handleTopPreviousButton() {
    this.topPrevButton = document.getElementById('prev-button-top')
    if (this.topPrevButton) {
      this.topPrevButton.addEventListener('click', () => {
        this.prev()
      })
    }
    
  }

  toggleButtonClass() {
    if (this.multiStepForm?.dataset.topPrevButton === 'true' && this.activeStep.index !== 0) {
      if (!this.topPrevButton.classList.contains('active')) {
        this.topPrevButton.classList.add('active')
      }
    } else {
      this.topPrevButton.classList.remove('active')
    }
  }

  initRadioWrapListener() {
    const radioWrappers = this.multiStepForm.querySelectorAll('.radio-wrapper')

    //get all radio wrappers on the page
    if (radioWrappers.length > 0) {
      radioWrappers.forEach((radioWrap) => {
        //initialize click event listener
        radioWrap.addEventListener('click', () => {
          const radioWrappersContainer = radioWrap.closest('.radio-wrapper-container')
          const currentRadioWrappers = radioWrappersContainer.querySelectorAll('.radio-wrapper')
          this.resetRadiosGroup(currentRadioWrappers)
          
          //set input that is nested inside to checked upon click
          const radioInput = radioWrap.querySelector('input')
          radioInput.checked = true
          if (!radioWrap.classList.contains('checked')) {
            radioWrap.classList.add('checked')
          }

          //if radio input is click to next step, handle it
          if (radioInput.dataset.nextOnSelect === 'true') {
            this.next()
          }
        })
      })
    }
  }

  resetRadiosGroup(radioWrappers) {
    //reset all radio to checked = false
    radioWrappers.forEach((currentRadioWrapper) => {
      currentRadioWrapper.classList.remove('checked')
      const currentRadioInput = currentRadioWrapper.querySelector('input')
      currentRadioInput.checked = false
    })
  }
}

