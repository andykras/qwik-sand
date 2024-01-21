import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <h1>Привет 👋</h1>
      <p>это главная страница</p>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Qwik-Sand',
  meta: [
    {
      name: 'qwik-sand',
      content: 'send mails'
    }
  ]
}
