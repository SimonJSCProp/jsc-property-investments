import { MultiStepForm } from "./multistep/index"

export default function MultiStepFormInit() {
    //get multistep form
    const questionnaireForm = document.getElementById('multistep-form')
    new MultiStepForm(questionnaireForm)
}