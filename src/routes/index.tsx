import { component$, useStyles$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  useStyles$(`body { background-color: #343541; color: #ececf1; }`)
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
