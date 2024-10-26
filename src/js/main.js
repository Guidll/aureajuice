function newsletter() {
  event.preventDefault();

  const $target = event.currentTarget
  const $formulario = $target.closest('.js-news-formulario')
  const $email = $formulario.querySelector('.js-news-email')

  if (! $email) {
    return
  }

  if (! $email.value) {
    $email.focus();
    return alert('Preencha o campo de e-mail para se cadastrar na newsletter.')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (! emailRegex.test($email.value)) {
    return alert('E-mail inválido!')
  }

  console.log('Newsletter submit')
  alert('E-mail cadastrado na newsletter!')
}