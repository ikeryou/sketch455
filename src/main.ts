import { Contents } from './parts/contents'
import './style.css'

document.querySelectorAll('.l-inner').forEach((el) => {
  new Contents({
    el: el
  })
})

